import * as fs from "node:fs";
import * as path from "node:path";
import type { App } from "@vahor/n8n-kit";
import logger from "@vahor/n8n-kit/logger";
import chalk from "chalk";
import { table } from "table";
import type { Argv } from "yargs";
import type { GlobalOptions } from "..";
import { readConfigFile } from "../config";
import { createFolder, resolvePath } from "../files";

export const command = "build";
export const description = "Build app and save json files";
export const builder = (yargs: Argv) =>
	yargs.showHelpOnFail(true).option("indent", {
		type: "number",
		describe: "Indent json files",
		default: 0,
	});

type Options = GlobalOptions & {
	indent: number;
};

export const loadApplication = async () => {
	logger.log("Loading application...");
	const config = await readConfigFile();
	const entrypoint = path.resolve(process.cwd(), config.entrypoint);
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

	console.log(
		table([["ID", "Name"], ...app.workflows.map((w) => [w.id, w.getName()])]),
	);
	return app;
};

export const handler = async (options: Options) => {
	const app = await loadApplication();

	const config = await readConfigFile();
	const workflowsFolder = resolvePath(config, "workflows");
	await createFolder(config, "workflows");
	for (const workflow of app.workflows) {
		logger.setContext(`build:${workflow.id}`);

		const workflowPath = path.join(workflowsFolder, `${workflow.id}.json`);

		const buildWorkflow = workflow.build();
		const workflowJson = JSON.stringify(buildWorkflow, null, options.indent);

		if (!options.dryRun) {
			await fs.promises.writeFile(workflowPath, workflowJson);
		}
		const relativePath = path.relative(process.cwd(), workflowPath);

		logger.setContext(null);
		logger.log(
			`Wrote workflow ${chalk.bold(workflow.id)} to ${chalk.blue(relativePath)}`,
		);
	}
};
