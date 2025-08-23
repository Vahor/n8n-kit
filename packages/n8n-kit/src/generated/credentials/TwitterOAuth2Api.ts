// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/TwitterOAuth2Api.credentials.ts' credentials

export const name = "twitterOAuth2Api" as const;

/**
 * displayName: X OAuth2 API
 * documentationUrl: twitter
 */
export interface TwitterOAuth2ApiCredentials {
    readonly "apiPermissions"?: string;

    /**
     * Default: "pkce"
     */
    readonly "grantType"?: any;

    /**
     * Default: "https://twitter.com/i/oauth2/authorize"
     */
    readonly "authUrl"?: any;

    /**
     * Default: "https://api.twitter.com/2/oauth2/token"
     */
    readonly "accessTokenUrl"?: any;

    /**
     * Default: "tweet.read users.read tweet.write tweet.moderate.write users.read follows.read follows.write offline.access like.read like.write dm.write dm.read list.read list.write"
     */
    readonly "scope"?: any;

    readonly "authQueryParameters"?: any;

    /**
     * Default: "header"
     */
    readonly "authentication"?: any;

    readonly __name: "twitterOAuth2Api";
}
