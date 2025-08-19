import * as fs from "node:fs";
import * as z from "zod";

const configFileName = "n8n-kit.config.json";

export const n8nKitConfig = z.object({
	entrypoint: z.string().describe("The entry point of the project"),
	out: z.string().describe("The output directory"),
});

export type N8nKitConfig = z.infer<typeof n8nKitConfig>;

export const configFileExists = async (): Promise<boolean> => {
	try {
		await fs.promises.access(configFileName);
		return true;
	} catch (_ignored) {
		return false;
	}
};

export const readConfigFile = async (): Promise<N8nKitConfig> => {
	const configFilePath = configFileName;

	if (!(await configFileExists())) {
		throw new Error(`Config file ${configFilePath} does not exist`);
	}

	const configFile = await fs.promises.readFile(configFilePath, "utf-8");
	const config = JSON.parse(configFile);

	return n8nKitConfig.parse(config);
};

export const writeConfigFile = async (config: N8nKitConfig) => {
	const configFilePath = configFileName;

	await fs.promises.writeFile(configFilePath, JSON.stringify(config, null, 2));

	console.log(`Config file ${configFilePath} written with:`);
	console.log(JSON.stringify(config, null, 2));
};
