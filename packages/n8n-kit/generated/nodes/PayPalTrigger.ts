// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/PayPal/PayPalTrigger.node.js' node

export const name = "payPalTrigger" as const;
export const description = "Handle PayPal events via webhooks" as const;
export const version = 1 as const;
export const defaults = {"name":"PayPal Trigger"} as const;
export const credentials = [{"name":"payPalApi","required":true}] as const

/**
 * Handle PayPal events via webhooks
 */
export interface PayPalTriggerNodeParameters {

    /**
     * The event to listen to. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getEvents"}
     */
    readonly events: ()[];


}

