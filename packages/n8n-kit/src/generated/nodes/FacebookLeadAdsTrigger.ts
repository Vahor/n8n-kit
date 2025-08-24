// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/FacebookLeadAds/FacebookLeadAdsTrigger.node.ts' node

export const description = "Handle Facebook Lead Ads events via webhooks" as const;
export const type = "n8n-nodes-base.facebookLeadAdsTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"facebookLeadAdsOAuth2Api","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface FacebookLeadAdsTriggerNodeParameters {
    /** Default: "newLead" */
    readonly event?: "newLead";

    /**
     * The page linked to the form for retrieving new leads
     * Default: {"mode":"list","value":""}
     */
    readonly page?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * The form to monitor for fetching lead details upon submission
     * Default: {"mode":"list","value":""}
     */
    readonly form?: {
	value: string,
	mode: "list" | "id",
};

    /** Default: {} */
    readonly options?: { "simplifyOutput"?: boolean };

}
