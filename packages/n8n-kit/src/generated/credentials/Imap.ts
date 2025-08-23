// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/Imap.credentials.ts' credentials

export const name = "imap" as const;

/**
 * displayName: IMAP
 * documentationUrl: imap
 */
export interface ImapCredentials {

    /**
     */
    readonly "user"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "password"?: string;

    /**
     */
    readonly "host"?: string;

    /**
     * Default: 993
     */
    readonly "port"?: number;

    /**
     * Default: true
     */
    readonly "secure"?: boolean;

    /**
     * Whether to connect even if SSL certificate validation is not possible
     */
    readonly "allowUnauthorizedCerts"?: boolean;

    readonly __name: "imap";

}
