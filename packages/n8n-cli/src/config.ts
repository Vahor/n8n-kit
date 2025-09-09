import * as fs from "node:fs";
import * as path from "node:path";
import logger from "@vahor/n8n-kit/logger";
import { DEFAULT_CONFIG } from "@vahor/n8n-kit/utils";
import { type } from "arktype";
import { formatArkErrors } from "./utils/ark";

export const configFileName = "n8n-kit.config.json";

export const n8nKitConfig = type({
	entrypoint: "string",
	out: "string",
	projectId: "string?",
});

export type N8nKitConfig = (typeof n8nKitConfig)["infer"];

export const configFileExists = async (): Promise<boolean> => {
	try {
		await fs.promises.access(configFileName);
		return true;
	} catch (_ignored) {
		return false;
	}
};

let cachedConfig: N8nKitConfig | undefined;

export const readConfigFile = async (): Promise<N8nKitConfig> => {
	if (cachedConfig !== undefined) return Promise.resolve(cachedConfig);

	const configFilePath = configFileName;
	logger.debug(`Reading config file ${configFilePath}`);

	if (!(await configFileExists())) {
		throw new Error(`Config file ${configFilePath} does not exist`);
	}

	const configFile = await fs.promises.readFile(configFilePath, "utf-8");
	const config = JSON.parse(configFile);

	const parsed = n8nKitConfig(config);
	if (parsed instanceof type.errors) {
		const message = "Errors found while validating config file";
		console.error(formatArkErrors(parsed, message));
		process.exit(1);
	}
	cachedConfig = parsed;
	logger.debug(`Loaded config: ${JSON.stringify(cachedConfig)}`);

	DEFAULT_CONFIG.out = path.resolve(`${process.cwd()}/${config.out}`);

	return cachedConfig;
};

export const getProjectIdentifier = async (): Promise<string> => {
	const config = await readConfigFile();

	if (config.projectId) {
		return config.projectId;
	}

	try {
		const packageJsonPath = path.resolve(process.cwd(), "package.json");
		const packageJson = JSON.parse(
			await fs.promises.readFile(packageJsonPath, "utf-8"),
		);
		if (packageJson.name && typeof packageJson.name === "string") {
			return packageJson.name;
		}
	} catch (error) {
		// package.json doesn't exist or is invalid
		logger.error("Error reading package.json", error as Error);
	}

	throw new Error(
		"No projectId in config and no package.json name found. Consider running 'n8n-kit init' to regenerate config with projectId.",
	);
};

export const writeConfigFile = async (config: N8nKitConfig) => {
	const configFilePath = configFileName;

	await fs.promises.writeFile(configFilePath, JSON.stringify(config, null, 2));
};
