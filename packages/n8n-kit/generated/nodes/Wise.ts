// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Wise/Wise.node.ts' node

export const name = "wise" as const;
export const description = "Consume the Wise API" as const;
export const version = 1 as const;
export const defaults = {"name":"Wise"} as const;
export const credentials = [{"name":"wiseApi","required":true}] as const

/**
 * Consume the Wise API
 */
export interface WiseNodeParameters {

    /**
     * Default: "account"
     */
    readonly resource?: "account" | "exchangeRate" | "profile" | "quote" | "recipient" | "transfer";


}

