import { randomUUID } from "node:crypto";
import logger from "@vahor/n8n-kit/logger";
import type { ArgumentsCamelCase, Argv } from "yargs";
import { configFileExists, configFileName, writeConfigFile } from "../config";

export const command = "init";
export const description = "Initialize the configuration file";
export const builder = (yargs: Argv) => {
	yargs
		.showHelpOnFail(true)
		.option("entrypoint", {
			type: "string",
			describe: "The entry point of the project",
		})
		.option("out", {
			type: "string",
			describe: "The output directory",
		})
		.strict();
};
export const handler = async (
	argv: ArgumentsCamelCase<{ entrypoint: string; out: string }>,
) => {
	if (await configFileExists()) {
		throw new Error("Config file already exists");
	}
	await writeConfigFile({
		projectId: randomUUID(),
		entrypoint: argv.entrypoint ?? "src/index.ts",
		out: argv.out ?? "n8n-kit",
	});
	logger.log(`Wrote config file ${configFileName}`);
};
