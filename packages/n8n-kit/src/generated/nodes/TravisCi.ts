// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/TravisCi/TravisCi.node.ts' node

export const description = "Consume TravisCI API" as const;
export const type = "n8n-nodes-base.travisCi" as const;
export const version = 1 as const;
export const credentials = [{"name":"travisCiApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface TravisCiNodeParameters {
    /** Default: "build" */
    readonly resource?: "build";

    /** Default: "cancel" */
    readonly operation?: "cancel" | "get" | "getAll" | "restart" | "trigger";

    /** Value uniquely identifying the build */
    readonly buildId?: string;

    /** Default: {} */
    readonly additionalFields?: { include?: string } | { include?: string, order?: "asc" | "desc", sortBy?: "created_at" | "finished_at" | "id" | "number" | "started_at" } | { message?: string, mergeMode?: "deep_merge" | "deep_merge_append" | "deep_merge_prepend" | "merge" | "replace" };

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /** Same as {ownerName}/{repositoryName} */
    readonly slug?: string;

    /** Branch requested to be built */
    readonly branch?: string;

}
