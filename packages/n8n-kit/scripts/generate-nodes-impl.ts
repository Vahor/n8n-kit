import * as path from "node:path";
import { CodeMaker } from "codemaker";
import { globSync } from "tinyglobby";
import { validCustomTypeAsStringUnion } from "./shared";

const allNodesTypes = globSync("../src/generated/nodes/**/*.ts", {
	cwd: path.resolve(__dirname),
});
const allCredentials = globSync("../src/generated/credentials/**/*.ts", {
	cwd: path.resolve(__dirname),
}).map((path) => `../${path.replace("../src/generated/", "")}`);

type TypeData = {
	nodeName: string;
	type: string;
	description: string;
	version: number;
	inputs: Record<string, string>;
	outputs: Record<string, string>;
	__filepath: string;
	credentials: {
		required: boolean;
		name: string;
		displayOptions?: { show?: any };
		__matchingCredentialsFile: string;
		__matchingCredentialsFileName: string;
	}[];
};

const getMatchingCredentialsFile = (name: string) => {
	const searchingFor = [
		`../credentials/${name.toLowerCase()}.ts`,
		`../credentials/${name.toLowerCase()}api.ts`,
	];
	for (const credPath of allCredentials) {
		const credPathLower = credPath.toLowerCase();
		if (searchingFor.some((path) => credPathLower.includes(path))) {
			return credPath;
		}
	}
	throw new Error(`Could not find credentials file for ${name}`);
};

const generateTypescriptNodeOutput = async (
	result: TypeData,
	outputFile: string,
) => {
	const code = new CodeMaker();
	code.openFile(outputFile);

	code.line(`// GENERATED FILE, DO NOT EDIT`);
	code.line(`// see scripts/generate-nodes-impl.ts`);
	code.line();

	if (result.inputs === undefined) {
		console.log(result);
	}
	const hasInputs =
		Object.keys(result.inputs).filter((o) => o !== "main").length > 0;

	for (const cred of result.credentials) {
		code.line(
			`import type { ${cred.__matchingCredentialsFileName}Credentials } from "${cred.__matchingCredentialsFile}";`,
		);
	}
	if (result.credentials.length > 0) {
		code.line(`import type { Credentials } from "../../credentials";`);
	}
	const chainTypesImports = ["IContext"];
	if (Object.keys(result.outputs).filter((o) => o !== "main").length > 0) {
		chainTypesImports.push("IChainable");
	}
	code.line(
		`import type { ${chainTypesImports.join(", ")} } from "../../workflow/chain/types";`,
	);

	if (hasInputs) {
		code.line(`import type { State } from "../../workflow/chain/state";`);
		code.line(`import { DEFAULT_NODE_SIZE } from "../../nodes/node";`);
	}

	code.line(
		`import type { ${result.nodeName}NodeParameters } from "../nodes/${result.nodeName}";`,
	);
	code.line(`import { Node, type NodeProps } from "../../nodes/node";`);

	code.line();

	// interface
	code.openBlock(`export interface ${result.nodeName}Props extends NodeProps`);
	code.line(`readonly parameters: ${result.nodeName}NodeParameters;`);
	for (const cred of result.credentials) {
		const credName = code.toCamelCase(cred.name);
		code.line(
			`readonly ${credName}Credentials${!cred.required ? "?" : ""}: Credentials<${cred.__matchingCredentialsFileName}Credentials>;`,
		);
	}
	code.closeBlock();
	code.line();

	// class

	code.line(`/**`);
	code.line(` * ${result.description}`);
	code.line(` */`);
	code.openBlock(
		`export class ${result.nodeName}<C extends IContext, L extends string> extends Node<L, C>`,
	);

	code.line(`protected type = "${result.type}" as const;`);
	code.line(`protected typeVersion = ${result.version} as const;`);
	code.line();

	const hasRequiredProps = result.credentials.some((cred) => cred.required);
	code.openBlock(
		`constructor(id: L, override props${hasRequiredProps ? "" : "?"}: ${result.nodeName}Props)`,
	);
	code.line(`super(id, props);`);
	if (hasInputs) {
		code.line(
			`this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };`,
		);
	}
	code.closeBlock();
	code.line();

	// getCredentials
	if (result.credentials.length > 0) {
		const credsArray = result.credentials.map((cred) =>
			code.toCamelCase(cred.name),
		);
		code.openBlock(`override getCredentials()`);
		code.line(
			`return [${credsArray.map((c) => `this.props!.${c}Credentials`).join(", ")}];`,
		);
		code.closeBlock();
		code.line();
	}

	// If we accept more than one type of input, add by default the custom input method
	if (Object.keys(result.inputs).length > 1 && !result.inputs.custom) {
		result.inputs.custom = "custom";
	}

	for (const [inputName, inputType] of Object.entries(result.inputs)) {
		if (inputName === "main" || inputType === "main") continue;
		if (inputName === "custom") {
			code.openBlock(
				`public withCustom(type: ${validCustomTypeAsStringUnion}, next: State): this`,
			);
			code.line(
				`super.addNext(next.startState, { type, direction: "input" });`,
			);
		} else {
			code.openBlock(
				`public with${code.toPascalCase(inputName)}(next: State): this`,
			);
			code.line(
				`super.addNext(next.startState, { type: "${inputType}", direction: "input" });`,
			);
		}
		code.line(`return this;`);
		code.closeBlock();
		code.line();
	}

	// If we accept more than one type of input, add by default the custom input method
	if (Object.keys(result.outputs).length > 1 && !result.outputs.custom) {
		result.outputs.custom = "custom";
	}

	// TODO: make a shared method for inputs and outputs (only diff is direction and with-to)
	for (const [outputName, outputType] of Object.entries(result.outputs)) {
		if (outputName === "main" || outputType === "main") continue;
		if (outputName === "custom") {
			code.openBlock(
				`public toCustom(type: ${validCustomTypeAsStringUnion}, next: State): this`,
			);
			code.line(
				`super.addNext(next.startState, { type, direction: "input" });`,
			);
		} else {
			code.openBlock(
				`public to${code.toPascalCase(outputName)}(next: IChainable): this`,
			);
			code.line(`super.addNext(next.startState, { type: "${outputType}" });`);
			code.line(`return this;`);
		}
		code.closeBlock();
		code.line();
	}

	code.closeBlock();

	code.closeFile(outputFile);
	await code.save("src/generated/nodes-impl");
};

