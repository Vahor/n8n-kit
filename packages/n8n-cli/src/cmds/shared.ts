import path from "node:path";
import {
	type App,
	type Workflow,
	type WorkflowDefinition,
	workflowTagId,
} from "@vahor/n8n-kit";
import logger from "@vahor/n8n-kit/logger";
import { setProjectSalt } from "@vahor/n8n-kit/utils";
import chalk from "chalk";
import type { GlobalOptions } from "..";
import { getProjectIdentifier, readConfigFile } from "../config";
import type { N8nApi } from "../n8n-api";

export const loadApplication = async (options: GlobalOptions) => {
	logger.log("Loading application...");
	const config = await readConfigFile();

	const projectIdentifier = await getProjectIdentifier();
	setProjectSalt(projectIdentifier);
	const entrypoint = path.resolve(
		process.cwd(),
		options.entrypoint ?? config.entrypoint,
	);
	const fullPath = path.resolve(entrypoint);

	// Resolve the entrypoint path
	delete require.cache[fullPath];
	const { app: _app } = await import(fullPath);

	if (_app === undefined) {
		throw new Error("Entrypoint does not export an app; Use `export { app }`");
	}
	logger.log("Validating application...");

	const app: App = _app;
	app["~validate"]();

	if (app.workflows.length === 0) {
		logger.error("No workflows found");
		process.exit(1);
	}

	console.log();
	logger.log(`Found ${app.workflows.length} workflows`);

	return { app, config };
};

export const getWorkflowMapping = async (
	n8n: N8nApi,
	workflows: App["workflows"],
	callback?: (workflow: Workflow<any, any>, match: WorkflowDefinition) => void,
) => {
	const matchMap = new Map<string, WorkflowDefinition>();
	for (const workflow of workflows) {
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
			callback?.(workflow, match[0]!);
			logger.log(`Found match with workflow ${chalk.cyan(match[0]!.id)}`);
			matchMap.set(workflow.id, match[0]!);
		} else {
			logger.log("No match found");
		}
		logger.setContext(null);
	}
	return matchMap;
};
