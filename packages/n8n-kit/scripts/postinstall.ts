import * as fs from "node:fs";
import * as path from "node:path";

const pkgDir = path.resolve(
	__dirname,
	"../../../node_modules/@n8n/backend-network",
);

const pkgJsonPath = path.join(pkgDir, "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, "utf-8"));

let modified = false;
for (const exports of Object.values(pkg.exports ?? {}) as Record<
	string,
	string
>[]) {
	for (const condition of ["import", "default"] as const) {
		const val = exports[condition];
		if (typeof val === "string" && val.startsWith("./src/")) {
			const distPath = val.replace("./src/", "./dist/").replace(/\.ts$/, ".js");
			if (fs.existsSync(path.join(pkgDir, distPath))) {
				exports[condition] = distPath;
				modified = true;
			}
		}
	}
}

if (modified) {
	fs.writeFileSync(pkgJsonPath, `${JSON.stringify(pkg, null, "\t")}\n`);
	console.log("Patched @n8n/backend-network exports: src/ → dist/");
}
