// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Brevo/BrevoTrigger.node.ts' node

export const description = "Starts the workflow when Brevo events occur" as const;
export const type = "n8n-nodes-base.sendInBlueTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"sendInBlueApi","required":true,"displayOptions":{"show":{}}}] as const;
export const outputs = {"main":"main"} as const;

export interface BrevoTriggerNodeParameters {

    /**
     * Default: "transactional"
     */
    readonly type?: "inbound" | "marketing" | "transactional";

    /**
     * Default: []
     */
    readonly events?: ("blocked" | "click" | "deferred" | "delivered" | "hardBounce" | "invalid" | "spam" | "opened" | "request" | "softBounce" | "uniqueOpened" | "unsubscribed")[] | ("click" | "delivered" | "hardBounce" | "listAddition" | "opened" | "softBounce" | "spam" | "unsubscribed")[] | ("inboundEmailProcessed")[];


}

