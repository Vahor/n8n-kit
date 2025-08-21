// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/ClickUpOAuth2Api.credentials.ts' credentials

export const name = "clickUpOAuth2Api" as const;

/**
 * displayName: ClickUp OAuth2 API
 * documentationUrl: clickUp
 */
export interface ClickUpOAuth2ApiNodeParameters {

    /**
     * Default: "authorizationCode"
     */
    readonly grantType?: any;

    /**
     * Default: "https://app.clickup.com/api"
     */
    readonly authUrl: any;

    /**
     * Default: "https://api.clickup.com/api/v2/oauth/token"
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

