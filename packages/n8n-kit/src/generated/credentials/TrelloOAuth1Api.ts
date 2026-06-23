// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/TrelloOAuth1Api.credentials.ts' credentials

export const name = "trelloOAuth1Api" as const;

/**
 * displayName: Trello OAuth1 API
 * documentationUrl: trello
 */
export interface TrelloOAuth1ApiCredentials {
    /** Default: "https://trello.com/1/OAuthGetRequestToken" */
    readonly "requestTokenUrl"?: unknown;

    /** Default: "https://trello.com/1/OAuthAuthorizeToken?scope=read,write,account&expiration=never&name=n8n" */
    readonly "authUrl"?: unknown;

    /** Default: "https://trello.com/1/OAuthGetAccessToken" */
    readonly "accessTokenUrl"?: unknown;

    /** Default: "HMAC-SHA1" */
    readonly "signatureMethod"?: unknown;

    readonly __name: "trelloOAuth1Api";
}
