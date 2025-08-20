// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Webhook/Webhook.node.ts' node

export const name = "webhook" as const;
export const description = "Starts the workflow when a webhook is called" as const;
export const version = 2.1 as const;
export const defaults = {"name":"Webhook"} as const;
export const credentials = "credentialsProperty(this.authPropertyName)" as const

/**
 * Starts the workflow when a webhook is called
 */
export interface WebhookNodeParameters {

    /**
     * Whether to allow the webhook to listen for multiple HTTP methods
     */
    readonly multipleMethods?: boolean;

    /**
     * The HTTP methods to listen to
     * Default: ["GET","POST"]
     */
    readonly httpMethod?: ("DELETE" | "GET" | "HEAD" | "PATCH" | "POST" | "PUT")[];

    /**
     * The path to listen to, dynamic values could be specified by using ':', e.g. 'your-path/:dynamic-value'. If dynamic values are set 'webhookId' would be prepended to path.
     */
    readonly path?: string;

    /**
     */
    readonly webhookNotice?: string;

    /**
     */
    readonly webhookStreamingNotice?: string;

    /**
     */
    readonly contentTypeNotice?: string;


}

