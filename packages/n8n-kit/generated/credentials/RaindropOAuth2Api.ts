// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/RaindropOAuth2Api.credentials.ts' credentials

export const name = "raindropOAuth2Api" as const;

/**
 * displayName: Raindrop OAuth2 API
 * documentationUrl: raindrop
 */
export interface RaindropOAuth2ApiNodeParameters {

    /**
     * Default: "authorizationCode"
     */
    readonly grantType?: any;

    /**
     * Default: "https://raindrop.io/oauth/authorize"
     */
    readonly authUrl?: any;

    /**
     * Default: "https://api.raindrop.io/v1/oauth/access_token"
     */
    readonly accessTokenUrl?: any;

    /**
     */
    readonly authQueryParameters?: any;

    /**
     * Default: "body"
     */
    readonly authentication?: any;

    /**
     */
    readonly scope?: any;


}

