// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/RespondToWebhook/RespondToWebhook.node.js' node

export const name = "respondToWebhook" as const;
export const description = "Returns data for Webhook" as const;
export const version = 1 as const;
export const defaults = {"name":"Respond to Webhook"} as const;
export const credentials = [] as const

/**
 * Returns data for Webhook
 */
export interface RespondToWebhookNodeParameters {

    /**
     * The data that should be returned
     * Default: "firstIncomingItem"
     */
    readonly respondWith?: "binary" | "firstIncomingItem" | "json" | "noData" | "text";

    /**
     */
    readonly webhookNotice?: string;

    /**
     * The HTTP Response JSON data
     */
    readonly responseBody?: string;

    /**
     * Default: "automatically"
     */
    readonly responseDataSource?: "automatically" | "set";

    /**
     * The name of the node input field with the binary data
     * Default: "data"
     */
    readonly inputFieldName?: string;

    /**
     * Default: {}
     */
    readonly options?: { "responseCode"?: number, "responseHeaders"?: { "entries": any } };


}

