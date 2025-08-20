// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Vero/Vero.node.ts' node

export const name = "vero" as const;
export const description = "Consume Vero API" as const;
export const version = 1 as const;
export const defaults = {"name":"Vero"} as const;
export const credentials = [{"name":"veroApi","required":true}] as const

/**
 * Consume Vero API
 */
export interface VeroNodeParameters {

    /**
     * Default: "user"
     */
    readonly resource?: "user" | "event";


}

