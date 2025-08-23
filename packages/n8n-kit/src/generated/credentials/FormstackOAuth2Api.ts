// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/FormstackOAuth2Api.credentials.ts' credentials

export const name = "formstackOAuth2Api" as const;

/**
 * displayName: Formstack OAuth2 API
 * documentationUrl: formstackTrigger
 */
export interface FormstackOAuth2ApiCredentials {
    /**
     * Default: "authorizationCode"
     */
    readonly "grantType"?: any;

    /**
     * Default: "https://www.formstack.com/api/v2/oauth2/authorize"
     */
    readonly "authUrl": any;

    /**
     * Default: "https://www.formstack.com/api/v2/oauth2/token"
     */
    readonly "accessTokenUrl": any;

    readonly "scope"?: any;

    readonly "authQueryParameters"?: any;

    /**
     * Default: "header"
     */
    readonly "authentication"?: any;

    readonly __name: "formstackOAuth2Api";
}
