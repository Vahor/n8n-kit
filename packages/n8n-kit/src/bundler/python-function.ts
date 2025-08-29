import * as fs from "node:fs";
import path from "node:path";
import { DEFAULT_CONFIG } from "../constants";
import logger from "../logger";
import { BundledFunction, type BundledFunctionProps } from "./function";

interface PythonFunctionProps extends BundledFunctionProps {}

export class PythonFunction extends BundledFunction {
	protected override possibleEntrypoints = ["main.py"];

	private constructor(override props: PythonFunctionProps) {
		super(props);
	}

	public static from(props: PythonFunctionProps) {
		return new PythonFunction(props);
	}

	override async bundle() {
		logger.log(`Preparing ${this.name}...`);
		const outDir = path.join(DEFAULT_CONFIG.out, ".bundle-py", this.id);

		const returnStatement = `return ${this.props.mainFunctionName ?? "handler"}(${this.prepareHandleParameters()});`;
		const content = await fs.promises.readFile(this.entrypoint, "utf8");
		const fileContent = `${content}\n${returnStatement}`;

		await fs.promises.writeFile(this.getBundledFile(outDir), fileContent);
		logger.log(`${this.name} saved to ${outDir}`);

		return fileContent;
	}
}
