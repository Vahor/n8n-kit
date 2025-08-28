// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/ClickUpOAuth2Api.credentials.ts' credentials

export const name = "clickUpOAuth2Api" as const;

/**
 * displayName: ClickUp OAuth2 API
 * documentationUrl: clickUp
 */
export interface ClickUpOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://app.clickup.com/api" */
    readonly "authUrl": unknown;

    /** Default: "https://api.clickup.com/api/v2/oauth/token" */
    readonly "accessTokenUrl": unknown;

    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly __name: "clickUpOAuth2Api";
}
