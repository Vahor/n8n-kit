// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GitPassword.credentials.ts' credentials

export const name = "gitPassword" as const;

/**
 * displayName: Git
 * documentationUrl: git
 */
export interface GitPasswordCredentials {

    /**
     * The username to authenticate with
     */
    readonly "username"?: string;

    /**
     * The password to use in combination with the user
     * Type options: {"password":true}
     */
    readonly "password"?: string;

    readonly __name: "gitPassword";

}
