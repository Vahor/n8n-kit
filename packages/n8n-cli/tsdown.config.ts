import { defineConfig } from "tsdown";

export default defineConfig({
	entry: "src/index.ts",
	format: "esm",
	target: "es2020",
	banner: {
		// TODO: should we remove that to allow bun to run it natively ?
		js: "#!/usr/bin/env node",
	},
});
