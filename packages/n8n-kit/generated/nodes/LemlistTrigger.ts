// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Lemlist/LemlistTrigger.node.js' node

export const name = "lemlistTrigger" as const;
export const description = "Handle Lemlist events via webhooks" as const;
export const version = 1 as const;
export const defaults = {"name":"Lemlist Trigger"} as const;
export const credentials = [{"name":"lemlistApi","required":true}] as const

/**
 * Handle Lemlist events via webhooks
 */
export interface LemlistTriggerNodeParameters {

    /**
     */
    readonly event: "*" | "emailsBounced" | "emailsClicked" | "emailsFailed" | "emailsInterested" | "emailsNotInterested" | "emailsOpened" | "emailsReplied" | "emailsSendFailed" | "emailsSent" | "emailsUnsubscribed";

    /**
     * Default: {}
     */
    readonly options?: { "campaignId"?: string, "isFirst"?: boolean };


}

