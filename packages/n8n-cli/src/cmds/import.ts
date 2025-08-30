import fs from "node:fs";
import path from "node:path";
import { confirm } from "@inquirer/prompts";
import type { WorkflowDefinition } from "@vahor/n8n-kit";
import logger from "@vahor/n8n-kit/logger";
import { type Tree, TreeBuilder } from "@vahor/n8n-kit/utils";
import chalk from "chalk";
import { CodeMaker, toPascalCase } from "codemaker";
import type { Argv } from "yargs";
import type { GlobalOptions } from "..";
import { N8nApi } from "../n8n-api";

export const command = "import";
export const description =
	"Generate a typescript file corresponding to n8n workflow";
export const builder = (yargs: Argv) => {
	yargs
		.showHelpOnFail(true)
		.option("id", {
			type: "string",
			describe: "Workflow ID",
		})
		.option("file", {
			type: "string",
			describe: "Path of the workflow file",
		})
		.option("out", {
			type: "string",
			describe: "Where to output the generated file",
			demandOption: true,
		})
		.strict();
};

type Options = GlobalOptions & {
	id?: string;
	out: string;
	file?: string;
};

const getWorkflowData = async (n8n: N8nApi, options: Options) => {
	if (options.file) {
		const filePath = path.resolve(process.cwd(), options.file);
		logger.log(`Reading workflow from ${chalk.bold(filePath)}...`);
		const rawData = await fs.promises.readFile(filePath, "utf-8");
		return JSON.parse(rawData) as WorkflowDefinition;
	} else {
		logger.log(`Fetching workflow ${chalk.bold(options.id)}...`);
		return await n8n.getWorkflowById(options.id!);
	}
};

const banner = () => {
	console.log();
	logger.log(
		chalk.yellow("!  WARNING: The import command is very experimental!"),
	);
	logger.log(
		chalk.yellow(
			"   Generated TypeScript code may be incomplete or incorrect.",
		),
	);
	console.log();
};

export const handler = async (options: Options) => {
	if (options.dryRun) {
		logger.log("Can't import in dry-run mode");
		process.exit(0);
	}
	if ((!options.id && !options.file) || (options.id && options.file)) {
		logger.error("Either id or path must be provided");
		process.exit(1);
	}

	const filePath = path.resolve(process.cwd(), options.out);
	if (fs.existsSync(filePath)) {
		console.log();
		if (!options.yes) {
			const result = await confirm({
				message: `File ${chalk.bold(filePath)} already exists. Overwrite?`,
			});
			if (!result) process.exit(0);
		} else {
			logger.log("File already exists, overwriting due to --yes flag");
		}
		console.log();
	}

	banner();

	const n8n = new N8nApi();
	const workflowData = await getWorkflowData(n8n, options);
	await writeTypescriptFile(workflowData, filePath);
};

