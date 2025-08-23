// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/MailerLite/v2/MailerLiteV2.node.ts' node

export const name = "mailerLite" as const;
export const description = "Consume Mailer Lite API" as const;
export const version = 2 as const;
export const credentials = [{"name":"mailerLiteApi","required":true}] as const;

/**
 * Consume Mailer Lite API
 */
export interface MailerLiteV2NodeParameters {

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
     * Email of subscriber
     */
    readonly subscriberId?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "customFieldsUi"?: { "customFieldsValues": any }, "status"?: "active" | "bounced" | "junk" | "unconfirmed" | "unsubscribed", "subscribed_at"?: string, "ip_address"?: string, "opted_in_at"?: string, "optin_ip"?: string, "unsubscribed_at"?: string };

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
    readonly filters?: { "status"?: "active" | "bounced" | "junk" | "unconfirmed" | "unsubscribed" };


}

