// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GithubApi.credentials.ts' credentials

export const name = "githubApi" as const;

/**
 * displayName: GitHub API
 * documentationUrl: github
 */
export interface GithubApiNodeParameters {

    /**
     * The server to connect to. Only has to be set if Github Enterprise is used.
     * Default: "https://api.github.com"
     */
    readonly server?: string;

    /**
     */
    readonly user?: string;

    /**
     * Type options: {"password":true}
     */
    readonly accessToken?: string;


}

