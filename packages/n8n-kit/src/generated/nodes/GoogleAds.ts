// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Google/Ads/GoogleAds.node.ts' node

export const description = "Use the Google Ads API" as const;
export const type = "n8n-nodes-base.googleAds" as const;
export const version = 1 as const;
export const credentials = [{"name":"googleAdsOAuth2Api","required":true,"testedBy":{"request":{"method":"GET","url":"/v20/customers:listAccessibleCustomers"}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface GoogleAdsNodeParameters {
    /** Default: "campaign" */
    readonly resource?: "campaign";

    /** Default: "getAll" */
    readonly operation?: "getAll" | "get";

    readonly managerCustomerId?: string;

    readonly clientCustomerId?: string;

    /** ID of the campaign */
    readonly campaignId?: string;

    /**
     * Additional options for fetching campaigns
     * Default: {}
     */
    readonly additionalOptions?: { dateRange?: "allTime" | "TODAY" | "YESTERDAY" | "LAST_7_DAYS" | "LAST_BUSINESS_WEEK" | "THIS_MONTH" | "LAST_MONTH" | "LAST_14_DAYS" | "LAST_30_DAYS", campaignStatus?: "all" | "ENABLED" | "PAUSED" | "REMOVED" };

}
