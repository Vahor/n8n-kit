// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/Ftp.credentials.ts' credentials

export const name = "ftp" as const;

/**
 * displayName: FTP
 * documentationUrl: ftp
 */
export interface FtpCredentials {
    readonly "host": string;

    /**
     * Default: 21
     */
    readonly "port": number;

    readonly "username"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "password"?: string;

    readonly __name: "ftp";
}