const writeTypescriptFile = async (
	workflowData: WorkflowDefinition,
	filePath: string,
) => {
	const code = new CodeMaker();

	const trees = new TreeBuilder(workflowData).buildTrees();

	const rootImports: string[] = ["App", "Chain", "Workflow"];
	const nodesImports: Set<string> = new Set();
	const generatedNodesImports: Set<string> = new Set();

	if (trees.some((tree) => tree.hasCrossTreeConnections)) {
		rootImports.push("Placeholder");
	}

	const credentials: Map<string, string> = new Map();
	extractCredentials(workflowData, credentials);
	extractNodesTypes(workflowData, nodesImports, generatedNodesImports);
	if (credentials.size > 0) {
		rootImports.push("Credentials");
	}

	const fileName = path.basename(filePath);
	const fileDir = path.dirname(filePath);
	logger.log(`Writing to ${chalk.bold(filePath)}...`);

	code.openFile(fileName);

	logger.debug("Writing imports");
	// Imports
	// biome-ignore format: one line
	code.line(`import { ${[...rootImports].toSorted().join(", ")} } from "@vahor/n8n-kit";`);
	if (nodesImports.size > 0) {
		// biome-ignore format: one line
		code.line(`import { ${[...nodesImports].toSorted().join(", ")} } from "@vahor/n8n-kit/nodes";`);
	}
	if (generatedNodesImports.size > 0) {
		// biome-ignore format: one line
		code.line(`import { ${[...generatedNodesImports].toSorted().join(", ")} } from "@vahor/n8n-kit/nodes/generated";`);
	}

	code.line();

	logger.debug("Writing credentials");
	// Credentials
	if (credentials.size > 0) {
		code.line("// Credentials");
		for (const [id, type] of credentials) {
			// biome-ignore format: one line
			code.openBlock(`const ${type}Credentials = Credentials.byId(`);
			code.line(`name: "${type}",`);
			code.line(`id: "${id}",`);
			code.unindent(false);
			code.line("});");
			code.line();
		}
	}

	logger.debug("Writing workflow");
	// workflow
	code.line("// Workflow");
	code.openBlock(`const workflow = new Workflow("my-workflow",`);
	code.line(`name: "${workflowData.name}",`);
	code.line(`active: ${workflowData.active},`);
	code.line(
		`tags: [${workflowData.tags.map((tag) => `"${tag.name}"`).join(", ")}],`,
	);
	if (workflowData.settings && Object.keys(workflowData.settings).length > 0) {
		code.openBlock(`settings:`);
		writeObject(code, workflowData.settings);
		code.unindent(false);
		code.line("},");
	}
	code.line(`definition: [`);
	code.indent();
	writeWorkflowDefinition(code, trees);
	code.unindent(false);
	code.line("],");
	code.unindent(false);
	code.line("});");
	code.line();

	logger.debug("Writing app");
	// App
	code.line("// App");
	code.line(`const app = new App();`);
	code.line(`app.add(workflow);`);
	code.line();
	code.line(`export { app };`);

	logger.debug("Saving file");
	code.closeFile(fileName);
	await code.save(fileDir);
	logger.log("Done!");
};

const extractCredentials = (
	workflowData: WorkflowDefinition,
	credentials: Map<string, string>,
) => {
	for (const node of workflowData.nodes) {
		if (node.credentials) {
			for (const [type, value] of Object.entries(node.credentials)) {
				credentials.set(value.id, type);
			}
		}
	}
};

const extractNodesTypes = (
	workflowData: WorkflowDefinition,
	nodesImports: Set<string>,
	generatedNodesImports: Set<string>,
): void => {
	const customNodes = ["If", "Merge", "Fields", "HttpRequest"];
	for (const node of workflowData.nodes) {
		const asImport = nodeToClassname(node);
		if (customNodes.includes(asImport)) {
			nodesImports.add(asImport);
		} else {
			generatedNodesImports.add(asImport);
		}
	}
};

const nodeToClassname = (node: WorkflowDefinition["nodes"][number]) => {
	const type = node.type;
	const nodeName = type.split(".").pop()!;
	// NOTE: not possible to add the version suffix
	//  as for instance `GoogleDriveV2` has `typeVersion: 3`
	//  and some node in v1 have a suffix and others don't

	// set is renamed to Fields in our custom nodes
	if (nodeName === "set") return "Fields";

	return toPascalCase(nodeName);
};

