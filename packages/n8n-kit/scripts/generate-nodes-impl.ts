import * as path from "node:path";
import { CodeMaker } from "codemaker";
import { globSync } from "tinyglobby";

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

	for (const cred of result.credentials) {
		code.line(
			`import type { ${cred.__matchingCredentialsFileName}Credentials } from "${cred.__matchingCredentialsFile}";`,
		);
	}
	if (result.credentials.length > 0) {
		code.line(`import type { Credentials } from "../../credentials";`);
	}

	code.line(
		`import type { ${result.nodeName}NodeParameters } from "../nodes/${result.nodeName}";`,
	);
	code.line(`import { Node, type NodeProps } from "../../nodes";`);

	code.line();

	// interface
	code.line(`export interface ${result.nodeName}Props extends NodeProps {`);
	code.indent();
	code.line(`readonly parameters: ${result.nodeName}NodeParameters;`);
	for (const cred of result.credentials) {
		const credName = code.toCamelCase(cred.name);
		code.line(
			`readonly ${credName}Credentials${!cred.required ? "?" : ""}: Credentials<${cred.__matchingCredentialsFileName}Credentials>;`,
		);
	}
	code.unindent();
	code.line(`}`);
	code.line();

	// class

	code.line(
		`export class ${result.nodeName}<L extends string> extends Node<L> {`,
	);
	code.indent();

	code.line(`protected type = "${result.type}" as const;`);
	code.line(`protected typeVersion = ${result.version} as const;`);
	code.line();

	const hasRequiredProps = result.credentials.some((cred) => cred.required);
	code.line(
		`constructor(id: L, override props${hasRequiredProps ? "" : "?"}: ${result.nodeName}Props) {`,
	);
	code.indent();
	code.line(`super(id, props);`);
	code.unindent();
	code.line(`}`);
	code.line();

	// getCredentials
	if (result.credentials.length > 0) {
		const credsArray = result.credentials.map((cred) =>
			code.toCamelCase(cred.name),
		);
		code.line(`override getCredentials() {`);
		code.indent();
		code.line(
			`return [${credsArray.map((c) => `this.props!.${c}Credentials`).join(", ")}];`,
		);
		code.unindent();
		code.line(`}`);
		code.line();
	}

	code.unindent();
	code.line(`}`);

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
	if (nodeName === "index") continue;

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
		} as TypeData;

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
