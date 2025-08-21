// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/TypeformOAuth2Api.credentials.ts' credentials

export const name = "typeformOAuth2Api" as const;

/**
 * displayName: Typeform OAuth2 API
 * documentationUrl: typeform
 */
export interface TypeformOAuth2ApiNodeParameters {

    /**
     * Default: "authorizationCode"
     */
    readonly grantType?: any;

    /**
     * Default: "https://api.typeform.com/oauth/authorize"
     */
    readonly authUrl: any;

    /**
     * Default: "https://api.typeform.com/oauth/token"
     */
    readonly accessTokenUrl: any;

    /**
     * Default: "webhooks:write webhooks:read forms:read"
     */
    readonly scope?: any;

    /**
     */
    readonly authQueryParameters?: any;

    /**
     * Default: "header"
     */
    readonly authentication?: any;


}

