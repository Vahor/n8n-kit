import { defineConfig } from "tsdown";

export const input = [
	"src/index.ts",
	"src/logger.ts",
	"src/workflow/index.ts",
	"src/nodes/index.ts",
	"src/nodes/generated.ts",
	"src/credentials/generated.ts",
];

export default defineConfig({
	target: ["es2020"],
	platform: "node",
	entry: input,
	clean: true,
	unbundle: false, // TODO: issue with circular dependencies (TypeError: Class extends value undefined is not a constructor or null / TypeError: The superclass is not a constructor.)
	sourcemap: false,
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
