Error.stackTraceLimit = Infinity;
process.env.NODE_ENV = process.env.NODE_ENV || "production";

import logger from "@vahor/n8n-kit/logger";

logger.setEnabled(true);

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yargsInstance = yargs(hideBin(process.argv));
export type GlobalOptions = {
	dryRun: boolean;
	yes: boolean;
	debug: boolean;
	entrypoint: string;
};

yargsInstance
	.scriptName("n8n-kit")

	.command(require("./cmds/init"))
	.command(require("./cmds/deploy"))
	.command(require("./cmds/diff"))
	.command(require("./cmds/build"))
	.command(require("./cmds/import"))

	.option("dry-run", {
		type: "boolean",
		describe: "Don't write to disk or deploy anything",
		default: false,
	})
	.option("yes", {
		type: "boolean",
		describe: "Skip confirmation prompt",
		default: false,
	})
	.option("debug", {
		type: "boolean",
		describe: "Enable debug mode",
		default: false,
	})
	.option("entrypoint", {
		type: "string",
		describe: "Override entrypoint path",
	})

	.middleware((argv) => {
		if (argv.debug) {
			process.env.DEBUG = "true";
		}
		if (argv.dryRun) {
			logger.setDryRun(true);
		}
	})

	.recommendCommands()
	.exitProcess(false)
	.help()
	.alias("h", "help")
	.completion()
	.parserConfiguration({
		"boolean-negation": false, // Disable automatic --no- handling
	})
	.command({
		command: "*", // catches everything not previously matched
		handler: (argv) => {
			const cmd = argv._[0];

			if (cmd === "completion") {
				// Yargs seems to also run the catch all command in case the completion command is run
				return;
			}

			console.error(
				cmd
					? `Could not find command "${cmd}", here are all available ones:`
					: `Please pass a command to n8n-kit, here are all available ones:`,
			);
			yargsInstance.showHelp();
			process.exit(1);
		},
	})
	.fail((message, error) => {
		logger.error(message, error);
		process.exit(1);
	})
	.parse();
