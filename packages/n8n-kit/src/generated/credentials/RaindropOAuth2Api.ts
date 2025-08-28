// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/RaindropOAuth2Api.credentials.ts' credentials

export const name = "raindropOAuth2Api" as const;

/**
 * displayName: Raindrop OAuth2 API
 * documentationUrl: raindrop
 */
export interface RaindropOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://raindrop.io/oauth/authorize" */
    readonly "authUrl"?: unknown;

    /** Default: "https://api.raindrop.io/v1/oauth/access_token" */
    readonly "accessTokenUrl"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly "scope"?: unknown;

    readonly __name: "raindropOAuth2Api";
}
