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

    /**
     * The Property of Google Analytics
     * Default: {"mode":"list","value":""}
     */
    readonly propertyId?: any;

    /**
     * Default: "last7days"
     */
    readonly dateRange?: "last7days" | "last30days" | "today" | "yesterday" | "lastCalendarWeek" | "lastCalendarMonth" | "custom";

    /**
     * Default: "defaultStartDate()"
     */
    readonly startDate?: string;

    /**
     * Default: "defaultEndDate()"
     */
    readonly endDate?: string;

    /**
     * The quantitative measurements of a report. For example, the metric eventCount is the total number of events. Requests are allowed up to 10 metrics.
     * Default: {"metricValues":[{"listName":"totalUsers"}]}
     * Type options: {"multipleValues":true}
     */
    readonly metricsGA4?: { "metricValues": any };

    /**
     * Dimensions are attributes of your data. For example, the dimension city indicates the city from which an event originates. Dimension values in report responses are strings; for example, the city could be "Paris" or "New York". Requests are allowed up to 9 dimensions.
     * Default: {"dimensionValues":[{"listName":"date"}]}
     * Type options: {"multipleValues":true}
     */
    readonly dimensionsGA4?: { "dimensionValues": any };

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":1000}
     */
    readonly limit?: number;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "currencyCode"?: string, "undefined"?: any, "metricAggregations"?: ("MAXIMUM" | "MINIMUM" | "TOTAL")[], "undefined"?: any, "keepEmptyRows"?: boolean, "orderByUI"?: { "metricOrderBy": any, "dimmensionOrderBy": any }, "returnPropertyQuota"?: boolean, "dimensionFiltersUi"?: { "filterValues": any }, "hideTotals"?: boolean, "hideValueRanges"?: boolean, "includeEmptyRows"?: boolean, "useResourceQuotas"?: boolean, "activityTypes"?: ("ECOMMERCE" | "EVENT" | "GOAL" | "PAGEVIEW" | "SCREENVIEW")[] };

    /**
     * The View of Google Analytics
     * Default: {"mode":"list","value":""}
     */
    readonly viewId?: any;

    /**
     * Metrics in the request
     * Default: {"metricValues":[{"listName":"ga:users"}]}
     * Type options: {"multipleValues":true}
     */
    readonly metricsUA?: { "metricValues": any };

    /**
     * Dimensions are attributes of your data. For example, the dimension ga:city indicates the city, for example, "Paris" or "New York", from which a session originates.
     * Default: {"dimensionValues":[{"listName":"ga:date"}]}
     * Type options: {"multipleValues":true}
     */
    readonly dimensionsUA?: { "dimensionValues": any };

    /**
     * ID of a user
     */
    readonly userId?: string;


}