const writeWorkflowDefinition = async (code: CodeMaker, trees: Tree[]) => {
	for (const tree of trees) {
		writeWorkflowDefinitionNode(code, tree.root, true);
	}
};
const writeWorkflowDefinitionNode = async (
	code: CodeMaker,
	node: Tree["root"],
	isRoot = false,
	visited: Set<string> = new Set(),
) => {
	// if (visited.has(node.node.name)) {
	// 	console.log(node.node.name); // Seems to never hit
	// 	return;
	// }
	// visited.add(node.node.name);

	const className = nodeToClassname(node.node);

	const mainConnections = node.connectionsTo.filter(
		(conn) => conn.type === "main",
	);
	const otherConnections = node.connectionsTo.filter(
		(conn) => conn.type !== "main",
	);
	const mainConnectionChildren = node.children.filter((child) =>
		mainConnections.find((conn) => conn.name === child.node.name),
	);
	const otherConnectionChildren = node.children.filter((child) =>
		otherConnections.find((conn) => conn.name === child.node.name),
	);

	const newNode = `new ${className}("${node.node.id}",`;
	const withChain =
		(mainConnectionChildren.length > 0 ||
			node.crossTreeConnections.length > 0) &&
		className !== "If";
	if (isRoot) code.line();
	if (withChain) code.openBlock(`Chain.start(${newNode}`);
	else code.openBlock(`${newNode}`);

	code.line(`label: "${node.node.name}",`);
	code.line(`position: [${node.node.position}],`);
	if (node.node.disabled) code.line(`disabled: ${node.node.disabled},`);
	if (node.node.credentials) {
		for (const type of Object.keys(node.node.credentials)) {
			code.line(`${type}Credentials: ${type}Credentials,`);
		}
	}
	// parameters
	const parameters = node.node.parameters as Record<string, any>;
	code.openBlock(`parameters: `);
	writeObject(code, parameters);
	code.unindent(false);
	code.line("},");

	code.unindent(false);
	code.line("})");
	if (withChain) code.line(")");

	if (node.crossTreeConnections.length > 0) {
		if (node.crossTreeConnections.length === 1) {
			// we only handle 1 cross-tree connection
			for (const connection of node.crossTreeConnections) {
				const toIndex = connection.toIndex;
				const connectionOptionsString =
					toIndex === 0 ? "" : `, { to: ${toIndex} }`;
				code.line(
					`.next(new Placeholder("${connection.name}")${connectionOptionsString}),`,
				);
			}
		} else {
			logger.error(
				`Found ${node.crossTreeConnections.length} cross-tree connections. Only 1 is supported`,
			);
		}
		return;
	}

	if (node.children.length === 0) {
		code.line(",");
		return;
	}

	if (className === "If") {
		for (const child of node.children) {
			const isTrueConnection =
				node.connectionsTo.find((conn) => conn.name === child.node.name)
					?.fromIndex === 0;
			const chainMethod = isTrueConnection ? ".true(" : ".false(";
			code.line(`${chainMethod}`);
			code.indent();
			writeWorkflowDefinitionNode(code, child, false, visited);
			code.unindent(false);
			code.line(")");
		}
		code.line(",");
		return;
	}

	for (const child of otherConnectionChildren) {
		const connectionType = otherConnections.find(
			(conn) => conn.name === child.node.name,
		)!.type;
		code.line(`.withCustom("${connectionType}", `);
		code.indent();
		writeWorkflowDefinitionNode(code, child, false, visited);
		code.unindent(false);
		code.line(")");
	}

	if (mainConnectionChildren.length === 1) {
		code.line(".next(");
		code.indent();
		writeWorkflowDefinitionNode(
			code,
			mainConnectionChildren[0]!,
			false,
			visited,
		);
		code.unindent(false);
		code.line("),");
		return;
	}

	if (mainConnectionChildren.length > 1) {
		code.line(".multiple([");
		code.indent();
		for (const child of mainConnectionChildren) {
			writeWorkflowDefinitionNode(code, child, false, visited);
		}
		code.unindent(false);
		code.line("]),");
	}
};

const formatString = (str: any) => {
	if (typeof str === "string" && str.includes("\n"))
		return `\`${str.replace(/`/g, "\\`").replace(/\$/g, "\\$")}\``;
	return JSON.stringify(str);
};

const writeObject = (code: CodeMaker, obj: any) => {
	if (obj == null) return;
	if (Array.isArray(obj)) {
		for (const value of obj) {
			if (Array.isArray(value)) {
				code.line("[");
				code.indent();
				writeObject(code, value);
				code.unindent(false);
				code.line("],");
			} else if (value && typeof value === "object") {
				code.line("{");
				code.indent();
				writeObject(code, value);
				code.unindent(false);
				code.line("},");
			} else {
				code.line(`${formatString(value)},`);
			}
		}
		return;
	}
	if (typeof obj === "object") {
		for (const [rawKey, value] of Object.entries(obj)) {
			const key = JSON.stringify(rawKey);
			if (Array.isArray(value)) {
				code.line(`${key}: [`);
				code.indent();
				writeObject(code, value);
				code.unindent(false);
				code.line("],");
			} else if (value && typeof value === "object") {
				code.line(`${key}: {`);
				code.indent();
				writeObject(code, value);
				code.unindent(false);
				code.line("},");
			} else {
				code.line(`${key}: ${formatString(value)},`);
			}
		}
		return;
	}
	code.line(formatString(obj));
};
