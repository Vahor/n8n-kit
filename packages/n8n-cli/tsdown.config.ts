import { defineConfig } from "tsdown";

export default defineConfig({
	entry: "src/n8n-kit.ts",
	format: "cjs",
	target: "node18",
	banner: {
		js: "#!/usr/bin/env node",
	},
});
