import * as path from "node:path";
import { CodeMaker } from "codemaker";
import { globSync } from "tinyglobby";

const buildEntrypoint = async (forFolder: string, append: string[] = []) => {
	const matchs = globSync(`../${forFolder}/**/*.ts`, {
		cwd: path.resolve(__dirname),
	}).sort();

	const entrypointPath = "index.ts";

	const code = new CodeMaker();
	code.openFile(entrypointPath);
	code.line(`// GENERATED FILE, DO NOT EDIT`);
	code.line(`// see scripts/generate-entrypoint.ts`);
	code.line();

	for (const match of matchs) {
		const relativePath = match.replace(`../${forFolder}/`, "");
		if (relativePath === "index.ts" || relativePath === "generated.ts") {
			continue;
		}
		const withoutExtension = relativePath.replace(/\.ts$/, "");
		code.line(`export * from "./${withoutExtension}";`);
	}

	if (append.length > 0) {
		code.line();
		for (const txt of append) {
			code.line(txt);
		}
	}

	code.closeFile(entrypointPath);
	await code.save(forFolder);
};

await buildEntrypoint("src/nodes");
await buildEntrypoint("src/generated/nodes-impl");
await buildEntrypoint("src/generated/nodes");
