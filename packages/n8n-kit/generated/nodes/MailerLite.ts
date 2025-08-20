// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/MailerLite/MailerLite.node.js' node

export const name = "mailerLite" as const;
export const description = "Consume Mailer Lite API" as const;
export const version = 1 as const;
export const defaults = {"name":"MailerLite"} as const;
export const credentials = [{"name":"mailerLiteApi","required":true}] as const

/**
 * Consume Mailer Lite API
 */
export interface MailerLiteNodeParameters {

    /**
     * Default: "subscriber"
     */
    readonly resource?: "subscriber";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "get" | "getAll" | "update";

    /**
     * Email of new subscriber
     */
    readonly email?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "confirmation_timestamp"?: string, "confirmation_ip"?: string, "customFieldsUi"?: { "customFieldsValues": any }, "name"?: string, "resubscribe"?: boolean, "signup_ip"?: string, "signup_timestamp"?: string, "type"?: "active" | "unsubscribed" | "unconfirmed" };

    /**
     * Email of subscriber
     */
    readonly subscriberId?: string;

    /**
     * Default: {}
     */
    readonly updateFields?: { "customFieldsUi"?: { "customFieldsValues": any }, "name"?: string, "resend_autoresponders"?: boolean, "type"?: "active" | "unsubscribed" | "unconfirmed" };

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly filters?: { "type"?: "active" | "unsubscribed" | "unconfirmed" };


}

