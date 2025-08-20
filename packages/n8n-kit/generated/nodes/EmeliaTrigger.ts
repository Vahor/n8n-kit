// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Emelia/EmeliaTrigger.node.ts' node

export const name = "emeliaTrigger" as const;
export const description = "Handle Emelia campaign activity events via webhooks" as const;
export const version = 1 as const;
export const defaults = {"name":"Emelia Trigger"} as const;
export const credentials = [{"name":"emeliaApi","required":true,"testedBy":"emeliaApiTest"}] as const

/**
 * Handle Emelia campaign activity events via webhooks
 */
export interface EmeliaTriggerNodeParameters {

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getCampaigns"}
     */
    readonly campaignId: string;

    /**
     * Default: []
     */
    readonly events: ("bounced" | "opened" | "replied" | "sent" | "clicked" | "unsubscribed")[];


}

