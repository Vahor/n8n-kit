// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Webhook/Webhook.node.ts' node

export const description = "Starts the workflow when a webhook is called" as const;
export const type = "n8n-nodes-base.webhook" as const;
export const version = 2.1 as const;
export const credentials = [{"name":"httpBasicAuth","required":true,"displayOptions":{"show":{"authentication":["basicAuth"]}}},{"name":"httpHeaderAuth","required":true,"displayOptions":{"show":{"authentication":["headerAuth"]}}},{"name":"jwtAuth","required":true,"displayOptions":{"show":{"authentication":["jwtAuth"]}}}] as const;
export const inputs = {} as const;
export const outputs = {"custom":"custom"} as const;

export interface WebhookNodeParameters {
    /** Whether to allow the webhook to listen for multiple HTTP methods */
    readonly multipleMethods?: boolean;

    /**
     * The HTTP method to listen to
     * Default: "GET"
     */
    readonly httpMethod?: "DELETE" | "GET" | "HEAD" | "PATCH" | "POST" | "PUT" | ("DELETE" | "GET" | "HEAD" | "PATCH" | "POST" | "PUT")[];

    /** The path to listen to, dynamic values could be specified by using ':', e.g. 'your-path/:dynamic-value'. If dynamic values are set 'webhookId' would be prepended to path. */
    readonly path?: string;

    /**
     * The way to authenticate
     * Default: "none"
     */
    readonly authentication?: "basicAuth" | "headerAuth" | "jwtAuth" | "none";

    /**
     * When and how to respond to the webhook
     * Default: "onReceived"
     */
    readonly responseMode?: "onReceived" | "lastNode" | "responseNode" | "onReceived" | "lastNode" | "responseNode" | "streaming";

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

    /** Default: {} */
    readonly options?: { "binaryData"?: boolean, "binaryPropertyName"?: string, "ignoreBots"?: boolean, "ipWhitelist"?: string, "noResponseBody"?: boolean, "responsePropertyName"?: string, "rawBody"?: boolean, "responseCode"?: { "values": any }, "responseContentType"?: string, "responseData"?: string, "responseHeaders"?: { "entries": any } };

}
