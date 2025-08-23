// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/OAuth1Api.credentials.ts' credentials

export const name = "oAuth1Api" as const;

/**
 * displayName: OAuth1 API
 * documentationUrl: httpRequest
 */
export interface OAuth1ApiCredentials {
    readonly "authUrl": string;

    readonly "accessTokenUrl": string;

    /**
     * Type options: {"password":true}
     */
    readonly "consumerKey": string;

    /**
     * Type options: {"password":true}
     */
    readonly "consumerSecret": string;

    readonly "requestTokenUrl": string;

    /**
     * Default: "HMAC-SHA1"
     */
    readonly "signatureMethod": "HMAC-SHA1" | "HMAC-SHA256" | "HMAC-SHA512";

    readonly __name: "oAuth1Api";
}
