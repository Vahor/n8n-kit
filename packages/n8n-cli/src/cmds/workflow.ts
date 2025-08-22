import type { Argv } from "yargs";
import { yargsInstance } from "..";

export const command = "workflow [command]";
export const description = "Manage workflows";
export const builder = (yargs: Argv) => {
	return yargs
		.showHelpOnFail(true)
		.command(require("./workflow_cmds/diff"))
		.command(require("./workflow_cmds/get"))
		.command(require("./workflow_cmds/list"));
};
export const handler = () => {
	yargsInstance.showHelp();
};
