// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Coda/Coda.node.ts' node

export const name = "coda" as const;
export const description = "Consume Coda API" as const;
export const version = 1.1 as const;
export const defaults = {"name":"Coda"} as const;
export const credentials = [{"name":"codaApi","required":true}] as const

/**
 * Consume Coda API
 */
export interface CodaNodeParameters {

    /**
     * Default: "table"
     */
    readonly resource?: "control" | "formula" | "table" | "view";


}

