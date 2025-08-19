import type { ArgumentsCamelCase, Argv } from "yargs";

export const command = "list";
export const description = "List existing workflows";
export const builder = (yargs: Argv) => {
	yargs.showHelpOnFail(true).strict();
};
export const handler = async (_: ArgumentsCamelCase) => {
	console.log("list");
};
