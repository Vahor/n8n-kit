// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Kitemaker/Kitemaker.node.ts' node

export const name = "kitemaker" as const;
export const description = "Consume the Kitemaker GraphQL API" as const;
export const version = 1 as const;
export const defaults = {"name":"Kitemaker"} as const;
export const credentials = [{"name":"kitemakerApi","required":true}] as const

/**
 * Consume the Kitemaker GraphQL API
 */
export interface KitemakerNodeParameters {

    /**
     * Default: "workItem"
     */
    readonly resource: "organization" | "space" | "user" | "workItem";


}

