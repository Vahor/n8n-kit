// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Cortex/Cortex.node.ts' node

export const name = "cortex" as const;
export const description = "Apply the Cortex analyzer/responder on the given entity" as const;
export const version = 1 as const;
export const defaults = {"name":"Cortex"} as const;
export const credentials = [{"name":"cortexApi","required":true}] as const

/**
 * Apply the Cortex analyzer/responder on the given entity
 */
export interface CortexNodeParameters {

    /**
     * Choose a resource
     * Default: "analyzer"
     */
    readonly resource: "analyzer" | "job" | "responder";


}

