// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/SshPrivateKey.credentials.ts' credentials

export const name = "sshPrivateKey" as const;

/**
 * displayName: SSH Private Key
 * documentationUrl: ssh
 */
export interface SshPrivateKeyCredentials {

    /**
     */
    readonly "host": string;

    /**
     * Default: 22
     */
    readonly "port": number;

    /**
     */
    readonly "username"?: string;

    /**
     * Type options: {"rows":4,"password":true}
     */
    readonly "privateKey"?: string;

    /**
     * Passphase used to create the key, if no passphase was used leave empty
     * Type options: {"password":true}
     */
    readonly "passphrase"?: string;

    readonly __name: "sshPrivateKey";


}

