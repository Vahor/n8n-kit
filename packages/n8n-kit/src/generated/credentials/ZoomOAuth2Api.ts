// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/ZoomOAuth2Api.credentials.ts' credentials

export const name = "zoomOAuth2Api" as const;

/**
 * displayName: Zoom OAuth2 API
 * documentationUrl: zoom
 */
export interface ZoomOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://zoom.us/oauth/authorize" */
    readonly "authUrl"?: unknown;

    /** Default: "https://zoom.us/oauth/token" */
    readonly "accessTokenUrl"?: unknown;

    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "header" */
    readonly "authentication"?: unknown;

    readonly __name: "zoomOAuth2Api";
}
