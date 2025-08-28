// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/DriftOAuth2Api.credentials.ts' credentials

export const name = "driftOAuth2Api" as const;

/**
 * displayName: Drift OAuth2 API
 * documentationUrl: drift
 */
export interface DriftOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://dev.drift.com/authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://driftapi.com/oauth2/token" */
    readonly "accessTokenUrl": unknown;

    readonly "authQueryParameters"?: unknown;

    readonly "scope"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly __name: "driftOAuth2Api";
}
