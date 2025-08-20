// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Wait/Wait.node.js' node

export const name = "wait" as const;
export const description = "Wait before continue with execution" as const;
export const version = 1 as const;
export const defaults = {"name":"Wait","color":"#804050"} as const;
export const credentials = [{"name":"httpBasicAuth","required":true,"displayOptions":{"show":{"incomingAuthentication":["basicAuth"]}}},{"name":"httpHeaderAuth","required":true,"displayOptions":{"show":{"incomingAuthentication":["headerAuth"]}}}] as const

/**
 * Wait before continue with execution
 */
export interface WaitNodeParameters {

    /**
     * Determines the waiting mode to use before the workflow continues
     * Default: "timeInterval"
     */
    readonly resume?: "timeInterval" | "specificTime" | "webhook";

    /**
     * If and how incoming resume-webhook-requests to $execution.resumeUrl should be authenticated for additional security
     * Default: "none"
     */
    readonly incomingAuthentication?: "basicAuth" | "headerAuth" | "none";

    /**
     * The date and time to wait for before continuing
     */
    readonly dateTime?: string;

    /**
     * The time to wait
     * Default: 1
     * Type options: {"minValue":0,"numberPrecision":2}
     */
    readonly amount?: number;

    /**
     * The time unit of the Wait Amount value
     * Default: "hours"
     */
    readonly unit?: "seconds" | "minutes" | "hours" | "days";

    /**
     */
    readonly webhookNotice?: string;

    /**
     * The HTTP method of the Webhook call
     * Default: "GET"
     */
    readonly httpMethod?: "DELETE" | "GET" | "HEAD" | "PATCH" | "POST" | "PUT";

    /**
     * The HTTP Response code to return
     * Default: 200
     * Type options: {"minValue":100,"maxValue":599}
     */
    readonly responseCode?: number;

    /**
     * When and how to respond to the webhook
     * Default: "onReceived"
     */
    readonly responseMode?: "onReceived" | "lastNode" | "responseNode";

    /**
     * What data should be returned. If it should return all items as an array or only the first item as object.
     * Default: "firstEntryJson"
     */
    readonly responseData?: "allEntries" | "firstEntryJson" | "firstEntryBinary" | "noData";

    /**
     * Name of the binary property to return
     * Default: "data"
     */
    readonly responseBinaryPropertyName?: string;

    /**
     * If no webhook call is received, the workflow will automatically resume execution after the specified limit type
     */
    readonly limitWaitTime?: boolean;

    /**
     * Sets the condition for the execution to resume. Can be a specified date or after some time.
     * Default: "afterTimeInterval"
     */
    readonly limitType?: "afterTimeInterval" | "atSpecifiedTime";

    /**
     * The time to wait
     * Default: 1
     * Type options: {"minValue":0,"numberPrecision":2}
     */
    readonly resumeAmount?: number;

    /**
     * Unit of the interval value
     * Default: "hours"
     */
    readonly resumeUnit?: "seconds" | "minutes" | "hours" | "days";

    /**
     * Continue execution after the specified date and time
     */
    readonly maxDateAndTime?: string;

    /**
     * Default: {}
     */
    readonly options?: { "binaryData"?: boolean, "binaryPropertyName": string, "ignoreBots"?: boolean, "noResponseBody"?: boolean, "rawBody"?: boolean, "responseData"?: string, "responseContentType"?: string, "responseHeaders"?: { "entries": any }, "responsePropertyName"?: string, "webhookSuffix"?: string };


}

