// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Google/Analytics/v1/GoogleAnalyticsV1.node.ts' node

export const name = "googleAnalytics" as const;
export const description = "Use the Google Analytics API" as const;
export const version = 1 as const;

/**
 * Use the Google Analytics API
 */
export interface GoogleAnalyticsV1NodeParameters {

    /**
     */
    readonly oldVersionNotice?: string;

    /**
     * Default: "report"
     */
    readonly resource?: "report" | "userActivity";

    /**
     * Default: "get"
     */
    readonly operation?: "get" | "search";

    /**
     * The View ID of Google Analytics. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getViews"}
     */
    readonly viewId?: string | string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean | boolean;

    /**
     * Max number of results to return
     * Default: 1000
     * Type options: {"minValue":1,"maxValue":1000}
     */
    readonly limit?: number | number;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "dateRangesUi"?: { "dateRanges": any }, "dimensionUi"?: { "dimensionValues": any }, "dimensionFiltersUi"?: { "filterValues": any }, "hideTotals"?: boolean, "hideValueRanges"?: boolean, "includeEmptyRows"?: boolean, "metricsUi"?: { "metricValues": any }, "useResourceQuotas"?: boolean } | { "activityTypes"?: ("ECOMMERCE" | "EVENT" | "GOAL" | "PAGEVIEW" | "SCREENVIEW")[] };

    /**
     * ID of a user
     */
    readonly userId?: string;


}

