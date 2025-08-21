// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/RedditOAuth2Api.credentials.ts' credentials

export const name = "redditOAuth2Api" as const;

/**
 * displayName: Reddit OAuth2 API
 * documentationUrl: reddit
 */
export interface RedditOAuth2ApiCredentials {

    /**
     * Default: "authorizationCode"
     */
    readonly "grantType"?: any;

    /**
     * Default: "response_type=code"
     */
    readonly "authQueryParameters"?: any;

    /**
     * Default: "grant_type=authorization_code"
     */
    readonly "authQueryParameters"?: any;

    /**
     * Default: "duration=permanent"
     */
    readonly "authQueryParameters"?: any;

    /**
     * Default: "https://www.reddit.com/api/v1/authorize"
     */
    readonly "authUrl"?: any;

    /**
     * Default: "https://www.reddit.com/api/v1/access_token"
     */
    readonly "accessTokenUrl"?: any;

    /**
     * Default: "identity edit history mysubreddits read save submit"
     */
    readonly "scope"?: any;

    /**
     * Default: "header"
     */
    readonly "authentication"?: any;

    readonly __name: "redditOAuth2Api";


}

