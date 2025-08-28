// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GitlabOAuth2Api.credentials.ts' credentials

export const name = "gitlabOAuth2Api" as const;

/**
 * displayName: GitLab OAuth2 API
 * documentationUrl: gitlab
 */
export interface GitlabOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://gitlab.com" */
    readonly "server"?: string;

    /** Default: "={{$self[\"server\"]}}/oauth/authorize" */
    readonly "authUrl": unknown;

    /** Default: "={{$self[\"server\"]}}/oauth/token" */
    readonly "accessTokenUrl": unknown;

    /** Default: "api" */
    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly __name: "gitlabOAuth2Api";
}
