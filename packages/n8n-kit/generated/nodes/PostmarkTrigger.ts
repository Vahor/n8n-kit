// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Postmark/PostmarkTrigger.node.ts' node

export const name = "postmarkTrigger" as const;
export const description = "Starts the workflow when Postmark events occur" as const;
export const version = 1 as const;
export const defaults = {"name":"Postmark Trigger"} as const;
export const credentials = [{"name":"postmarkApi","required":true}] as const

/**
 * Starts the workflow when Postmark events occur
 */
export interface PostmarkTriggerNodeParameters {

    /**
     * Webhook events that will be enabled for that endpoint
     * Default: []
     */
    readonly events: ("bounce" | "click" | "delivery" | "open" | "spamComplaint" | "subscriptionChange")[];

    /**
     * Only fires on first open for event "Open"
     */
    readonly firstOpen?: boolean;

    /**
     * Whether to include message content for events "Bounce" and "Spam Complaint"
     */
    readonly includeContent?: boolean;


}

