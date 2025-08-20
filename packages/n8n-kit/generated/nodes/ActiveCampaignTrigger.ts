// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/ActiveCampaign/ActiveCampaignTrigger.node.ts' node

export const name = "activeCampaignTrigger" as const;
export const description = "Handle ActiveCampaign events via webhooks" as const;
export const version = 1 as const;
export const defaults = {"name":"ActiveCampaign Trigger"} as const;
export const credentials = [{"name":"activeCampaignApi","required":true}] as const

/**
 * Handle ActiveCampaign events via webhooks
 */
export interface ActiveCampaignTriggerNodeParameters {

    /**
     * Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Default: []
     * Type options: {"loadOptionsMethod":"getEvents"}
     */
    readonly events?: ()[];

    /**
     * Default: []
     */
    readonly sources?: ("public" | "admin" | "api" | "system")[];


}

