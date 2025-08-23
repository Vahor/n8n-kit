// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GoToWebinarOAuth2Api.credentials.ts' credentials

export const name = "goToWebinarOAuth2Api" as const;

/**
 * displayName: GoToWebinar OAuth2 API
 * documentationUrl: goToWebinar
 */
export interface GoToWebinarOAuth2ApiCredentials {

    /**
     * Default: "authorizationCode"
     */
    readonly "grantType"?: any;

    /**
     * Default: "https://api.getgo.com/oauth/v2/authorize"
     */
    readonly "authUrl"?: any;

    /**
     * Default: "https://api.getgo.com/oauth/v2/token"
     */
    readonly "accessTokenUrl"?: any;

    /**
     */
    readonly "scope"?: any;

    /**
     */
    readonly "authQueryParameters"?: any;

    /**
     * Default: "header"
     */
    readonly "authentication"?: any;

    readonly __name: "goToWebinarOAuth2Api";

}
