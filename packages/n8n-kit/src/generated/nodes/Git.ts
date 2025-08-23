// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Git/Git.node.ts' node

export const description = "Control git." as const;
export const type = "n8n-nodes-base.git" as const;
export const version = 1 as const;
export const credentials = [{"name":"gitPassword","required":true,"displayOptions":{"show":{"authentication":["gitPassword"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface GitNodeParameters {
    /**
     * The way to authenticate
     * Default: "none"
     */
    readonly authentication?: "gitPassword" | "none";

    /**
     * Default: "log"
     */
    readonly operation?: "add" | "addConfig" | "clone" | "commit" | "fetch" | "listConfig" | "log" | "pull" | "push" | "pushTags" | "status" | "tag" | "userSetup";

    /**
     * Local path of the git repository to operate on
     */
    readonly repositoryPath?: string;

    /**
     * Comma-separated list of paths (absolute or relative to Repository Path) of files or folders to add
     */
    readonly pathsToAdd?: string;

    /**
     * Name of the key to set
     */
    readonly key?: string;

    /**
     * Value of the key to set
     */
    readonly value?: string;

    /**
     * Default: {}
     */
    readonly options?: { "mode"?: "append" | "set" } | { "pathsToAdd"?: string } | { "file"?: string } | { "targetRepository"?: string };

    /**
     * The URL or path of the repository to clone
     */
    readonly sourceRepository?: string;

    /**
     * The commit message to use
     */
    readonly message?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /**
     * The name of the tag to create
     */
    readonly name?: string;

}
