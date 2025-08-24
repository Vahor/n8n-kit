// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/TwitterOAuth1Api.credentials.ts' credentials

export const name = "twitterOAuth1Api" as const;

/**
 * displayName: X OAuth API
 * documentationUrl: twitter
 */
export interface TwitterOAuth1ApiCredentials {
    /** Default: "https://api.twitter.com/oauth/request_token" */
    readonly "requestTokenUrl"?: any;

    /** Default: "https://api.twitter.com/oauth/authorize" */
    readonly "authUrl"?: any;

    /** Default: "https://api.twitter.com/oauth/access_token" */
    readonly "accessTokenUrl"?: any;

    /** Default: "HMAC-SHA1" */
    readonly "signatureMethod"?: any;

    readonly "apiPermissions"?: string;

    readonly __name: "twitterOAuth1Api";
}
