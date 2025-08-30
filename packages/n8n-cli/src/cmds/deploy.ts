import { confirm } from "@inquirer/prompts";
import {
	RESOLVED_WORKFLOW_ID,
	RESOLVED_WORKFLOW_ID_PREFIX,
} from "@vahor/n8n-kit";
import logger from "@vahor/n8n-kit/logger";
import chalk from "chalk";
import { table } from "table";
import type { Argv } from "yargs";
import type { GlobalOptions } from "..";
import { UNDEFINED_ID } from "../constants";
import { N8nApi } from "../n8n-api";
import { getWorkflowMapping, loadApplication } from "./shared";

export const command = "deploy";
export const description = "Deploy app to n8n";
export const builder = (yargs: Argv) =>
	yargs
		.showHelpOnFail(true)
		.option("merge", {
			type: "boolean",
			default: true,
			describe: "Preserve node positions from existing workflows",
		})
		.strict();

type DeployOptions = GlobalOptions & {
	dryRun: boolean;
	yes: boolean;
	merge: boolean;
};

export const handler = async (options: DeployOptions) => {
	const { app } = await loadApplication(options);
	console.log(
		table([
			["ID", "HashId", "Name"],
			...app.workflows.map((w) => [w.id, w.hashId, w.getName()]),
		]),
	);

	console.log();
	if (!options.yes && !options.dryRun) {
		const result = await confirm({
			message: "This will overwrite existing workflows, continue?",
		});
		if (!result) process.exit(0);
	} else {
		logger.log("Skipping confirmation prompt");
	}
	console.log();

	const n8n = new N8nApi();

	logger.log("Fetching tags...");
	const tags = await n8n.getTags();

	logger.log("Resolving workflow ids...");

	// custom id -> n8n id
	const matchMap = await getWorkflowMapping(
		n8n,
		app.workflows,
		(workflow, match) => {
			workflow.n8nWorkflowId = match.id;
		},
	);

	logger.log("Deploying workflows...");

	for (const workflow of app.workflows) {
		logger.setContext(`deploy:${workflow.id}`);

		const buildWorkflow = await workflow.build();
		const { id: _id, tags: workflowTags, active, ...rest } = buildWorkflow;

		// If merge flag is enabled and workflow exists, merge node positions
		if (options.merge) {
			if (workflow.n8nWorkflowId) {
				try {
					logger.log("Merging node positions from existing workflow...");
					const existingWorkflow = matchMap.get(workflow.id)!;

					for (const node of rest.nodes) {
						const existingNode = existingWorkflow.nodes.find(
							(n) => n.name === node.name,
						);
						if (!existingNode || !existingNode.position) continue;
						node.position = existingNode.position;
					}
				} catch (error) {
					logger.warn(`Failed to merge positions: ${error}`);
				}
			} else {
				logger.warn(
					`Workflow ${workflow.id} does not exist in n8n, skipping merging positions`,
				);
			}
		}

		// Create missing tags
		for (const tag of workflowTags) {
			const existingTag = tags.find((t) => t.name === tag.name);
			if (!existingTag) {
				logger.log(`Creating tag ${chalk.bold(tag.name)}`);
				if (!options.dryRun) {
					const result = await n8n.createTag(tag.name);
					tag.id = result.id;
				} else {
					tag.id = UNDEFINED_ID;
				}
			} else {
				tag.id = existingTag.id;
			}
		}

		// Create or update workflow
		let jsonRepresentation = JSON.stringify(rest);
		logger.log(`Resolving references in workflow...`);
		for (const [workflowId, workflow] of matchMap) {
			const resolvedWorkflowKey = RESOLVED_WORKFLOW_ID(workflowId);
			if (jsonRepresentation.includes(resolvedWorkflowKey)) {
				jsonRepresentation = jsonRepresentation.replaceAll(
					resolvedWorkflowKey,
					workflow.id,
				);
				logger.debug(
					`Replaced references to ${workflowId} with ${workflow.id}`,
				);
			}
		}
		if (jsonRepresentation.includes(RESOLVED_WORKFLOW_ID_PREFIX)) {
			logger.error(
				`Workflow contains unresolved references, check order of workflows`,
			);
			process.exit(1);
		}
		logger.log("Deploying workflow...");
		if (workflow.n8nWorkflowId) {
			!options.dryRun &&
				(await n8n.updateWorkflow(workflow.n8nWorkflowId, jsonRepresentation));
			logger.log(
				`Updated workflow with id ${chalk.cyan(workflow.n8nWorkflowId)}`,
			);
		} else {
			if (!options.dryRun) {
				const result = await n8n.createWorkflow(jsonRepresentation);
				workflow.n8nWorkflowId = result.id;
				if (!matchMap.has(workflow.id)) {
					matchMap.set(workflow.id, result);
				}
			} else {
				workflow.n8nWorkflowId = UNDEFINED_ID;
			}
			logger.log(
				`Created workflow with id ${chalk.cyan(workflow.n8nWorkflowId)}`,
			);
		}

		// Apply tags
		logger.log("Applying tags...");
		if (!options.dryRun) {
			await n8n.updateTags(
				workflow.n8nWorkflowId,
				workflowTags.map((t) => ({ id: t.id! })),
			);
		}

		// Set active
		logger.log(`Setting ${active ? "active" : "inactive"} state...`);
		!options.dryRun &&
			(await n8n.setActiveWorkflow(workflow.n8nWorkflowId, active));

		logger.log("Done");
		logger.setContext(null);
	}

	logger.log(`Deployed ${app.workflows.length} workflows`);
	console.log();
	console.log(
		table([
			["ID", "Name", "URL"],
			...app.workflows.map((w) => [
				w.id,
				w.getName(),
				n8n.formatWorkflowUrl(w.n8nWorkflowId!),
			]),
		]),
	);
};
