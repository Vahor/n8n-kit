// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Mailjet/MailjetTrigger.node.ts' node

export const description = "Handle Mailjet events via webhooks" as const;
export const type = "n8n-nodes-base.mailjetTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"mailjetEmailApi","required":true}] as const;
export const outputs = {"main":"main"} as const;

export interface MailjetTriggerNodeParameters {

    /**
     * Determines which resource events the webhook is triggered for
     * Default: "open"
     */
    readonly event?: "blocked" | "bounce" | "open" | "sent" | "spam" | "unsub";


}

