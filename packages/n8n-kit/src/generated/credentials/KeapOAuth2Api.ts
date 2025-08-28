// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/KeapOAuth2Api.credentials.ts' credentials

export const name = "keapOAuth2Api" as const;

/**
 * displayName: Keap OAuth2 API
 * documentationUrl: keap
 */
export interface KeapOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://signin.infusionsoft.com/app/oauth/authorize" */
    readonly "authUrl"?: unknown;

    /** Default: "https://api.infusionsoft.com/token" */
    readonly "accessTokenUrl"?: unknown;

    /** Default: "full" */
    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly __name: "keapOAuth2Api";
}
