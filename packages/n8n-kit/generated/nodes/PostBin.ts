// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/PostBin/PostBin.node.ts' node

export const name = "postBin" as const;
export const description = "Consume PostBin API" as const;
export const version = 1 as const;
export const defaults = {"name":"PostBin"} as const;
export const credentials = [] as const

/**
 * Consume PostBin API
 */
export interface PostBinNodeParameters {

    /**
     * Default: "bin"
     */
    readonly resource: "bin" | "request";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "get" | "delete" | "removeFirst" | "send";

    /**
     * Unique identifier for each bin
     */
    readonly binId?: string;

    /**
     * Type options: {"rows":5}
     */
    readonly binContent?: string;

    /**
     * Unique identifier for each request
     */
    readonly requestId?: string;


}

