// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/TwitterOAuth2Api.credentials.ts' credentials

export const name = "twitterOAuth2Api" as const;

/**
 * displayName: X OAuth2 API
 * documentationUrl: twitter
 */
export interface TwitterOAuth2ApiCredentials {
    readonly "apiPermissions"?: string;

    /** Default: "pkce" */
    readonly "grantType"?: unknown;

    /** Default: "https://twitter.com/i/oauth2/authorize" */
    readonly "authUrl"?: unknown;

    /** Default: "https://api.twitter.com/2/oauth2/token" */
    readonly "accessTokenUrl"?: unknown;

    /** Default: "tweet.read users.read tweet.write tweet.moderate.write users.read follows.read follows.write offline.access like.read like.write dm.write dm.read list.read list.write" */
    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "header" */
    readonly "authentication"?: unknown;

    readonly __name: "twitterOAuth2Api";
}
