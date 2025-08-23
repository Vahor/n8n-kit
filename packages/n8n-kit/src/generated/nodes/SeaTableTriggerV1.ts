// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/SeaTable/v1/SeaTableTriggerV1.node.ts' node

export const name = "undefined" as const;
export const description = "undefined" as const;
export const version = 1 as const;
export const credentials = [{"name":"seaTableApi","required":true}] as const;

/**
 * undefined
 */
export interface SeaTableTriggerV1NodeParameters {

    /**
     * The name of SeaTable table to access. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
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

    readonly pollTimes: { item: { mode: "everyMinute" | (string & {}) }[] };

}

