import * as fs from "node:fs";
import * as path from "node:path";
import { CodeMaker } from "codemaker";
import type { INodeProperties, INodeTypeDescription } from "n8n-workflow";
import { globSync } from "tinyglobby";
import {
	getNodeName,
	isLangChainNode,
	renderComments,
	toTypescriptType,
} from "./shared";

const allNodes = globSync(
	[
		"../vendor/n8n/packages/nodes-base/nodes/**/**/*.node.ts",
		"../vendor/n8n/packages/@n8n/nodes-langchain/**/**/*.node.ts",
	],
	{
		cwd: path.resolve(__dirname),
	},
);

const testDir = path.resolve(__dirname, "../test");
const testDataDir = path.resolve(__dirname, "../test/data");

const createTestFiles = () => {
	cleanupTestFiles();
	fs.mkdirSync(testDataDir, { recursive: true });
	const pdfPath = path.join(testDataDir, "05-versions-space.pdf");
	fs.writeFileSync(pdfPath, "");
};

const cleanupTestFiles = () => {
	fs.rmSync(testDir, { recursive: true, force: true });
};

const parseConnectionsTypes = (
	result: INodeTypeDescription,
	type: "inputs" | "outputs",
) => {
	const r: Record<string, string> = {};
	const connections = result[type];
	if (typeof connections === "string") {
		r.custom = "custom";
		return r;
	}
	for (const connection of connections) {
		if (typeof connection === "string") {
			r[connection] = connection;
		} else {
			r[connection.displayName] = connection.type;
		}
	}
	return r;
};

// Detect if this is an explicit versioned node file (SetV2, etc.)
const isExplicitVersionedNode = (nodePath: string) =>
	/\/v\d+\/.+V\d+\.node\.ts$/.test(nodePath);

const generateTypescriptNodeOutput = async (
	result: INodeTypeDescription & { __filepath: string; __nodename: string },
	outputFile: string,
) => {
	if (!result.properties) result.properties = [];

	const visitedProperties: Record<
		string,
		INodeProperties & { __versionsOfProperty: INodeProperties[] }
	> = {};

	for (const property of result.properties) {
		if (
			[
				"hidden",
				"button",
				"curlImport",
				"notice",
				"resourceMapper",
				"credentials",
				"callout",
			].includes(property.type)
		)
			continue;

		if (visitedProperties[property.name]) {
			visitedProperties[property.name].__versionsOfProperty.push(property);
			continue;
		}
		visitedProperties[property.name] = {
			...property,
			__versionsOfProperty: [property],
		};

		if (
			!property.required ||
			property.default != null ||
			property.displayOptions?.show != null
		) {
			visitedProperties[property.name].required = false;
		}
	}

	const hasCredentialsSelectProperty = Object.values(visitedProperties).some(
		(property) =>
			property.type === "credentialsSelect" ||
			property.__versionsOfProperty.some((p) => p.type === "credentialsSelect"),
	);

	const code = new CodeMaker();
	code.openFile(outputFile);

	code.line(`// GENERATED FILE, DO NOT EDIT`);
	code.line(`// Generated from '${result.__filepath}' node`);
	code.line();

	if (hasCredentialsSelectProperty) {
		code.line(
			`import type { N8nCredentialsUnion } from "../credentials/index";`,
		);
		code.line();
	}

	code.line(`export const description = "${result.description}" as const;`);

	const prefix = isLangChainNode(result.__filepath)
		? "@n8n/n8n-nodes-langchain"
		: "n8n-nodes-base";
	code.line(`export const type = "${prefix}.${result.name}" as const;`);

	const resolvedVersion = Array.isArray(result.version)
		? result.version[result.version.length - 1]
		: result.version;

	if (resolvedVersion == null)
		throw new Error(`Missing version for node ${result.__nodename}`);

	code.line(`export const version = ${resolvedVersion} as const;`);

	if (result.credentials) {
		code.line(
			`export const credentials = ${JSON.stringify(result.credentials)} as const;`,
		);
	}

	code.line(
		`export const inputs = ${JSON.stringify(parseConnectionsTypes(result, "inputs"))} as const;`,
	);
	code.line(
		`export const outputs = ${JSON.stringify(parseConnectionsTypes(result, "outputs"))} as const;`,
	);
	code.line();

	code.openBlock(`export interface ${result.__nodename}NodeParameters`);

	for (const property of Object.values(visitedProperties)) {
		const comments = [
			property.description?.replaceAll("*/", "*<space>/"),
			property.default && `Default: ${JSON.stringify(property.default)}`,
			property.typeOptions &&
				Object.keys(property.typeOptions).length > 0 &&
				`Type options: ${JSON.stringify(property.typeOptions)}`,
		].filter(Boolean) as string[];

		renderComments(code, comments);

		const typeUnion = [
			...new Set(property.__versionsOfProperty.map((p) => toTypescriptType(p))),
		].join(" | ");
		code.line(
			`readonly ${property.name}${property.required ? "" : "?"}: ${typeUnion};`,
		);
		code.line();
	}

	if (result.polling) {
		code.line(
			`readonly pollTimes: { item: { mode: "everyMinute" | (string & {}) }[] };`,
		);
	}

	code.closeBlock();
	code.closeFile(outputFile);
	await code.save("src/generated/nodes");
};

