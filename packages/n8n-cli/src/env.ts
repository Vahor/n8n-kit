import { type } from "arktype";
import { formatArkErrors } from "./utils/ark";

const envArkSchema = type({
	N8N_API_KEY: "string",
});

const parsed = envArkSchema(process.env);
const initialized = false;

export const validateEnv = () => {
	if (!parsed) {
		throw new Error("env is not initialized");
	}
	if (parsed instanceof type.errors) {
		const message = formatArkErrors(parsed);
		console.error(message);
		process.exit(1);
	}
	return parsed;
};
if (!initialized) {
	validateEnv();
}
export const env: Exclude<typeof parsed, type.errors> = parsed as any;
