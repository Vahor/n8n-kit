// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Google/BigQuery/v2/GoogleBigQueryV2.node.ts' node

export const name = "googleBigQuery" as const;
export const description = "Consume Google BigQuery API" as const;
export const version = 2.1 as const;
export const defaults = {"name":"Google BigQuery"} as const;
export const credentials = [{"name":"googleApi","required":true,"displayOptions":{"show":{"authentication":["serviceAccount"]}}},{"name":"googleBigQueryOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const

/**
 * Consume Google BigQuery API
 */
export interface GoogleBigQueryV2NodeParameters {

    /**
     * Default: "oAuth2"
     */
    readonly authentication?: "oAuth2" | "serviceAccount";

    /**
     * Default: "database"
     */
    readonly resource?: any;

    /**
     * Default: "executeQuery"
     */
    readonly operation?: "executeQuery" | "insert";


}

