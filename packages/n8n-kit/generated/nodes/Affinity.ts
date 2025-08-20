// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Affinity/Affinity.node.ts' node

export const name = "affinity" as const;
export const description = "Consume Affinity API" as const;
export const version = 1 as const;
export const defaults = {"name":"Affinity"} as const;
export const credentials = [{"name":"affinityApi","required":true}] as const

/**
 * Consume Affinity API
 */
export interface AffinityNodeParameters {

    /**
     * Default: "organization"
     */
    readonly resource?: "list" | "listEntry" | "organization" | "person";


}

