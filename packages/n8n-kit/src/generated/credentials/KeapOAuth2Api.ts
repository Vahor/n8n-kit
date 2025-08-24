// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/KeapOAuth2Api.credentials.ts' credentials

export const name = "keapOAuth2Api" as const;

/**
 * displayName: Keap OAuth2 API
 * documentationUrl: keap
 */
export interface KeapOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: any;

    /** Default: "https://signin.infusionsoft.com/app/oauth/authorize" */
    readonly "authUrl"?: any;

    /** Default: "https://api.infusionsoft.com/token" */
    readonly "accessTokenUrl"?: any;

    /** Default: "full" */
    readonly "scope"?: any;

    readonly "authQueryParameters"?: any;

    /** Default: "body" */
    readonly "authentication"?: any;

    readonly __name: "keapOAuth2Api";
}
