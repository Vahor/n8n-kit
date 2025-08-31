import fs from "node:fs";
import spawn from "nano-spawn";

const COMMENT_MAPPINGS = {
	OutputSchema: `Output schema is only a TypeScript typedef used for compile-time typing.
 * It does NOT perform runtime validation. 
 * Use \`Code\` nodes or \`If\` nodes if you need to enforce structure at runtime.`,
	InputSchema: `Input schema is only a TypeScript typedef used for compile-time typing.
 * It does NOT perform runtime validation. 
 * Use \`Code\` nodes or \`If\` nodes if you need to enforce structure at runtime.`,
};

export const process = async () => {
	const filesToChange = await spawn("find", [
		"dist",
		"-type",
		"f",
		"-name",
		"*.d.[cm]ts",
		"-exec",
		"grep",
		"-H",
		"-l",
		"{@inheritDoc",
		"{}",
		";",
	]);
	const allFiles = filesToChange.stdout.split("\n");

	for (const [key, value] of Object.entries(COMMENT_MAPPINGS)) {
		for (const file of allFiles) {
			// Skill issue I wanted to use sed but escaping was hard :(
			const content = fs.readFileSync(file, "utf8");
			const newContent = content.replaceAll(`{@inheritDoc ${key}}`, value);
			if (newContent !== content) {
				fs.writeFileSync(file, newContent);
				console.log(`Replaced ${key} in ${file}`);
			}
		}
	}
};
