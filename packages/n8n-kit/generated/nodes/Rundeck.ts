// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Rundeck/Rundeck.node.ts' node

export const name = "rundeck" as const;
export const description = "Manage Rundeck API" as const;
export const version = 1 as const;

/**
 * Manage Rundeck API
 */
export interface RundeckNodeParameters {

    /**
     * Default: "job"
     */
    readonly resource?: "job";

    /**
     * Default: "execute"
     */
    readonly operation?: "execute" | "getMetadata";

    /**
     * The job ID to execute
     */
    readonly jobid?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly arguments?: { "arguments": any };

    /**
     * Filter Rundeck nodes by name
     */
    readonly filter?: string;


}

