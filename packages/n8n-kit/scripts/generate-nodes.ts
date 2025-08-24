import * as fs from "node:fs";
import * as path from "node:path";
import { CodeMaker } from "codemaker";
import type { INodeProperties, INodeTypeDescription } from "n8n-workflow";
import { globSync } from "tinyglobby";
import { getNodeName, isLangChainNode, toTypescriptType } from "./shared";

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

// Create test files that some nodes require during generation
const createTestFiles = () => {
	// https://github.com/Vahor/n8n-kit/blob/4f0be9a2ba3d7e2ce70cff40a8d8afc7e5b9194c/packages/n8n-kit/test/README.md
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
	const r = {};
	const connections = result[type];
	if (typeof connections === "string") {
		// HACK: impossible to parse so we add a custom type and let the user choose
		r.custom = "custom";
		return r;
	} else {
		for (const connection of connections) {
			if (typeof connection === "string") {
				r[connection] = connection;
			} else {
				r[connection.displayName] = connection.type;
			}
		}
	}
	return r;
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

	code.line(`export const description = "${result.description}" as const;`);
	const prefix = isLangChainNode(result.__filepath)
		? "@n8n/n8n-nodes-langchain"
		: "n8n-nodes-base";
	code.line(`export const type = "${prefix}.${result.name}" as const;`);
	code.line(
		`export const version = ${Array.isArray(result.version) ? result.version.at(-1) : (result.version ?? 0)} as const;`,
	);
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

	if (!result.properties) result.properties = [];

	const visitedProperties: Record<
		string,
		INodeProperties & {
			__versionsOfProperty: INodeProperties[];
		}
	> = {};
	for (const property of result.properties) {
		if (
			property.type === "hidden" ||
			property.type === "button" ||
			property.type === "curlImport" ||
			property.type === "credentialsSelect" ||
			property.type === "notice" ||
			property.type === "resourceMapper" ||
			property.type === "credentials" ||
			property.type === "callout"
		)
			continue; // I suppose ?

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

	for (const property of Object.values(visitedProperties)) {
		const comments = [
			property.description?.replaceAll("*/", "*<space>/"),
			property.default && `Default: ${JSON.stringify(property.default)}`,
			property.typeOptions &&
				Object.keys(property.typeOptions).length > 0 &&
				`Type options: ${JSON.stringify(property.typeOptions)}`,
		].filter(Boolean) as string[];

		if (comments.length > 0) {
			code.line(`/**`);
			for (const comment of comments) {
				code.line(` * ${comment}`);
			}
			code.line(` */`);
		}
		// There will be duplicates but theses are ok (like "GET" | "GET")
		const typeUnion = [
			...new Set(property.__versionsOfProperty.map((p) => toTypescriptType(p))),
		].join(" | ");
		code.line(
			`readonly ${property.name}${property.required ? "" : "?"}: ${typeUnion};`,
		);
		code.line();
	}

	if (result.polling) {
		// TODO: make a shared type ?
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
	process.exit(0);
}

const count = allNodes.length;
let current = 0;
createTestFiles();

const baseNodes = allNodes.filter(
	(node) => !node.includes("@n8n/nodes-langchain"),
);
const langChainNodeAlreadyExistInBaseNode = (node: string) => {
	return baseNodes.some((baseNode) => baseNode.includes(node));
};

const versionsCache = {};

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

	try {
		delete require.cache[nodePath];
		const file = await import(nodePath);
		const firstClassExport = Object.values(file).find(
			(v) => typeof v === "function",
		);
		if (!firstClassExport) {
			console.error(`No class export for ${nodePathWithoutStartingSlash}`);
			continue;
		}
		// @ts-expect-error: it works
		const instance = new firstClassExport();

		if (instance.nodeVersions != null) {
			// We expect to find a .v2.node.ts file later
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

		const description = instance.description;
		description.__filepath = nodePathWithoutStartingSlash;
		description.__nodename = nodeName;

		if (description.version === undefined || description.name === undefined) {
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
