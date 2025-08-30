export const prefix = "@vahor/n8n-" as const;

export const DEFAULT_CONFIG = {
	out: "tmp",
};

let projectSalt: string | null = null;

/*
 * @internal
 */
export const setProjectSalt = (salt: string) => {
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
