// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/CustomerIo/CustomerIoTrigger.node.ts' node

export const description = "Starts the workflow on a Customer.io update (Beta)" as const;
export const type = "n8n-nodes-base.customerIoTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"customerIoApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface CustomerIoTriggerNodeParameters {
    /**
     * The events that can trigger the webhook and whether they are enabled
     * Default: []
     */
    readonly events?: ("customer.subscribed" | "customer.unsubscribed" | "email.attempted" | "email.bounced" | "email.clicked" | "email.converted" | "email.delivered" | "email.drafted" | "email.failed" | "email.opened" | "email.sent" | "email.spammed" | "push.attempted" | "push.bounced" | "push.clicked" | "push.delivered" | "push.drafted" | "push.failed" | "push.opened" | "push.sent" | "slack.attempted" | "slack.clicked" | "slack.drafted" | "slack.failed" | "slack.sent" | "sms.attempted" | "sms.bounced" | "sms.clicked" | "sms.delivered" | "sms.drafted" | "sms.failed" | "sms.sent")[];

}
