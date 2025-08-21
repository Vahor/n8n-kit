import * as fs from "node:fs";
import { type } from "arktype";
import { formatArkErrors } from "./utils/ark";

const configFileName = "n8n-kit.config.json";

export const n8nKitConfig = type({
	entrypoint: "string",
	out: "string",
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

	if (!(await configFileExists())) {
		throw new Error(`Config file ${configFilePath} does not exist`);
	}

	const configFile = await fs.promises.readFile(configFilePath, "utf-8");
	const config = JSON.parse(configFile);

	const parsed = n8nKitConfig(config);
	if (parsed instanceof type.errors) {
		const message = "Errors found while validating environment variables";
		console.error(formatArkErrors(parsed, message));
		process.exit(1);
	}
	cachedConfig = parsed;

	return cachedConfig;
};

export const writeConfigFile = async (config: N8nKitConfig) => {
	const configFilePath = configFileName;

	await fs.promises.writeFile(configFilePath, JSON.stringify(config, null, 2));

	console.log(`Config file ${configFilePath} written with:`);
	console.log(JSON.stringify(config, null, 2));
};
