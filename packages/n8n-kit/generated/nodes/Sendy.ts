// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Sendy/Sendy.node.ts' node

export const name = "sendy" as const;
export const description = "Consume Sendy API" as const;
export const version = 1 as const;
export const defaults = {"name":"Sendy"} as const;
export const credentials = [{"name":"sendyApi","required":true}] as const

/**
 * Consume Sendy API
 */
export interface SendyNodeParameters {

    /**
     * Default: "subscriber"
     */
    readonly resource?: "campaign" | "subscriber";


}

