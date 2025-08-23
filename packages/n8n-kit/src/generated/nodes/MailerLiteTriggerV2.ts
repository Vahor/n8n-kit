// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/MailerLite/v2/MailerLiteTriggerV2.node.ts' node

export const description = "Starts the workflow when MailerLite events occur" as const;
export const type = "n8n-nodes-base.mailerLiteTrigger" as const;
export const version = 2 as const;
export const credentials = [{"name":"mailerLiteApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface MailerLiteTriggerV2NodeParameters {
    /**
     * The events to listen to
     * Default: []
     */
    readonly events?: ("campaign.sent" | "subscriber.added_to_group" | "subscriber.automation_completed" | "subscriber.automation_triggered" | "subscriber.bounced" | "subscriber.created" | "subscriber.removed_from_group" | "subscriber.spam_reported" | "subscriber.unsubscribed" | "subscriber.updated")[];

}
