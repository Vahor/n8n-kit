// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Stackby/Stackby.node.ts' node

export const name = "stackby" as const;
export const description = "Read, write, and delete data in Stackby" as const;
export const version = 1 as const;

/**
 * Read, write, and delete data in Stackby
 */
export interface StackbyNodeParameters {

    /**
     * Default: "append"
     */
    readonly operation?: "append" | "delete" | "list" | "read";

    /**
     * The ID of the stack to access
     */
    readonly stackId: string;

    /**
     * Enter Table Name
     */
    readonly table: string;

    /**
     * ID of the record to return
     */
    readonly id?: string;

    /**
     * Whether to return all results or only up to a given limit
     * Default: true
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 1000
     * Type options: {"minValue":1,"maxValue":1000}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "view"?: string };

    /**
     * Comma-separated list of the properties which should used as columns for the new rows
     */
    readonly columns?: string;


}

