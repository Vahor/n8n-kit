// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GithubAppApi.credentials.ts' credentials

export const name = "githubAppApi" as const;

/**
 * displayName: GitHub App API
 * documentationUrl: github
 */
export interface GithubAppApiCredentials {
    /**
     * The server to connect to. Only has to be set if Github Enterprise is used.
     * Default: "https://api.github.com"
     */
    readonly "server"?: string;

    readonly "appId": string;

    readonly "installationId": string;

    /**
     * PEM private key from the GitHub App
     * Type options: {"password":true}
     */
    readonly "privateKey": string;

    /** Type options: {"expirable":true} */
    readonly "accessToken"?: unknown;

    readonly __name: "githubAppApi";
}
