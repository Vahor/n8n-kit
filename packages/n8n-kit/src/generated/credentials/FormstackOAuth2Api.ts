// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/FormstackOAuth2Api.credentials.ts' credentials

export const name = "formstackOAuth2Api" as const;

/**
 * displayName: Formstack OAuth2 API
 * documentationUrl: formstacktrigger
 */
export interface FormstackOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://www.formstack.com/api/v2/oauth2/authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://www.formstack.com/api/v2/oauth2/token" */
    readonly "accessTokenUrl": unknown;

    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "header" */
    readonly "authentication"?: unknown;

    readonly __name: "formstackOAuth2Api";
}
