// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Git/Git.node.ts' node

export const name = "git" as const;
export const description = "Control git." as const;
export const version = 1 as const;
export const defaults = {"name":"Git"} as const;
export const credentials = [{"name":"gitPassword","required":true,"displayOptions":{"show":{"authentication":["gitPassword"]}}}] as const

/**
 * Control git.
 */
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
    readonly repositoryPath: string;


}

