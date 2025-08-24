// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/Smtp.credentials.ts' credentials

export const name = "smtp" as const;

/**
 * displayName: SMTP
 * documentationUrl: sendemail
 */
export interface SmtpCredentials {
    readonly "user"?: string;

    /** Type options: {"password":true} */
    readonly "password"?: string;

    readonly "host"?: string;

    /** Default: 465 */
    readonly "port"?: number;

    /** Default: true */
    readonly "secure"?: boolean;

    readonly "disableStartTls"?: boolean;

    /** The hostname of the client, used for identifying to the server */
    readonly "hostName"?: string;

    readonly __name: "smtp";
}
