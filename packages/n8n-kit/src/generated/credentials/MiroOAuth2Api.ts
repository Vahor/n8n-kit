// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MiroOAuth2Api.credentials.ts' credentials

export const name = "miroOAuth2Api" as const;

/**
 * displayName: Miro OAuth2 API
 * documentationUrl: miro
 */
export interface MiroOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://miro.com/oauth/authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://api.miro.com/v1/oauth/token" */
    readonly "accessTokenUrl": unknown;

    readonly "scope": unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly __name: "miroOAuth2Api";
}
