// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MailgunApi.credentials.ts' credentials

export const name = "mailgunApi" as const;

/**
 * displayName: Mailgun API
 * documentationUrl: mailgun
 */
export interface MailgunApiCredentials {
    /**
     * The configured mailgun API domain
     * Default: "api.mailgun.net"
     */
    readonly "apiDomain"?: "api.eu.mailgun.net" | "api.mailgun.net";

    readonly "emailDomain"?: string;

    /** Type options: {"password":true} */
    readonly "apiKey"?: string;

    readonly __name: "mailgunApi";
}
