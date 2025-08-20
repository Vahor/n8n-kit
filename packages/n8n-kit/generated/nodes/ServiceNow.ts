// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/ServiceNow/ServiceNow.node.ts' node

export const name = "serviceNow" as const;
export const description = "Consume ServiceNow API" as const;
export const version = 1 as const;
export const defaults = {"name":"ServiceNow"} as const;
export const credentials = [{"name":"serviceNowOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}},{"name":"serviceNowBasicApi","required":true,"displayOptions":{"show":{"authentication":["basicAuth"]}}}] as const

/**
 * Consume ServiceNow API
 */
export interface ServiceNowNodeParameters {

    /**
     * Authentication method to use
     * Default: "oAuth2"
     */
    readonly authentication?: "basicAuth" | "oAuth2";

    /**
     * Default: "user"
     */
    readonly resource?: "attachment" | "businessService" | "configurationItems" | "department" | "dictionary" | "incident" | "tableRecord" | "user" | "userGroup" | "userRole";


}