if (allNodes.length === 0) {
	console.error("No nodes found");
	process.exit(1);
}

const count = allNodes.length;
let current = 0;
createTestFiles();

const baseNodes = allNodes.filter(
	(node) => !node.includes("@n8n/nodes-langchain"),
);
const langChainNodeAlreadyExistInBaseNode = (node: string) =>
	baseNodes.some((baseNode) => baseNode.includes(node));

const versionsCache: Record<string, any> = {};

for (const nodePath of allNodes.sort((a, b) =>
	getNodeName(a).localeCompare(getNodeName(b)),
)) {
	let nodeName = getNodeName(nodePath);
	const nodePathWithoutStartingSlash = nodePath.split("vendor")[1];

	if (nodeName === "index") {
		current++;
		continue;
	}

	if (
		isLangChainNode(nodePath) &&
		langChainNodeAlreadyExistInBaseNode(nodeName)
	) {
		nodeName = `${nodeName}AI`;
	}

	const explicitVersion = isExplicitVersionedNode(nodePath);

	try {
		let instance: any;

		if (nodeName in versionsCache && !explicitVersion) {
			instance = { ...versionsCache[nodeName]! };
		} else {
			delete require.cache[nodePath];
			const file = await import(nodePath);
			const firstClassExport = Object.values(file).find(
				(v) => typeof v === "function",
			);
			if (!firstClassExport) {
				console.error(`No class export for ${nodePathWithoutStartingSlash}`);
				continue;
			}
			instance = new firstClassExport();

			if (instance.nodeVersions != null && !explicitVersion) {
				for (const [version, node] of Object.entries(instance.nodeVersions)) {
					versionsCache[`${nodeName}V${version}`] = node;
				}
				current++;
				continue;
			}

			if (!instance.description) {
				console.error(`No description for ${nodePathWithoutStartingSlash}`);
				continue;
			}
		}

		const description = instance.description;
		description.__filepath = nodePathWithoutStartingSlash;
		description.__nodename = nodeName;

		if (
			(description.version === undefined || description.name === undefined) &&
			!explicitVersion
		) {
			const nodeNameWithoutVersion = nodeName.split("V")[0];
			const currentVersion = Array.isArray(description.version)
				? description.version.at(-1)
				: description.version;
			const cacheKey = `${nodeNameWithoutVersion}V${currentVersion}`;
			const fromCache = versionsCache[cacheKey];
			if (!fromCache) {
				console.error(`No version or name for ${nodeName} and not in cache`);
				continue;
			}
			delete versionsCache[cacheKey];
			description.version = fromCache.description.version;
			description.name = fromCache.description.name;
			description.description ??= fromCache.description.description;
		}

		await generateTypescriptNodeOutput(description, `${nodeName}.ts`);
		current++;
	} catch (e) {
		console.error(e);
		console.error(nodePath);
	}
	process.stdout.write(`\r${current}/${count}`);
}

console.log();
console.log(count - current, "nodes failed to parse");
cleanupTestFiles();
