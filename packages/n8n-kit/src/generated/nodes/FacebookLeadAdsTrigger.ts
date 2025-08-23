// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/FacebookLeadAds/FacebookLeadAdsTrigger.node.ts' node

export const name = "facebookLeadAdsTrigger" as const;
export const description = "Handle Facebook Lead Ads events via webhooks" as const;
export const version = 1 as const;
export const credentials = [{"name":"facebookLeadAdsOAuth2Api","required":true}] as const;

/**
 * Handle Facebook Lead Ads events via webhooks
 */
export interface FacebookLeadAdsTriggerNodeParameters {

    /**
     */
    readonly facebookLeadAdsNotice?: string;

    /**
     * Default: "newLead"
     */
    readonly event: "newLead";

    /**
     * The page linked to the form for retrieving new leads
     * Default: {"mode":"list","value":""}
     */
    readonly page: any;

    /**
     * The form to monitor for fetching lead details upon submission
     * Default: {"mode":"list","value":""}
     */
    readonly form: any;

    /**
     * Default: {}
     */
    readonly options?: { "simplifyOutput"?: boolean };


}

