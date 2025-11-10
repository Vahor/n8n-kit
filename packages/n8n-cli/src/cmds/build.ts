import * as fs from "node:fs";
import * as path from "node:path";
import logger from "@vahor/n8n-kit/logger";
import chalk from "chalk";
import { table } from "table";
import type { Argv } from "yargs";
import type { GlobalOptions } from "..";
import { createFolder, resolvePath } from "../files";
import { setupWatch, type WatchOptions } from "../utils/watch";
import { prepareWorkflowForDiff } from "./diff";
import { loadApplication } from "./shared";

export const command = "build";
export const description = "Build app and save json files";
export const builder = (yargs: Argv) =>
	yargs
		.showHelpOnFail(true)
		.option("indent", {
			type: "number",
			describe: "Indent json files",
			default: 0,
		})
		.option("sort", {
			type: "boolean",
			describe: "Sort keys alphabetically, useful to compare json files",
			default: false,
		})
		.option("watch", {
			type: "string",
			describe:
				"Watch for changes and rebuild. Pass a path to watch specific folder, or leave empty to watch entrypoint",
		})
		.strict();

type Options = GlobalOptions &
	WatchOptions & {
		indent: number;
		sort: boolean;
	};

const buildWorkflows = async (options: Options) => {
	const { app, config } = await loadApplication(options);
	console.log(
		table([
			["ID", "HashId", "Name"],
			...app.workflows.map((w) => [w.id, w.getHashId(), w.getName()]),
		]),
	);

	const workflowsFolder = resolvePath(config, "workflows");
	await createFolder(config, "workflows");
	for (const workflow of app.workflows) {
		logger.setContext(`build:${workflow.id}`);

		const workflowPath = path.join(workflowsFolder, `${workflow.id}.json`);

		let buildWorkflow = await workflow.build();
		if (options.sort) buildWorkflow = prepareWorkflowForDiff(buildWorkflow);
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
	return { app, config };
};

export const handler = async (options: Options) => {
	const { config } = await buildWorkflows(options);

	if (options.watch !== undefined) {
		await setupWatch(
			{
				callback: () => buildWorkflows(options),
				actionName: "rebuilding",
				successName: "Rebuild",
			},
			options.watch || options.entrypoint || config.entrypoint,
		);
	}
};
