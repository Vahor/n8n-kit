import * as path from "node:path";
import { CodeMaker } from "codemaker";
import { globSync } from "tinyglobby";

const starExport = `*`;
const buildEntrypoint = async (
	forFolder: string,
	options?: {
		toExport?: (withoutExtension: string) => string;
		skip?: (withoutExtension: string) => boolean;
		append?: string[];
	},
) => {
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
		if (options?.skip?.(withoutExtension)) {
			continue;
		}
		const toExport = options?.toExport
			? options.toExport(withoutExtension)
			: starExport;
		code.line(`export ${toExport} from "./${withoutExtension}";`);
	}

	if (options?.append && options.append.length > 0) {
		code.line();
		for (const txt of options.append) {
			code.line(txt);
		}
	}

	code.closeFile(entrypointPath);
	await code.save(forFolder);
};

await buildEntrypoint("src/nodes", {
	skip: (withoutExtension) => withoutExtension === "node",
});
await buildEntrypoint("src/generated/nodes-impl");
await buildEntrypoint("src/generated/nodes", {
	toExport: (withoutExtension) => `type { ${withoutExtension}NodeParameters }`,
});
