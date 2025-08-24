// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/ZoomOAuth2Api.credentials.ts' credentials

export const name = "zoomOAuth2Api" as const;

/**
 * displayName: Zoom OAuth2 API
 * documentationUrl: zoom
 */
export interface ZoomOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: any;

    /** Default: "https://zoom.us/oauth/authorize" */
    readonly "authUrl"?: any;

    /** Default: "https://zoom.us/oauth/token" */
    readonly "accessTokenUrl"?: any;

    readonly "scope"?: any;

    readonly "authQueryParameters"?: any;

    /** Default: "header" */
    readonly "authentication"?: any;

    readonly __name: "zoomOAuth2Api";
}
