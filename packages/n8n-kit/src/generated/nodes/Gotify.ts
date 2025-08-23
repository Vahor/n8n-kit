// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Gotify/Gotify.node.ts' node

export const description = "Consume Gotify API" as const;
export const type = "n8n-nodes-base.gotify" as const;
export const version = 1 as const;
export const credentials = [{"name":"gotifyApi","required":true}] as const;

/**
 * Consume Gotify API
 */
export interface GotifyNodeParameters {

    /**
     * Default: "message"
     */
    readonly resource?: "message";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "getAll";

    /**
     * The message to send, If using Markdown add the Content Type option
     */
    readonly message?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "priority"?: number, "title"?: string };

    /**
     * Default: {}
     */
    readonly options?: { "contentType"?: "text/plain" | "text/markdown" };

    readonly messageId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 20
     * Type options: {"minValue":1}
     */
    readonly limit?: number;


}

