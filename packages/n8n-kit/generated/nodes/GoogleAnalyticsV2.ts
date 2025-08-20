// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Google/Analytics/v2/GoogleAnalyticsV2.node.ts' node

export const name = "googleAnalytics" as const;
export const description = "Use the Google Analytics API" as const;
export const version = 2 as const;
export const defaults = {"name":"Google Analytics"} as const;
export const credentials = [{"name":"googleAnalyticsOAuth2","required":true}] as const

/**
 * Use the Google Analytics API
 */
export interface GoogleAnalyticsV2NodeParameters {

    /**
     * Default: "report"
     */
    readonly resource?: "report" | "userActivity";

    /**
     * Default: "get"
     */
    readonly operation?: "get" | "search";

    /**
     * Google Analytics 4 is the latest version. Universal Analytics is an older version that is not fully functional after the end of June 2023.
     * Default: "ga4"
     */
    readonly propertyType?: "ga4" | "universal";


}

