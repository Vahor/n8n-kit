// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/PayPal/PayPalTrigger.node.ts' node

export const description = "Handle PayPal events via webhooks" as const;
export const type = "n8n-nodes-base.payPalTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"payPalApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface PayPalTriggerNodeParameters {
    /**
     * The event to listen to. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getEvents"}
     */
    readonly events?: (string)[];

}
