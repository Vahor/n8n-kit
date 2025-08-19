import { defineConfig } from "tsdown";

export default defineConfig({
	entry: "src/n8n-kit.ts",
	format: "esm",
	target: "es2020",
	banner: {
		js: "#!/usr/bin/env node",
	},
});
