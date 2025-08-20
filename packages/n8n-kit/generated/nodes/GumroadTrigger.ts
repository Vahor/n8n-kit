// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Gumroad/GumroadTrigger.node.ts' node

export const name = "gumroadTrigger" as const;
export const description = "Handle Gumroad events via webhooks" as const;
export const version = 1 as const;
export const defaults = {"name":"Gumroad Trigger"} as const;
export const credentials = [{"name":"gumroadApi","required":true}] as const

/**
 * Handle Gumroad events via webhooks
 */
export interface GumroadTriggerNodeParameters {

    /**
     * The resource is gonna fire the event
     */
    readonly resource: "cancellation" | "dispute" | "dispute_won" | "refund" | "sale";


}

