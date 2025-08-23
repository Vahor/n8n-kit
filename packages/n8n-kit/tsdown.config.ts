import { defineConfig } from "tsdown";

export const input = [
	"src/index.ts",
	"src/logger.ts",
	"src/workflow/index.ts",
	"src/generated.ts",
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
	external: ["@dagrejs/dagre"],
	outExtensions: (ctx) => ({
		dts: ctx.format === "cjs" ? ".d.cts" : ".d.mts",
		js: ctx.format === "cjs" ? ".cjs" : ".mjs",
	}),
});
