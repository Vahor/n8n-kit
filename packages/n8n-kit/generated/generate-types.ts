import * as fs from "node:fs";
import * as path from "node:path";
import { CodeMaker } from "codemaker";
import { globSync } from "tinyglobby";
import * as ts from "typescript";

const allNodes = globSync(
	"./vendor/n8n/packages/nodes-base/nodes/**/*.node.ts",
);

type NodeDescription = {
	__filepath: string;
	__nodename: string;
	displayName: string;
	name: string;
	description: string;
	version: number;
	credentials: Array<{ name: string; required: boolean }>;
	defaults: Record<string, any>;
	properties: Array<{
		name: string;
		required: boolean;
		description: string;
		displayOptions?: {
			show: Record<string, boolean>;
		};
		type:
			| "boolean"
			| "string"
			| "options"
			| "multiOptions"
			| "fixedCollection"
			| "collection"
			| "number"
			| "notice";
		options?: Array<{
			required?: boolean;
			name?: string;
			value: string;
			description: string;
			options?: any;
			values?: any;
		}>;
		default?: any;
		typeOptions: any;
	}>;
};

const visit = (node: ts.Node, result: any[] = []) => {
	if (ts.isClassDeclaration(node)) {
		result.push(extractDescription(node));
	}
	ts.forEachChild(node, (child) => visit(child, result));
	if (result.length > 0) {
		return result[0] as NodeDescription;
	}
};

const extractDescription = (node: ts.ClassDeclaration) => {
	for (const member of node.members) {
		if (
			ts.isPropertyDeclaration(member) &&
			member.name.getText() === "description" &&
			member.initializer &&
			ts.isObjectLiteralExpression(member.initializer)
		) {
			return extractObjectProperties(member.initializer);
		}
	}
};

const extractObjectProperties = (node: ts.ObjectLiteralExpression) => {
	const properties = {};
	for (const property of node.properties) {
		if (ts.isPropertyAssignment(property)) {
			properties[property.name.getText()] = extractValue(property.initializer);
		}
	}

	return properties;
};

const extractValue = (node: ts.Node) => {
	if (ts.isStringLiteral(node)) {
		return node.text;
	}
	if (ts.isNumericLiteral(node)) {
		return parseFloat(node.text);
	}
	if (node.kind === ts.SyntaxKind.TrueKeyword) {
		return true;
	}
	if (node.kind === ts.SyntaxKind.FalseKeyword) {
		return false;
	}
	if (ts.isArrayLiteralExpression(node)) {
		return node.elements.map((element) => extractValue(element));
	}
	if (ts.isObjectLiteralExpression(node)) {
		return extractObjectProperties(node);
	}
	// For template literals, identifiers, or complex expressions
	return node.getText();
};

const mapPropertyType = (type: string) => {
	switch (type) {
		case "boolean":
			return "boolean";
		case "notice":
		case "string":
			return "string";
		case "options":
			return "string";
		case "number":
			return "number";
	}
	return "any";
};

const toTypescriptType = (property: NodeDescription["properties"][number]) => {
	switch (property.type) {
		case "options":
			if (property.options && Array.isArray(property.options)) {
				const values = property.options
					.map((opt) => `"${opt.value}"`)
					.join(" | ");
				return values || "string";
			}
			return "string";

		case "multiOptions":
			if (property.options && Array.isArray(property.options)) {
				const values = property.options
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
	result: NodeDescription,
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
	code.line(
		`export const credentials = ${JSON.stringify(result.credentials)} ${result.credentials != undefined ? "as const" : ""}`,
	);
	code.line();

	code.line(`/**`);
	code.line(` * ${result.description}`);
	code.line(` */`);
	code.line(`export interface ${result.__nodename}NodeParameters {`);
	code.indent();
	const propertiesMapped: Record<string, any> = {};
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
				const newOptions = storedProperty.options ?? [];
				for (const option of property.options) {
					if (!newOptions.find((o) => o.name === option.name)) {
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
	const sourceFile = ts.createSourceFile(
		node,
		await fs.promises.readFile(node, "utf-8"),
		ts.ScriptTarget.ES2022,
		true,
	);

	const result = visit(sourceFile);
	if (!result) {
		// console.error("Failed to parse node", node);
		continue;
	}
	const nodeName = node.split("/").pop()?.split(".")[0]!;
	result.__filepath = node;
	result.__nodename = nodeName;

	await generateTypescriptNodeOutput(result, `${nodeName}.ts`);
	current++;
	process.stdout.write(`\r${current}/${count}`);
}
console.log();
console.log(count - current, "nodes failed to parse");
