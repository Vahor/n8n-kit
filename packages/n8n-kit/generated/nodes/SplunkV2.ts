// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Splunk/v2/SplunkV2.node.ts' node

export const name = "splunk" as const;
export const description = "Consume the Splunk Enterprise API" as const;
export const version = 2 as const;
export const defaults = {"name":"Splunk"} as const;
export const credentials = [{"name":"splunkApi","required":true}] as const

/**
 * Consume the Splunk Enterprise API
 */
export interface SplunkV2NodeParameters {

    /**
     * Default: "search"
     */
    readonly resource?: "alert" | "report" | "search" | "user";

    /**
     * Default: "getReport"
     */
    readonly operation?: "getReport" | "getMetrics" | "create" | "deleteReport" | "get" | "getAll" | "create" | "getResult" | "update";


}

