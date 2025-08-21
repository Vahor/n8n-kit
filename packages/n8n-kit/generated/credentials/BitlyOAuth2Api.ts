// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/BitlyOAuth2Api.credentials.ts' credentials

export const name = "bitlyOAuth2Api" as const;

/**
 * displayName: Bitly OAuth2 API
 * documentationUrl: bitly
 */
export interface BitlyOAuth2ApiNodeParameters {

    /**
     * Default: "authorizationCode"
     */
    readonly grantType?: any;

    /**
     * Default: "https://bitly.com/oauth/authorize"
     */
    readonly authUrl: any;

    /**
     * Default: "https://api-ssl.bitly.com/oauth/access_token"
     */
    readonly accessTokenUrl: any;

    /**
     */
    readonly clientId: string;

    /**
     * Type options: {"password":true}
     */
    readonly clientSecret: string;

    /**
     */
    readonly scope?: any;

    /**
     * For some services additional query parameters have to be set which can be defined here
     */
    readonly authQueryParameters?: any;

    /**
     * Default: "body"
     */
    readonly authentication?: any;


}

