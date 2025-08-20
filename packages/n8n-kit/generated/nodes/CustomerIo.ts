// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/CustomerIo/CustomerIo.node.ts' node

export const name = "customerIo" as const;
export const description = "Consume Customer.io API" as const;
export const version = 1 as const;
export const defaults = {"name":"Customer.io"} as const;
export const credentials = [{"name":"customerIoApi","required":true}] as const

/**
 * Consume Customer.io API
 */
export interface CustomerIoNodeParameters {

    /**
     * Default: "customer"
     */
    readonly resource?: "customer" | "event" | "campaign" | "segment";


}

