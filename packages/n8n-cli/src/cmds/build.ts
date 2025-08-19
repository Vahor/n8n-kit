import * as path from "node:path";
import type { ArgumentsCamelCase, Argv } from "yargs";
import { readConfigFile } from "../config";

export const command = "build";
export const description = "Build the project";
export const builder = (yargs: Argv) => yargs.showHelpOnFail(true);

export const handler = async (_: ArgumentsCamelCase) => {
	const config = await readConfigFile();
	const entrypoint = path.resolve(process.cwd(), config.entrypoint);

	// Resolve the entrypoint path
	const { app } = await import(path.resolve(entrypoint));

	if (app === undefined) {
		throw new Error("Entrypoint does not export an app; Use `export { app }`");
	}
};
