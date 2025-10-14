// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GoToWebinarOAuth2Api.credentials.ts' credentials

export const name = "goToWebinarOAuth2Api" as const;

/**
 * displayName: GoToWebinar OAuth2 API
 * documentationUrl: gotowebinar
 */
export interface GoToWebinarOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://api.getgo.com/oauth/v2/authorize" */
    readonly "authUrl"?: unknown;

    /** Default: "https://api.getgo.com/oauth/v2/token" */
    readonly "accessTokenUrl"?: unknown;

    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "header" */
    readonly "authentication"?: unknown;

    readonly __name: "goToWebinarOAuth2Api";
}
