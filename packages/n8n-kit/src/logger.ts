import chalk from "chalk";

class Logger {
	private context: string = "";
	private isDryRun: boolean = false;

	constructor() {}

	setContext(context: string | null): this {
		this.context = context ?? "";
		return this;
	}

	setDryRun(enabled: boolean = true): this {
		this.isDryRun = enabled;
		return this;
	}

	/**
	 * Format log message with context and dry-run prefix
	 */
	private _format(message: string): string {
		const parts: string[] = [];
		if (this.isDryRun) parts.push(chalk.yellow("[dry-run]"));
		if (this.context) parts.push(chalk.green(`[${this.context}]`));
		if (parts.length === 0) return message;
		return `${parts.join("")} ${message}`;
	}

	log(message: string): void {
		console.log(this._format(message));
	}

	warn(message: string): void {
		console.warn(chalk.yellow(this._format(message)));
	}

	debug(message: string): void {
		if (process.env.DEBUG) {
			console.debug(chalk.magentaBright(this._format(message)));
		}
	}

	error(message: string, error?: Error | null): void {
		console.error(chalk.red(this._format(message ?? error?.message)));
		if (error) {
			console.error(chalk.gray(error.stack));
		}
	}
}

export default new Logger();
