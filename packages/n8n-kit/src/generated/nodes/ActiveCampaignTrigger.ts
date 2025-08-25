// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/ActiveCampaign/ActiveCampaignTrigger.node.ts' node

export const description = "Handle ActiveCampaign events via webhooks" as const;
export const type = "n8n-nodes-base.activeCampaignTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"activeCampaignApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface ActiveCampaignTriggerNodeParameters {
    /**
     * Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Default: []
     * Type options: {"loadOptionsMethod":"getEvents"}
     */
    readonly events?: (string)[];

    /** Default: [] */
    readonly sources?: ("public" | "admin" | "api" | "system")[];

}
