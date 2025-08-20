import * as fs from "node:fs";
import * as path from "node:path";
import { CodeMaker } from "codemaker";
import { globSync } from "tinyglobby";
import type { INodeTypeDescription } from "n8n-workflow";

const allNodes = globSync(
	"../../../node_modules/n8n-nodes-base/dist/nodes/**/**/*.node.js",
	{
		cwd: path.resolve(__dirname),
	},
);

const mapPropertyType = (type: string) => {
	switch (type) {
		case "boolean":
			return "boolean";
		case "notice":
		case "dateTime":
		case "json":
		case "string":
			return "string";
		case "options":
			return "string";
		case "number":
			return "number";
	}
	return "any";
};

const toTypescriptType = (
	property: INodeTypeDescription["properties"][number],
) => {
	switch (property.type) {
		case "options":
			if (property.options && Array.isArray(property.options)) {
				const values = property.options
					// @ts-expect-error: TODO: fix this
					.map((opt) => `"${opt.value}"`)
					.join(" | ");
				return values || "string";
			}
			return "string";

		case "multiOptions":
			if (property.options && Array.isArray(property.options)) {
				const values = property.options
					// @ts-expect-error: TODO: fix this
					.map((opt) => `"${opt.value}"`)
					.join(" | ");
				return `(${values})[]` || "string[]";
			}
			return "string[]";

		case "fixedCollection":
			if (property.options && Array.isArray(property.options)) {
				let result = "{ ";
				for (const option of property.options) {
					result += `"${option.name}": any, `;
				}
				// Remove the last comma
				result = result.slice(0, -2);
				result += " }";
				return result;
			}

			return "Record<string, any>";

		case "collection":
			if (property.options && Array.isArray(property.options)) {
				let result = "{ ";
				for (const option of property.options) {
					// @ts-expect-error: TODO: fix this
					result += `"${option.name}"${option.required ? "" : "?"}: ${toTypescriptType(option)}, `;
				}
				// Remove the last comma
				result = result.slice(0, -2);
				result += " }";
				return result;
			}
			return "any[]";

		default:
			return mapPropertyType(property.type);
	}
};

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
		`export const version = ${Array.isArray(result.version) ? result.version.at(-1) : result.version} as const;`,
	);
	code.line(
		`export const defaults = ${JSON.stringify(result.defaults)} as const;`,
	);
	if (result.credentials != undefined) {
		code.line(
			`export const credentials = ${JSON.stringify(result.credentials)} as const`,
		);
	}
	code.line();

	code.line(`/**`);
	code.line(` * ${result.description}`);
	code.line(` */`);
	code.line(`export interface ${result.__nodename}NodeParameters {`);
	code.indent();
	const propertiesMapped: Record<string, any> = {};

	// Note: required as I don't know how to handle spread operator :)
	if (!Array.isArray(result.properties)) {
		result.properties = [result.properties];
	}
	result.properties = result.properties.flat();
	for (const property of result.properties) {
		if (!property.name) {
			continue;
		}
		const storedProperty = propertiesMapped[property.name];
		if (property.displayOptions?.show !== undefined) {
			// if the property can be hidden, it's optional
			property.required = false;
		}

		if (storedProperty) {
			if (property.required === undefined)
				if (!property.required) {
					// if one variant is optional, make all variants optional
					storedProperty.required = false;
				}
			if (property.options) {
				// merge options
				// merge array but only keep one unique name
				let newOptions = storedProperty.options ?? [];
				if (!Array.isArray(newOptions)) {
					newOptions = [newOptions];
					storedProperty.options = newOptions;
				}

				for (const option of property.options) {
					if (!newOptions?.find((o) => o.name === option.name)) {
						newOptions.push(option);
					}
				}
			}
			continue;
		}
		propertiesMapped[property.name] = property;
	}
	for (const property of Object.values(propertiesMapped)) {
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
		code.line(
			`readonly ${property.name}${property.required ? "" : "?"}: ${toTypescriptType(property)};`,
		);
		code.line();
	}
	code.unindent();
	code.line(`}`);
	code.line();

	code.closeFile(outputFile);
	await code.save("generated/nodes");
};

const outputNodePath = path.resolve(__dirname, "nodes");
await fs.promises.mkdir(outputNodePath, { recursive: true });

const count = allNodes.length;
let current = 0;
for (const node of allNodes) {
	const nodeName = node.split("/").pop()?.split(".")[0]!;

	delete require.cache[node];
	const file = await import(node);
	const firstExport = Object.values(file)[0];
	// @ts-expect-error: it works
	const instance = new firstExport();

	if (instance.nodeVersions != null) {
		continue;
	}

	const nodePathWithoutStartingSlash = node.split("node_modules")[1];

	const description = instance.description;
	description.__filepath = nodePathWithoutStartingSlash;
	description.__nodename = nodeName;

	await generateTypescriptNodeOutput(description, `${nodeName}.ts`);
	current++;
	process.stdout.write(`\r${current}/${count}`);
}
console.log();
console.log(count - current, "nodes failed to parse");
