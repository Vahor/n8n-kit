import * as fs from "node:fs";
import path from "node:path";
import logger from "../logger";
import { shortHash } from "../utils/slugify";
import {
	applyToExpression,
	type ExpressionPrefix,
	JsonExpression,
} from "../workflow";

export interface BundledFunctionProps {
	/**
	 * Path containing the entrypoint file
	 */
	projectRoot: string;

	/**
	 * Path to the entrypoint file (relative to `projectRoot`)
	 * @default "main.py" for Python and "index.ts" or "index.js" for Node.js
	 */
	entrypoint?: string;

	/**
	 * Main function name
	 * @default "handler"
	 */
	mainFunctionName?: string;

	/**
	 * Parameters to call the main function with
	 */
	input?: Record<string, unknown>;
}

export abstract class BundledFunction {
	protected readonly entrypoint: string;
	protected readonly id: string;
	protected readonly name: string;
	protected readonly expressionPrefix: ExpressionPrefix = "$";

	protected possibleEntrypoints: string[];

	protected constructor(
		readonly props: BundledFunctionProps,
		{ possibleEntrypoints }: { possibleEntrypoints?: string[] } = {},
	) {
		this.possibleEntrypoints = possibleEntrypoints ?? [];
		this.entrypoint = this.findEntrypoint();
		this.id = shortHash(`${this.props.projectRoot}/${this.entrypoint}`, 20);
		this.name = `${path.basename(this.props.projectRoot)}/${this.entrypoint}`;
	}

	/**
	 * @internal
	 * Bundles the function
	 */
	public abstract bundle(): Promise<string>;

	protected getBundledFile(outDir: string) {
		const entrypoint = path.basename(this.entrypoint);
		return path.join(outDir, entrypoint);
	}

	private findEntrypoint() {
		if (this.props.entrypoint) {
			const fullPath = path.join(this.props.projectRoot, this.props.entrypoint);
			if (!fs.existsSync(fullPath)) {
				throw new Error(
					`Entrypoint file ${this.props.entrypoint} does not exist`,
				);
			}
			return this.props.entrypoint;
		}

		for (const entrypoint of this.possibleEntrypoints) {
			const fullPath = path.join(this.props.projectRoot, entrypoint);
			logger.debug(`Checking if ${fullPath} exists`);
			if (fs.existsSync(fullPath)) {
				return entrypoint;
			}
		}

		throw new Error(
			`Could not find entrypoint file in ${this.props.projectRoot}`,
		);
	}

	protected prepareHandleParameters() {
		const parameters = this.props.input ?? {};
		const formattedParameters = applyToExpression(parameters, (expression) => {
			return expression.prefix(this.expressionPrefix);
		});

		return JsonExpression.from(formattedParameters).toExpression({
			indent: 2,
			withPrefix: false,
			removeCurly: true,
		});
	}
}
