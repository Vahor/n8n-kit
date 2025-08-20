// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/SeaTable/v2/actions/SeaTable.node.ts' node

export const name = "seaTable" as const;
export const description = "Consume the SeaTable API" as const;
export const version = 2 as const;
export const defaults = {"name":"SeaTable"} as const;
export const credentials = [{"name":"seaTableApi","required":true}] as const

/**
 * Consume the SeaTable API
 */
export interface SeaTableNodeParameters {

    /**
     * Default: "row"
     */
    readonly resource?: "row" | "base" | "link" | "asset";


}

