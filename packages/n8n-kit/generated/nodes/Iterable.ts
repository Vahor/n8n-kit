// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Iterable/Iterable.node.ts' node

export const name = "iterable" as const;
export const description = "Consume Iterable API" as const;
export const version = 1 as const;
export const defaults = {"name":"Iterable"} as const;
export const credentials = [{"name":"iterableApi","required":true}] as const

/**
 * Consume Iterable API
 */
export interface IterableNodeParameters {

    /**
     * Default: "user"
     */
    readonly resource?: "event" | "user" | "userList";


}

