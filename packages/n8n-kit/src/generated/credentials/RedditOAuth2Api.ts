// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/RedditOAuth2Api.credentials.ts' credentials

export const name = "redditOAuth2Api" as const;

/**
 * displayName: Reddit OAuth2 API
 * documentationUrl: reddit
 */
export interface RedditOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "response_type=code" */
    readonly "authQueryParameters"?: unknown;

    /** Default: "https://www.reddit.com/api/v1/authorize" */
    readonly "authUrl"?: unknown;

    /** Default: "https://www.reddit.com/api/v1/access_token" */
    readonly "accessTokenUrl"?: unknown;

    /** Default: "identity edit history mysubreddits read save submit" */
    readonly "scope"?: unknown;

    /** Default: "header" */
    readonly "authentication"?: unknown;

    readonly __name: "redditOAuth2Api";
}
