import * as fs from "node:fs";
import path from "node:path";
import chalk from "chalk";
import spawn from "nano-spawn";
import { build, type Options } from "tsdown";
import { DEFAULT_CONFIG } from "../constants";
import logger from "../logger";
import { BundledFunction, type BundledFunctionProps } from "./function";

interface NodejsFunctionProps extends BundledFunctionProps {
	/**
	 * Bundler options
	 */
	bundlerOptions?: Options;

	/**
	 * Installation command
	 * @default ["npm", ["ci"]]
	 */
	installCommand?: [string, string[]];
}

export class NodejsFunction extends BundledFunction {
	protected override possibleEntrypoints = ["index.ts", "index.js"];
	private readonly installCommand: [string, string[]];

	private constructor(override props: NodejsFunctionProps) {
		super(props);
		this.installCommand = this.props.installCommand ?? ["npm", ["ci"]];
	}

	public static from(props: NodejsFunctionProps) {
		return new NodejsFunction(props);
	}

	public override getBundledFile(outDir: string) {
		const entrypoint = path.basename(this.entrypoint);
		return path.join(outDir, entrypoint.replace(".ts", ".js"));
	}

	override async bundle() {
		await this.installDeps();
		logger.log(`Bundling ${this.name}...`);
		const outDir = path.join(DEFAULT_CONFIG.out, ".bundle-js", this.id);
		await build({
			minify: false,
			target: ["es2020"],
			...this.props.bundlerOptions,
			platform: "node",
			entry: [this.entrypoint],
			cwd: this.props.projectRoot,
			clean: true,
			unbundle: false,
			dts: false,
			outDir,
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

	private async installDeps() {
		logger.log(
			`Installing dependencies for ${this.name}... ${chalk.gray(`(${this.installCommand[0]} ${this.installCommand[1].join(" ")})`)}`,
		);
		await spawn(this.installCommand[0], this.installCommand[1], {
			cwd: this.props.projectRoot,
			stdio: "inherit",
			timeout: 15 * 1000,
		});
		logger.log(`Installed dependencies for ${this.name}`);
	}
}
