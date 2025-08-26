import fs from "node:fs";
import path from "node:path";
import { confirm } from "@inquirer/prompts";
import type { WorkflowDefinition } from "@vahor/n8n-kit";
import logger from "@vahor/n8n-kit/logger";
import spawn from "nano-spawn";
import { table } from "table";
import type { Argv } from "yargs";
import type { GlobalOptions } from "..";
import { createFolder, resolvePath } from "../files";
import { N8nApi } from "../n8n-api";
import { Redact } from "../utils/redact";
import { getWorkflowMapping, loadApplication } from "./shared";

export const command = "diff";
export const description =
	"Get a diff view between your workflow and the ones deployed to n8n";
export const builder = (yargs: Argv) => {
	yargs
		.showHelpOnFail(true)
		.option("id", {
			type: "string",
			array: true,
			describe: "Workflow IDs to diff",
			default: [],
		})
		.strict();
};

type Options = GlobalOptions & {
	id: string[];
};

const defaultRedactKeys = [
	"id",
	"createdAt",
	"updatedAt",
	"shared",
	/tags\[.*\]\.id/,
	/tags\[.*\].*At/,
	"meta",
	"staticData",
	"versionId",
	"triggerCount",
	"pinData",
	"isArchived",
	/nodes\[.*\]\.position/,
	/nodes\[.*\]\.parameters.*\.value/,
	/nodes\[.*\]\.credentials.*\.name/,
	// cached result UI-only fields
	"cachedResultName",
	"cachedResultUrl",
	"_rl",
];
const replacer = () => undefined;

const getDiff = async (file1: string, file2: string) => {
	try {
		await spawn("git", ["--no-pager", "diff", "--no-index", file1, file2], {
			stdio: "inherit",
		});
		return false;
	} catch (_) {
		// ignore
		return true;
	}
};

function sortObjectByKey<T>(obj: T): T {
	if (Array.isArray(obj)) {
		return obj.map((el) => sortObjectByKey(el)) as unknown as T;
	}
	if (typeof obj !== "object" || obj === null) {
		return obj;
	}

	const sortedKeys = Object.keys(obj).sort();
	const result = {};

	for (const key of sortedKeys) {
		// @ts-expect-error
		result[key] = sortObjectByKey(obj[key]); // Recursive call for nested objects
	}

	return result as unknown as T;
}

const format = (workflow: WorkflowDefinition) => {
	// order tags by name
	workflow.tags.sort((a, b) => a.name.localeCompare(b.name));
};

export const handler = async (options: Options) => {
	const { app, config } = await loadApplication();

	const toDiff =
		options.id.length > 0
			? app.workflows.filter((w) => options.id.includes(w.id))
			: app.workflows;

	if (toDiff.length === 0) {
		logger.error("No workflows found");
		process.exit(1);
	}

	console.log(
		table([["ID", "Name"], ...toDiff.map((w) => [w.id, w.getName()])]),
	);

	logger.log("Fetching n8n workflows...");
	const n8n = new N8nApi();

	// custom id -> n8n id
	const matchMap = await getWorkflowMapping(n8n, toDiff);

	const diffFolder = resolvePath(config, ".diff");
	await createFolder(config, ".diff");

	const redact = new Redact(defaultRedactKeys, replacer);

	let hasAnyDiff = false;
	for (const workflow of toDiff) {
		logger.setContext(`diff:${workflow.id}`);
		if (!matchMap.has(workflow.id)) {
			continue;
		}
		const from = sortObjectByKey(workflow.build());
		const to = sortObjectByKey(matchMap.get(workflow.id)!);

		format(from);
		format(to);

		redact.redact(from);
		redact.redact(to);

		const fromPath = path.join(diffFolder, `${workflow.id}_from.json`);
		const toPath = path.join(diffFolder, `${workflow.id}_to.json`);
		await fs.promises.writeFile(fromPath, JSON.stringify(from, null, 2));
		await fs.promises.writeFile(toPath, JSON.stringify(to, null, 2));

		if (!options.yes && !options.dryRun) {
			console.log();
			const result = await confirm({
				message: `Open diff for ${workflow.id}?`,
			});
			if (!result) continue;
		}
		const hasDiff = await getDiff(fromPath, toPath);
		if (!hasDiff) {
			logger.log(`No diff found for ${workflow.id}`);
		}
		hasAnyDiff = hasAnyDiff || hasDiff;
	}
	if (hasAnyDiff) process.exit(1);
};
