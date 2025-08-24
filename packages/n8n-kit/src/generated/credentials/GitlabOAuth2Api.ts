// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GitlabOAuth2Api.credentials.ts' credentials

export const name = "gitlabOAuth2Api" as const;

/**
 * displayName: GitLab OAuth2 API
 * documentationUrl: gitlab
 */
export interface GitlabOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: any;

    /** Default: "https://gitlab.com" */
    readonly "server"?: string;

    /** Default: "={{$self[\"server\"]}}/oauth/authorize" */
    readonly "authUrl": any;

    /** Default: "={{$self[\"server\"]}}/oauth/token" */
    readonly "accessTokenUrl": any;

    /** Default: "api" */
    readonly "scope"?: any;

    readonly "authQueryParameters"?: any;

    /** Default: "body" */
    readonly "authentication"?: any;

    readonly __name: "gitlabOAuth2Api";
}
