// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Npm/Npm.node.ts' node

export const description = "Consume NPM registry API" as const;
export const type = "n8n-nodes-base.npm" as const;
export const version = 1 as const;
export const credentials = [{"name":"npmApi","required":false}] as const;

/**
 * Consume NPM registry API
 */
export interface NpmNodeParameters {

    /**
     * Default: "package"
     */
    readonly resource?: "package" | "distTag";

    /**
     * Default: "getMetadata"
     */
    readonly operation?: "getMetadata" | "getVersions" | "search" | "getMany" | "update";

    readonly packageName?: string;

    /**
     * Default: "latest"
     */
    readonly packageVersion?: string;

    /**
     * The query text used to search for packages
     */
    readonly query?: string;

    /**
     * Max number of results to return
     * Default: 10
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /**
     * Offset to return results from
     * Type options: {"minValue":0}
     */
    readonly offset?: number;

    /**
     * Default: "latest"
     */
    readonly distTagName?: string;


}

