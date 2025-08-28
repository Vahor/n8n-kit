// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/BoxOAuth2Api.credentials.ts' credentials

export const name = "boxOAuth2Api" as const;

/**
 * displayName: Box OAuth2 API
 * documentationUrl: box
 */
export interface BoxOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://account.box.com/api/oauth2/authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://api.box.com/oauth2/token" */
    readonly "accessTokenUrl": unknown;

    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly __name: "boxOAuth2Api";
}
