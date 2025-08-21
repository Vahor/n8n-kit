// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/BoxOAuth2Api.credentials.ts' credentials

export const name = "boxOAuth2Api" as const;

/**
 * displayName: Box OAuth2 API
 * documentationUrl: box
 */
export interface BoxOAuth2ApiNodeParameters {

    /**
     * Default: "authorizationCode"
     */
    readonly grantType?: any;

    /**
     * Default: "https://account.box.com/api/oauth2/authorize"
     */
    readonly authUrl: any;

    /**
     * Default: "https://api.box.com/oauth2/token"
     */
    readonly accessTokenUrl: any;

    /**
     */
    readonly scope?: any;

    /**
     */
    readonly authQueryParameters?: any;

    /**
     * Default: "body"
     */
    readonly authentication?: any;


}

