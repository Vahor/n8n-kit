import * as fs from "node:fs";
import * as path from "node:path";
import type { App } from "@vahor/n8n-kit";
import { table } from "table";
import type { ArgumentsCamelCase, Argv } from "yargs";
import { readConfigFile } from "../config";
import { createFolder } from "../files";
export const command = "build";
export const description = "Build the project";
export const builder = (yargs: Argv) =>
	yargs.showHelpOnFail(true).option("dry-run", {
		type: "boolean",
		describe: "Do not write any files",
	});

export const handler = async (
	argv: ArgumentsCamelCase<{ dryRun: boolean }>,
) => {
	const config = await readConfigFile();
	const entrypoint = path.resolve(process.cwd(), config.entrypoint);
	const fullPath = path.resolve(entrypoint);

	// Resolve the entrypoint path
	delete require.cache[fullPath];
	const { app: _app } = await import(fullPath);

	if (_app === undefined) {
		throw new Error("Entrypoint does not export an app; Use `export { app }`");
	}

	const app: App = _app;
	app["~validate"]();

	if (app.workflows.length === 0) {
		console.log("No workflows found");
		return;
	}

	console.log(`Found ${app.workflows.length} workflows`);

	console.log(
		table([["ID", "Name"], ...app.workflows.map((w) => [w.id, w.getName()])]),
	);

	if (argv.dryRun) {
		return;
	}

	const workflowsFolder = await createFolder(config, "workflows");

	for (const workflow of app.workflows) {
		const workflowPath = path.join(workflowsFolder, `${workflow.id}.json`);
		await fs.promises.writeFile(workflowPath, JSON.stringify(workflow.build()));
		console.log(`Wrote workflow '${workflow.id}' to ${workflowPath}`);
	}
};
