// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/SeaTable/v2/SeaTableTriggerV2.node.ts' node

export const name = "seaTable" as const;
export const description = "Consume the SeaTable API" as const;
export const version = 2 as const;
export const defaults = {"name":"SeaTable"} as const;
export const credentials = [{"name":"seaTableApi","required":true}] as const

/**
 * Consume the SeaTable API
 */
export interface SeaTableTriggerV2NodeParameters {

    /**
     * Default: "row"
     */
    readonly resource?: "row" | "base" | "link" | "asset";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "remove" | "get" | "list" | "lock" | "search" | "unlock" | "update" | "snapshot" | "metadata" | "collaborator" | "add" | "list" | "remove" | "getPublicURL" | "upload";


}

