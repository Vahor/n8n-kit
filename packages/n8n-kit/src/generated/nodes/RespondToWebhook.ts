// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/RespondToWebhook/RespondToWebhook.node.ts' node

export const description = "Returns data for Webhook" as const;
export const type = "n8n-nodes-base.respondToWebhook" as const;
export const version = 1.5 as const;
export const credentials = [{"name":"jwtAuth","required":true,"displayOptions":{"show":{"respondWith":["jwt"]}}}] as const;

/**
 * Returns data for Webhook
 */
export interface RespondToWebhookNodeParameters {

    /**
     * Whether to provide an additional output branch with the response sent to the webhook
     */
    readonly enableResponseOutput?: boolean;

    readonly generalNotice?: string;

    /**
     * The data that should be returned
     * Default: "firstIncomingItem"
     */
    readonly respondWith?: "allIncomingItems" | "binary" | "firstIncomingItem" | "json" | "jwt" | "noData" | "redirect" | "text";

    readonly credentials?: any;

    readonly webhookNotice?: string;

    /**
     * The URL to redirect to
     */
    readonly redirectURL?: string;

    /**
     * The HTTP response JSON data
     * Default: "{\n  \"myField\": \"value\"\n}"
     * Type options: {"rows":4}
     */
    readonly responseBody?: string;

    /**
     * The payload to include in the JWT token
     * Default: "{\n  \"myField\": \"value\"\n}"
     * Type options: {"rows":4}
     */
    readonly payload?: string;

    /**
     * Default: "automatically"
     */
    readonly responseDataSource?: "automatically" | "set";

    /**
     * The name of the node input field with the binary data
     * Default: "data"
     */
    readonly inputFieldName?: string;

    readonly contentTypeNotice?: string;

    /**
     * Default: {}
     */
    readonly options?: { "responseCode"?: number, "responseHeaders"?: { "entries": any }, "responseKey"?: string, "enableStreaming"?: boolean };


}

