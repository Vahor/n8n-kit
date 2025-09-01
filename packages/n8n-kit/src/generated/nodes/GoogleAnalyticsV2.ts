// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Google/Analytics/v2/GoogleAnalyticsV2.node.ts' node

export const description = "Use the Google Analytics API" as const;
export const type = "n8n-nodes-base.googleAnalytics" as const;
export const version = 2 as const;
export const credentials = [{"name":"googleAnalyticsOAuth2","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface GoogleAnalyticsV2NodeParameters {
    /** Default: "report" */
    readonly resource?: "report" | "userActivity";

    /** Default: "get" */
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
    readonly propertyId?: {
	value: string,
	mode: "list" | "url" | "id",
};

    /** Default: "last7days" */
    readonly dateRange?: "last7days" | "last30days" | "today" | "yesterday" | "lastCalendarWeek" | "lastCalendarMonth" | "custom";

    /** Default: "2025-08-24T00:00:00.000+00:00" */
    readonly startDate?: string;

    /** Default: "2025-08-31T00:00:00.000+00:00" */
    readonly endDate?: string;

    /**
     * The quantitative measurements of a report. For example, the metric eventCount is the total number of events. Requests are allowed up to 10 metrics.
     * Default: {"metricValues":[{"listName":"totalUsers"}]}
     * Type options: {"multipleValues":true}
     */
    readonly metricsGA4?: { metricValues: Array<{ listName?: "active1DayUsers" | "active28DayUsers" | "active7DayUsers" | "checkouts" | "eventCount" | "screenPageViews" | "userEngagementDuration" | "sessions" | "sessionsPerUser" | "totalUsers" | "other" | "custom", name?: string, expression?: string, invisible?: boolean }> };

    /**
     * Dimensions are attributes of your data. For example, the dimension city indicates the city from which an event originates. Dimension values in report responses are strings; for example, the city could be "Paris" or "New York". Requests are allowed up to 9 dimensions.
     * Default: {"dimensionValues":[{"listName":"date"}]}
     * Type options: {"multipleValues":true}
     */
    readonly dimensionsGA4?: { dimensionValues: Array<{ listName?: "browser" | "campaignName" | "city" | "country" | "date" | "deviceCategory" | "itemName" | "language" | "pageLocation" | "sourceMedium" | "other", name?: string }> };

    /** Whether to return all results or only up to a given limit */
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

    /** Default: {} */
    readonly additionalFields?: { currencyCode?: string, dimensionFiltersUI?: { filterExpressions: { filterExpressionType?: "andGroup" | "orGroup", expression?: { stringFilter: Array<{ listName?: "browser" | "campaignName" | "city" | "country" | "date" | "deviceCategory" | "itemName" | "language" | "pageLocation" | "sourceMedium" | "other", name?: string, value?: string, caseSensitive?: boolean, matchType?: "BEGINS_WITH" | "CONTAINS" | "ENDS_WITH" | "EXACT" | "FULL_REGEXP" | "PARTIAL_REGEXP" }>, inListFilter: Array<{ listName?: "browser" | "campaignName" | "city" | "country" | "date" | "deviceCategory" | "itemName" | "language" | "pageLocation" | "sourceMedium" | "other", name?: string, values?: string, caseSensitive?: boolean }>, numericFilter: Array<{ listName?: "browser" | "campaignName" | "city" | "country" | "date" | "deviceCategory" | "itemName" | "language" | "pageLocation" | "sourceMedium" | "other", name?: string, valueType?: "doubleValue" | "int64Value", value?: string, operation?: "EQUAL" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL" | "LESS_THAN" | "LESS_THAN_OR_EQUAL" }> } } }, metricAggregations?: ("MAXIMUM" | "MINIMUM" | "TOTAL")[], metricsFiltersUI?: { filterExpressions: { filterExpressionType?: "andGroup" | "orGroup", expression?: { betweenFilter: Array<{ listName?: "active1DayUsers" | "active28DayUsers" | "active7DayUsers" | "checkouts" | "eventCount" | "screenPageViews" | "userEngagementDuration" | "sessions" | "sessionsPerUser" | "totalUsers" | "other" | "custom", name?: string, valueType?: "doubleValue" | "int64Value", fromValue?: string, toValue?: string }>, numericFilter: Array<{ listName?: "active1DayUsers" | "active28DayUsers" | "active7DayUsers" | "checkouts" | "eventCount" | "screenPageViews" | "userEngagementDuration" | "sessions" | "sessionsPerUser" | "totalUsers" | "other" | "custom", name?: string, valueType?: "doubleValue" | "int64Value", value?: string, operation?: "EQUAL" | "GREATER_THAN" | "GREATER_THAN_OR_EQUAL" | "LESS_THAN" | "LESS_THAN_OR_EQUAL" }> } } }, keepEmptyRows?: boolean, orderByUI?: { metricOrderBy: Array<{ desc?: boolean, metricName?: string }>, dimmensionOrderBy: Array<{ desc?: boolean, dimensionName?: string, orderType?: "ALPHANUMERIC" | "CASE_INSENSITIVE_ALPHANUMERIC" | "NUMERIC" | "ORDER_TYPE_UNSPECIFIED" }> }, returnPropertyQuota?: boolean } | { dimensionFiltersUi?: { filterValues: Array<{ listName?: "ga:browser" | "ga:campaign" | "ga:city" | "ga:country" | "ga:date" | "ga:deviceCategory" | "ga:productName" | "ga:language" | "ga:pagePath" | "ga:sourceMedium" | "other", name?: string, operator?: "BEGINS_WITH" | "ENDS_WITH" | "NUMERIC_EQUAL" | "EXACT" | "NUMERIC_GREATER_THAN" | "NUMERIC_LESS_THAN" | "PARTIAL" | "REGEXP", expressions?: string }> }, hideTotals?: boolean, hideValueRanges?: boolean, includeEmptyRows?: boolean, useResourceQuotas?: boolean } | { activityTypes?: ("ECOMMERCE" | "EVENT" | "GOAL" | "PAGEVIEW" | "SCREENVIEW")[] };

    /**
     * The View of Google Analytics
     * Default: {"mode":"list","value":""}
     */
    readonly viewId?: {
	value: string,
	mode: "list" | "url" | "id",
} | string;

    /**
     * Metrics in the request
     * Default: {"metricValues":[{"listName":"ga:users"}]}
     * Type options: {"multipleValues":true}
     */
    readonly metricsUA?: { metricValues: Array<{ listName?: "ga:productCheckouts" | "ga:totalEvents" | "ga:pageviews" | "ga:sessionDuration" | "ga:sessions" | "ga:sessionsPerUser" | "ga:users" | "other" | "custom", name?: string, expression?: string, formattingType?: "CURRENCY" | "FLOAT" | "INTEGER" | "PERCENT" | "TIME" }> };

    /**
     * Dimensions are attributes of your data. For example, the dimension ga:city indicates the city, for example, "Paris" or "New York", from which a session originates.
     * Default: {"dimensionValues":[{"listName":"ga:date"}]}
     * Type options: {"multipleValues":true}
     */
    readonly dimensionsUA?: { dimensionValues: Array<{ listName?: "ga:browser" | "ga:campaign" | "ga:city" | "ga:country" | "ga:date" | "ga:deviceCategory" | "ga:productName" | "ga:language" | "ga:pagePath" | "ga:sourceMedium" | "other", name?: string }> };

    /** ID of a user */
    readonly userId?: string;

}
