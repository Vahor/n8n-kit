import { defineConfig } from "tsdown";

export const input = [
	"src/index.ts",
	"src/workflow/index.ts",
	"src/nodes/index.ts",
];

export default defineConfig({
	target: ["es2020"],
	platform: "node",
	entry: input,
	clean: true,
	unbundle: true,
	dts: {
		sourcemap: false,
		tsconfig: "./tsconfig.build.json",
	},
	format: ["cjs", "esm"],
});
