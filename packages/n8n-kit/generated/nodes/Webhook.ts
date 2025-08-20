// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Webhook/Webhook.node.js' node

export const name = "webhook" as const;
export const description = "Starts the workflow when a webhook is called" as const;
export const version = 1 as const;
export const defaults = {"name":"Webhook"} as const;
export const credentials = [{"name":"httpBasicAuth","required":true,"displayOptions":{"show":{"authentication":["basicAuth"]}}},{"name":"httpHeaderAuth","required":true,"displayOptions":{"show":{"authentication":["headerAuth"]}}}] as const

/**
 * Starts the workflow when a webhook is called
 */
export interface WebhookNodeParameters {

    /**
     * The way to authenticate
     * Default: "none"
     */
    readonly authentication?: "basicAuth" | "headerAuth" | "none";

    /**
     * The HTTP method to listen to
     * Default: "GET"
     */
    readonly httpMethod?: "DELETE" | "GET" | "HEAD" | "PATCH" | "POST" | "PUT";

    /**
     * The path to listen to
     */
    readonly path: string;

    /**
     * When and how to respond to the webhook
     * Default: "onReceived"
     */
    readonly responseMode?: "onReceived" | "lastNode" | "responseNode";

    /**
     */
    readonly webhookNotice?: string;

    /**
     * The HTTP Response code to return
     * Default: 200
     * Type options: {"minValue":100,"maxValue":599}
     */
    readonly responseCode?: number;

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
     * Default: {}
     */
    readonly options?: { "binaryData"?: boolean, "binaryPropertyName": string, "ignoreBots"?: boolean, "noResponseBody"?: boolean, "rawBody"?: boolean, "responseData"?: string, "responseContentType"?: string, "responseHeaders"?: { "entries": any }, "responsePropertyName"?: string };


}

