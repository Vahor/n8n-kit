// // https://github.com/yamcodes/ark.env/blob/5930e54155567da912b09b32b84161e31514bf6d/packages/ark.env/src/errors.ts#L30

import type { ArkErrors } from "arktype";
import chalk from "chalk";
import { indent } from "./indent";

/**
 * Format the errors returned by ArkType to be more readable
 * @param errors - The errors returned by ArkType
 * @returns A string of the formatted errors
 */
const formatErrors = (errors: ArkErrors): string =>
	Object.entries(errors.byPath)
		.map(([path, error]) => {
			const messageWithoutPath = error.message.startsWith(path)
				? error.message.slice(path.length)
				: error.message;

			// Extract the value in parentheses if it exists
			const valueMatch = messageWithoutPath.match(/\(was "([^"]+)"\)/);
			const formattedMessage = valueMatch
				? messageWithoutPath.replace(
						`(was "${valueMatch[1]}")`,
						`(was ${chalk.cyan(`"${valueMatch[1]}"`)})`,
					)
				: messageWithoutPath;

			return `${chalk.yellow(path)}${formattedMessage}`;
		})
		.join("\n");

export const formatArkErrors = (errors: ArkErrors): string => {
	const message = "Errors found while validating environment variables";
	return `${chalk.red(message)}\n${indent(formatErrors(errors))}\n`;
};
