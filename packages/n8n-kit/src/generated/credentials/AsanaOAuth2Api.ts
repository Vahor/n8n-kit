// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/AsanaOAuth2Api.credentials.ts' credentials

export const name = "asanaOAuth2Api" as const;

/**
 * displayName: Asana OAuth2 API
 * documentationUrl: asana
 */
export interface AsanaOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://app.asana.com/-/oauth_authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://app.asana.com/-/oauth_token" */
    readonly "accessTokenUrl": unknown;

    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly __name: "asanaOAuth2Api";
}
