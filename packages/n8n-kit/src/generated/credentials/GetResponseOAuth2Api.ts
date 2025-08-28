// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GetResponseOAuth2Api.credentials.ts' credentials

export const name = "getResponseOAuth2Api" as const;

/**
 * displayName: GetResponse OAuth2 API
 * documentationUrl: getresponse
 */
export interface GetResponseOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://app.getresponse.com/oauth2_authorize.html" */
    readonly "authUrl": unknown;

    /** Default: "https://api.getresponse.com/v3/token" */
    readonly "accessTokenUrl": unknown;

    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "header" */
    readonly "authentication"?: unknown;

    readonly __name: "getResponseOAuth2Api";
}
