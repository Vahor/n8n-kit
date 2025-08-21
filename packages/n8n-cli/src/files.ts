import * as fs from "node:fs";
import * as path from "node:path";
import type { N8nKitConfig } from "./config";

export const createFolder = async (
	config: N8nKitConfig,
	subFolderName: string,
) => {
	const outputFolder = resolvePath(config, subFolderName);
	await fs.promises.mkdir(outputFolder, { recursive: true });
	const outStat = await fs.promises.stat(outputFolder);
	if (!outStat.isDirectory()) {
		throw new Error(`Output folder ${outputFolder} is not a directory`);
	}
	return outputFolder;
};

export const resolvePath = (config: N8nKitConfig, subFolderName: string) => {
	return path.resolve(process.cwd(), config.out, subFolderName);
};
