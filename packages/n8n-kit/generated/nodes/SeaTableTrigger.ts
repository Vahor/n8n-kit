// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/SeaTable/SeaTableTrigger.node.js' node

export const name = "seaTableTrigger" as const;
export const description = "Starts the workflow when SeaTable events occur" as const;
export const version = 1 as const;
export const defaults = {"name":"SeaTable Trigger"} as const;
export const credentials = [{"name":"seaTableApi","required":true}] as const

/**
 * Starts the workflow when SeaTable events occur
 */
export interface SeaTableTriggerNodeParameters {

    /**
     * The name of SeaTable table to access. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getTableNames"}
     */
    readonly tableName: string;

    /**
     * Default: "rowCreated"
     */
    readonly event?: "rowCreated";

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;


}

