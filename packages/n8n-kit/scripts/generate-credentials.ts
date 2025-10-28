import * as path from "node:path";
import { CodeMaker } from "codemaker";
import type { ICredentialType } from "n8n-workflow";
import { globSync } from "tinyglobby";
import { renderComments, toTypescriptType } from "./shared";

const allNodes = globSync(
	[
		"../vendor/n8n/packages/nodes-base/credentials/**/**/*.credentials.ts",
		"../vendor/n8n/packages/@n8n/nodes-langchain/**/**/*.credentials.ts",
	],
	{
		cwd: path.resolve(__dirname),
	},
).sort();

const generateEntrypoint = async () => {
	const code = new CodeMaker();
	code.openFile("index.ts");

	code.line(`// GENERATED FILE, DO NOT EDIT`);
	code.line(`// see scripts/generate-credentials.ts`);
	code.line();

	for (const node of allNodes) {
		const nodeName = node.split("/").pop()!.split(".")[0]!;

		code.line(
			`import type { ${nodeName}Credentials } from "./${nodeName}.ts";`,
		);
	}

	code.line();
	code.line(`export type N8nCredentialsUnion =`);
	code.indent();
	for (const node of allNodes) {
		const nodeName = node.split("/").pop()!.split(".")[0]!;

		code.line(`| ${nodeName}Credentials`);
	}
	code.unindent();
	code.line();

	code.closeFile("index.ts");
	await code.save("src/generated/credentials");
};

const generateTypescriptCredentialsOutput = async (
	result: ICredentialType & { __filepath: string; __nodename: string },
	outputFile: string,
) => {
	const code = new CodeMaker();

	code.openFile(outputFile);

	code.line(`// GENERATED FILE, DO NOT EDIT`);
	code.line(`// Generated from '${result.__filepath}' credentials`);
	code.line();

	code.line(`export const name = "${result.name}" as const;`);
	code.line();

	code.line(`/**`);
	code.line(` * displayName: ${result.displayName}`);
	code.line(` * documentationUrl: ${result.documentationUrl}`);
	code.line(` */`);
	code.openBlock(`export interface ${result.__nodename}Credentials`);

	const visited = new Set<string>();
	for (const property of result.properties) {
		if (visited.has(property.name)) continue;
		visited.add(property.name);
		const comments = [
			property.description?.replaceAll("*/", "*<space>/"),
			property.default && `Default: ${JSON.stringify(property.default)}`,
			property.typeOptions &&
				Object.keys(property.typeOptions).length > 0 &&
				`Type options: ${JSON.stringify(property.typeOptions)}`,
		].filter(Boolean) as string[];

		renderComments(code, comments);

		code.line(
			`readonly ${JSON.stringify(property.name)}${property.required ? "" : "?"}: ${toTypescriptType(property)};`,
		);
		code.line();
	}

	code.line(`readonly __name: "${result.name}";`);

	code.closeBlock();

	code.closeFile(outputFile);
	await code.save("src/generated/credentials");
};

const count = allNodes.length;
let current = 0;
for (const node of allNodes) {
	try {
		const nodeName = node.split("/").pop()!.split(".")[0]!;

		delete require.cache[node];
		const file = await import(node);
		const firstExport = Object.values(file)[0];
		// @ts-expect-error: it works
		const instance = new firstExport();

		if (instance.name == null) {
			console.error(nodeName);
			continue;
		}

		const nodePathWithoutStartingSlash = node.split("vendor")[1];
		instance.__filepath = nodePathWithoutStartingSlash;
		instance.__nodename = nodeName;

		await generateTypescriptCredentialsOutput(instance, `${nodeName}.ts`);

		current++;
	} catch (e) {
		console.error(e);
	}
	process.stdout.write(`\r${current}/${count}`);
}
console.log();
console.log(count - current, "nodes failed to parse");
await generateEntrypoint();
