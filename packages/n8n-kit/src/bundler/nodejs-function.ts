import * as fs from "node:fs";
import path from "node:path";
import spawn from "nano-spawn";
import { build, type Options } from "tsdown";
import { DEFAULT_CONFIG } from "../constants";
import logger from "../logger";
import { shortHash } from "../utils/slugify";
import { ExpressionBuilder } from "../workflow";

interface NodejsFunctionProps {
	/**
	 * Path containing the `package.json` and entrypoint file
	 */
	projectRoot: string;

	/**
	 * Path to the entrypoint file (relative to `projectRoot`)
	 * @default "index.ts" or "index.js"
	 */
	entrypoint?: string;

	/**
	 * Main function name
	 * @default "handler"
	 */
	mainFunctionName?: string;

	/**
	 * Bundler options
	 */
	bundlerOptions?: Options;

	/**
	 * Parameters to call the main function with
	 */
	input?: Record<string, unknown>;
}

export class NodejsFunction {
	private readonly entrypoint: string;
	private readonly id: string;
	private readonly name: string;

	private constructor(private readonly props: NodejsFunctionProps) {
		this.entrypoint = this.findEntrypoint();
		this.id = shortHash(`${this.props.projectRoot}/${this.entrypoint}`, 20);
		this.name = `${path.basename(this.props.projectRoot)}/${this.entrypoint}`;
	}

	public static from(props: NodejsFunctionProps) {
		return new NodejsFunction(props);
	}

	private findEntrypoint() {
		if (this.props.entrypoint) {
			const fullPath = `${this.props.projectRoot}/${this.props.entrypoint}`;
			if (!fs.existsSync(fullPath)) {
				throw new Error(
					`Entrypoint file ${this.props.entrypoint} does not exist`,
				);
			}
			return this.props.entrypoint;
		}

		const possibleEntrypoints = ["index.ts", "index.js"];
		for (const entrypoint of possibleEntrypoints) {
			const fullPath = `${this.props.projectRoot}/${entrypoint}`;
			logger.log(`Checking if ${fullPath} exists`);
			if (fs.existsSync(fullPath)) {
				return entrypoint;
			}
		}

		throw new Error("Could not find entrypoint file");
	}

	private getPackageJson() {
		const packageJsonPath = `${this.props.projectRoot}/package.json`;
		if (!fs.existsSync(packageJsonPath)) {
			throw new Error("Could not find package.json");
		}
		return JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
	}

	public getDependencies() {
		const packageJson = this.getPackageJson();
		return Object.keys(packageJson.dependencies ?? {});
	}

	public getBundledFile(outDir: string) {
		const entrypoint = this.entrypoint.replace(".ts", ".js");
		return `${outDir}/${entrypoint}`;
	}

	/**
	 * @internal
	 * Bundles the function
	 */
	public async bundle() {
		await this.installDeps();
		logger.log(`Bundling ${this.name}...`);
		const outDir = `${DEFAULT_CONFIG.out}/.bundle-js/${this.id}`;
		await build({
			...this.props.bundlerOptions,
			target: ["es2020"],
			platform: "node",
			entry: [this.entrypoint],
			cwd: this.props.projectRoot,
			clean: true,
			unbundle: false,
			dts: false,
			outDir: `${DEFAULT_CONFIG.out}/.bundle-js/${this.id}`,
			format: ["cjs"],
			footer: {
				js: `return ${this.props.mainFunctionName ?? "handler"}(${this.prepareHandleParameters()});`,
			},
			noExternal: () => true,
		});
		logger.log(`Bundled ${this.name} to ${outDir}`);

		const fileContent = await fs.promises.readFile(
			this.getBundledFile(outDir),
			"utf8",
		);
		return fileContent;
	}

	private prepareHandleParameters() {
		const parameters = this.props.input ?? {};
		const formattedParameters: Record<string, unknown> = {};
		for (const [key, value] of Object.entries(parameters)) {
			if (value instanceof ExpressionBuilder) {
				formattedParameters[key] = value.toExpression();
			} else {
				formattedParameters[key] = value;
			}
		}
		// TODO: we'll have to refactor this as we don't want quotes around expressions
		let data = JSON.stringify(formattedParameters, null, 2);
		// remove quotes if the value starts with a ={{ and ends with }}
		data = data.replace(/"=\{\{\s*(.*?)\s*\}\}"/g, "$1");
		return data;
	}

	private async installDeps() {
		logger.log(`Installing dependencies for ${this.name}...`);
		await spawn("npm", ["ci"], {
			cwd: this.props.projectRoot,
			stdio: "inherit",
			timeout: 15 * 1000,
		});
		logger.log(`Installed dependencies for ${this.name}`);
	}
}
