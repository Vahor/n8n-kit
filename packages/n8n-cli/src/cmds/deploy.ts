import { confirm } from "@inquirer/prompts";
import { workflowTagId } from "@vahor/n8n-kit";
import logger from "@vahor/n8n-kit/logger";
import chalk from "chalk";
import { table } from "table";
import type { Argv } from "yargs";
import { UNDEFINED_ID } from "../constants";
import { N8nApi } from "../n8n-api";
import { loadApplication } from "./build";

export const command = "deploy";
export const description = "Deploy app to n8n";
export const builder = (yargs: Argv) => yargs.showHelpOnFail(true);

type DeployOptions = {
	dryRun: boolean;
	yes: boolean;
};

export const handler = async (options: DeployOptions) => {
	const app = await loadApplication();

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
	for (const workflow of app.workflows) {
		logger.setContext(`resolve:${workflow.id}`);

		const tag = workflowTagId(workflow.hashId);
		const match = (
			await n8n.listWorkflows({
				tags: [tag],
			})
		).filter((w) => w.isArchived === false);
		if (match.length === 0) logger.debug("No match found");
		if (match.length > 1) {
			logger.error(
				`Multiple matches found for workflow ${workflow.id} (${tag})`,
			);
			process.exit(1);
		}
		if (match.length === 1) {
			workflow.n8nWorkflowId = match[0]!.id;
			logger.log(
				`Found match for workflow ${chalk.cyan(workflow.n8nWorkflowId)}`,
			);
		} else {
			logger.log("No match found");
		}
		logger.setContext(null);
	}

	logger.log("Deploying workflows...");

	for (const workflow of app.workflows) {
		logger.setContext(`deploy:${workflow.id}`);

		const buildWorkflow = workflow.build();
		const { id: _id, tags: workflowTags, active, ...rest } = buildWorkflow;

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
		logger.log("Deploying workflow...");
		if (workflow.n8nWorkflowId) {
			!options.dryRun &&
				(await n8n.updateWorkflow(workflow.n8nWorkflowId, rest));
			logger.log(
				`Updated workflow with id ${chalk.cyan(workflow.n8nWorkflowId)}`,
			);
		} else {
			if (!options.dryRun) {
				const result = await n8n.createWorkflow(rest);
				workflow.n8nWorkflowId = result.id;
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
