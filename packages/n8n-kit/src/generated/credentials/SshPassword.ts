// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/SshPassword.credentials.ts' credentials

export const name = "sshPassword" as const;

/**
 * displayName: SSH Password
 * documentationUrl: ssh
 */
export interface SshPasswordCredentials {
    readonly "host": string;

    /**
     * Default: 22
     */
    readonly "port": number;

    readonly "username"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "password"?: string;

    readonly __name: "sshPassword";
}
