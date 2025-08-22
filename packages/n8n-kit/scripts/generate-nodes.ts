import * as path from "node:path";
import { CodeMaker } from "codemaker";
import type { INodeProperties, INodeTypeDescription } from "n8n-workflow";
import { globSync } from "tinyglobby";
import { toTypescriptType } from "./shared";

const allNodes = globSync(
	// "../../../node_modules/n8n-nodes-base/dist/nodes/**/**/*.node.js",
	"../vendor/n8n/packages/nodes-base/nodes/**/**/*.node.ts",
	{
		cwd: path.resolve(__dirname),
	},
);

const generateTypescriptNodeOutput = async (
	result: INodeTypeDescription & { __filepath: string; __nodename: string },
	outputFile: string,
) => {
	const code = new CodeMaker();

	code.openFile(outputFile);

	code.line(`// GENERATED FILE, DO NOT EDIT`);
	code.line(`// Generated from '${result.__filepath}' node`);
	code.line();

	code.line(`export const name = "${result.name}" as const;`);
	code.line(`export const description = "${result.description}" as const;`);
	code.line(
		`export const version = ${Array.isArray(result.version) ? result.version.at(-1) : (result.version ?? 0)} as const;`,
	);
	code.line();

	code.line(`/**`);
	code.line(` * ${result.description}`);
	code.line(` */`);
	code.line(`export interface ${result.__nodename}NodeParameters {`);
	code.indent();

	if (!result.properties) result.properties = [];

	const visitedProperties: Record<
		string,
		INodeProperties & {
			__versionsOfProperty: INodeProperties[];
		}
	> = {};
	for (const property of result.properties) {
		if (visitedProperties[property.name]) {
			visitedProperties[property.name].__versionsOfProperty.push(property);
			continue;
		}
		visitedProperties[property.name] = {
			...property,
			__versionsOfProperty: [property],
		};

		if (!property.required) {
			visitedProperties[property.name].required = false;
		}
		if (property.displayOptions?.show != null) {
			visitedProperties[property.name].required = false;
		}
	}

	for (const property of Object.values(visitedProperties)) {
		code.line(`/**`);
		if (property.description) {
			code.line(` * ${property.description}`);
		}
		if (property.default) {
			code.line(` * Default: ${JSON.stringify(property.default)}`);
		}
		if (property.typeOptions) {
			code.line(` * Type options: ${JSON.stringify(property.typeOptions)}`);
		}
		code.line(` */`);
		// There will be duplicates but theses are ok (like "GET" | "GET")
		const typeUnion = [
			...new Set(property.__versionsOfProperty.map((p) => toTypescriptType(p))),
		].join(" | ");
		code.line(
			`readonly ${property.name}${property.required ? "" : "?"}: ${typeUnion};`,
		);
		code.line();
	}
	code.unindent();
	code.line(`}`);
	code.line();

	code.closeFile(outputFile);
	await code.save("generated/nodes");
};

const count = allNodes.length;
let current = 0;
for (const node of allNodes) {
	const nodeName = node.split("/").pop()?.split(".")[0]!;
	const nodePathWithoutStartingSlash = node.split("vendor")[1];

	try {
		delete require.cache[node];
		const file = await import(node);
		const firstClassExport = Object.values(file).find(
			(v) => typeof v === "function",
		);
		if (!firstClassExport) {
			// console.error(`No class export for ${nodePathWithoutStartingSlash}`);
			continue;
		}
		// @ts-expect-error: it works
		const instance = new firstClassExport();

		if (instance.nodeVersions != null) {
			// We expect to find a .v2.node.ts file later
			current++;
			continue;
		}

		if (!instance.description) {
			console.error(`No description for ${nodePathWithoutStartingSlash}`);
			continue;
		}

		const description = instance.description;
		description.__filepath = nodePathWithoutStartingSlash;
		description.__nodename = nodeName;

		await generateTypescriptNodeOutput(description, `${nodeName}.ts`);
		current++;
	} catch (e) {
		console.error(e);
		console.error(node);
	}
	process.stdout.write(`\r${current}/${count}`);
}
console.log();
console.log(count - current, "nodes failed to parse");