const count = allNodesTypes.length;
let current = 0;
if (allNodesTypes.length === 0) {
	console.error("No nodes found");
	process.exit(0);
}
for (const nodePath of allNodesTypes) {
	const nodeName = nodePath.split("/").pop()?.split(".")[0]!;
	if (nodeName === "index") {
		current++;
		continue;
	}

	try {
		delete require.cache[nodePath];
		const file = await import(nodePath);

		const allCredentials: TypeData["credentials"] = [];
		const isCredentialOptional = (cred: TypeData["credentials"][0]) => {
			return cred.required !== true || cred.displayOptions?.show != null;
		};
		for (const cred of (file.credentials ?? []) as TypeData["credentials"]) {
			const existingCred = allCredentials.find((c) => c.name === cred.name);
			if (existingCred) {
				if (isCredentialOptional(cred)) existingCred.required = false;
				continue;
			}
			cred.required = !isCredentialOptional(cred);
			allCredentials.push(cred);
		}

		const typeData = {
			nodeName: nodeName,
			type: file.type,
			description: file.description,
			outputs: file.outputs,
			inputs: file.inputs,
			version: file.version,
			__filepath: nodePath,
			credentials:
				allCredentials.map((cred: TypeData["credentials"][0]) => {
					const matchingCredentialsFile = getMatchingCredentialsFile(cred.name);
					const matchingCredentialsFileName = matchingCredentialsFile
						.split("/")
						.pop()
						?.split(".")[0]!;

					return {
						...cred,
						__matchingCredentialsFile: matchingCredentialsFile,
						__matchingCredentialsFileName: matchingCredentialsFileName,
					};
				}) ?? [],
		} as const satisfies TypeData;

		await generateTypescriptNodeOutput(typeData, `${nodeName}.ts`);

		current++;
	} catch (e) {
		console.error(e);
		console.error(nodePath);
	}

	process.stdout.write(`\r${current}/${count}`);
}
console.log();
console.log(count - current, "nodes failed to parse");
