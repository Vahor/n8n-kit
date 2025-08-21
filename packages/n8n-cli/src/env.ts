import { type } from "arktype";
import { formatArkErrors } from "./utils/ark";

const envArkSchema = type({
	N8N_API_KEY: "string",
	N8N_BASE_URL: "string.url",
});

const parsed = envArkSchema(process.env);
let cached: Exclude<typeof parsed, type.errors> | undefined;

export const env = (k: keyof (typeof envArkSchema)["infer"]) => {
	if (cached !== undefined) return cached[k];
	if (parsed instanceof type.errors) {
		const message = "Errors found while validating environment variables";
		console.error(formatArkErrors(parsed, message));
		process.exit(1);
	}
	cached = parsed;
	return parsed[k];
};
