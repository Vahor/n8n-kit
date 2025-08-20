// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Bannerbear/Bannerbear.node.ts' node

export const name = "bannerbear" as const;
export const description = "Consume Bannerbear API" as const;
export const version = 1 as const;
export const defaults = {"name":"Bannerbear"} as const;
export const credentials = [{"name":"bannerbearApi","required":true}] as const

/**
 * Consume Bannerbear API
 */
export interface BannerbearNodeParameters {

    /**
     * Default: "image"
     */
    readonly resource?: "image" | "template";


}

