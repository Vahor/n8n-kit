// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/NotionOAuth2Api.credentials.ts' credentials

export const name = "notionOAuth2Api" as const;

/**
 * displayName: Notion OAuth2 API
 * documentationUrl: notion
 */
export interface NotionOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://api.notion.com/v1/oauth/authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://api.notion.com/v1/oauth/token" */
    readonly "accessTokenUrl": unknown;

    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "header" */
    readonly "authentication"?: unknown;

    readonly __name: "notionOAuth2Api";
}
