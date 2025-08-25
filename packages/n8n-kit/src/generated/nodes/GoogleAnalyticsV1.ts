// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Google/Analytics/v1/GoogleAnalyticsV1.node.ts' node

export const description = "Use the Google Analytics API" as const;
export const type = "n8n-nodes-base.googleAnalytics" as const;
export const version = 1 as const;
export const credentials = [{"name":"googleAnalyticsOAuth2","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface GoogleAnalyticsV1NodeParameters {
    /** Default: "report" */
    readonly resource?: "report" | "userActivity";

    /** Default: "get" */
    readonly operation?: "get" | "search";

    /**
     * The View ID of Google Analytics. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getViews"}
     */
    readonly viewId?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 1000
     * Type options: {"minValue":1,"maxValue":1000}
     */
    readonly limit?: number;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;

    /** Default: {} */
    readonly additionalFields?: { dateRangesUi?: { dateRanges: { startDate?: string, endDate?: string } }, dimensionUi?: { dimensionValues: { name?: string } }, dimensionFiltersUi?: { filterValues: { dimensionName?: string, operator?: "BEGINS_WITH" | "ENDS_WITH" | "NUMERIC_EQUAL" | "EXACT" | "NUMERIC_GREATER_THAN" | "NUMERIC_LESS_THAN" | "PARTIAL" | "REGEXP", expressions?: string } }, hideTotals?: boolean, hideValueRanges?: boolean, includeEmptyRows?: boolean, metricsUi?: { metricValues: { alias?: string, expression?: string, formattingType?: "CURRENCY" | "FLOAT" | "INTEGER" | "PERCENT" | "TIME" } }, useResourceQuotas?: boolean } | { activityTypes?: ("ECOMMERCE" | "EVENT" | "GOAL" | "PAGEVIEW" | "SCREENVIEW")[] };

    /** ID of a user */
    readonly userId?: string;

}
