import * as path from "node:path";

export const prefix = "@vahor/n8n-" as const;

export const DEFAULT_CONFIG = {
	out: "tmp",
};

let projectSalt: string | null = null;
let projectRoot: string | null = null;

/*
 * @internal
 */
export const setProjectSalt = (salt: string) => {
	if (projectSalt !== null && projectSalt !== salt) {
		throw new Error("Project salt cannot be changed at runtime");
	}
	projectSalt = salt;
};

export const getProjectSalt = (): string => {
	if (projectSalt === null) {
		if (process.env.NODE_ENV === "test") {
			// add a default salt during tests
			return "test";
		}
		throw new Error(
			"Project salt not set. This should be set by the CLI before running workflows.",
		);
	}
	return projectSalt;
};

/*
 * @internal
 */
export const setProjectRoot = (root: string) => {
	projectRoot = root;
};

export const getProjectRoot = (): string => {
	if (projectRoot === null) {
		return path.resolve(process.cwd());
	}
	return projectRoot;
};
