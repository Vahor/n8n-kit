// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/Sftp.credentials.ts' credentials

export const name = "sftp" as const;

/**
 * displayName: SFTP
 * documentationUrl: ftp
 */
export interface SftpCredentials {

    /**
     */
    readonly "host": string;

    /**
     * Default: 22
     */
    readonly "port": number;

    /**
     */
    readonly "username": string;

    /**
     * Type options: {"password":true}
     */
    readonly "password"?: string;

    /**
     * String that contains a private key for either key-based or hostbased user authentication (OpenSSH format)
     * Type options: {"password":true}
     */
    readonly "privateKey"?: string;

    /**
     * For an encrypted private key, this is the passphrase used to decrypt it
     * Type options: {"password":true}
     */
    readonly "passphrase"?: string;

    readonly __name: "sftp";

}
