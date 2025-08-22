// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/MailerLite/v1/MailerLiteTriggerV1.node.ts' node

export const name = "mailerLiteTrigger" as const;
export const description = "Starts the workflow when MailerLite events occur" as const;
export const version = 1 as const;

/**
 * Starts the workflow when MailerLite events occur
 */
export interface MailerLiteTriggerV1NodeParameters {

    /**
     * The events to listen to
     * Default: []
     */
    readonly event: "campaign.sent" | "subscriber.added_through_webform" | "subscriber.add_to_group" | "subscriber.automation_complete" | "subscriber.automation_triggered" | "subscriber.bounced" | "subscriber.complaint" | "subscriber.create" | "subscriber.remove_from_group" | "subscriber.unsubscribe" | "subscriber.update";


}

