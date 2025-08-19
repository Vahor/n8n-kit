process.env.NODE_ENV = process.env.NODE_ENV || "production";

import chalk from "chalk";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import * as z from "zod";

export const yargsInstance = yargs(hideBin(process.argv));

yargsInstance
	.scriptName("n8n-kit")
	.command(require("./cmds/init"))
	.command(require("./cmds/build"))
	.command(require("./cmds/workflow"))
	.recommendCommands()
	.exitProcess(false)
	.env("N8N_KIT")
	.epilogue(
		`Options can be specified via environment variables with the "N8N_KIT_" prefix.`,
	)
	.help()
	.alias("h", "help")
	.completion()
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
	.fail(async (message, error) => {
		if (message) {
			console.error(message);
		}

		if (error) {
			if (error instanceof z.ZodError) {
				console.error(chalk.red(z.prettifyError(error)));
			} else {
				console.error(chalk.red(error));
			}
		}
		process.exit(1);
	})
	.parse();
