import * as fs from "node:fs";
import * as path from "node:path";
import type { App, Workflow } from "@vahor/n8n-kit";
import { table } from "table";
import type { Argv } from "yargs";
import { readConfigFile } from "../config";
import { env } from "../env";
import { createFolder, resolvePath } from "../files";

//

export const command = "deploy";
export const description = "Deploy workflows to n8n";
export const builder = (yargs: Argv) =>
	yargs
		.showHelpOnFail(true)
		.option("no-build", {
			type: "boolean",
			describe: "Do not build the workflows",
			default: false,
		})
		.option("no-deploy", {
			type: "boolean",
			describe: "Do not deploy the workflows",
			default: false,
		})
		.option("dry-run", {
			type: "boolean",
			describe: "Build files but do not write them to disk and do not deploy",
			default: false,
		});

type DeployOptions = {
	noBuild: boolean;
	noDeploy: boolean;
	dryRun: boolean;
};

export const buildWorkflows = async (options: DeployOptions) => {
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
		return [];
	}

	console.log(`Found ${app.workflows.length} workflows`);

	console.log(
		table([["ID", "Name"], ...app.workflows.map((w) => [w.id, w.getName()])]),
	);

	const workflowsFolder = resolvePath(config, "workflows");
	if (!options.noBuild) {
		await createFolder(config, "workflows");
		for (const workflow of app.workflows) {
			const workflowPath = path.join(workflowsFolder, `${workflow.id}.json`);
			const workflowJson = JSON.stringify(workflow.build());
			if (options.dryRun) {
				console.log(
					`[dry-run] Wrote workflow '${workflow.id}' to ${workflowPath}`,
				);
				continue;
			}
			await fs.promises.writeFile(workflowPath, workflowJson);
			console.log(`Wrote workflow '${workflow.id}' to ${workflowPath}`);
		}
	}

	return app.workflows;
};

export const deployWorkflows = async (
	workflows: Workflow[],
	options: DeployOptions,
) => {
	if (options.dryRun || options.noDeploy) {
		console.log("Dry run, not deploying workflows");
		return;
	}
	const apiKey = env.N8N_API_KEY;
	console.log(apiKey, workflows);
};

export const handler = async (argv: DeployOptions) => {
	const workflows = await buildWorkflows(argv);
	if (!workflows.length) return;
	await deployWorkflows(workflows, argv);
};
