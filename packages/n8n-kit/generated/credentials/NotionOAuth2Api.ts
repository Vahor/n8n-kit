// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/NotionOAuth2Api.credentials.ts' credentials

export const name = "notionOAuth2Api" as const;

/**
 * displayName: Notion OAuth2 API
 * documentationUrl: notion
 */
export interface NotionOAuth2ApiNodeParameters {

    /**
     * Default: "authorizationCode"
     */
    readonly grantType?: any;

    /**
     * Default: "https://api.notion.com/v1/oauth/authorize"
     */
    readonly authUrl: any;

    /**
     * Default: "https://api.notion.com/v1/oauth/token"
     */
    readonly accessTokenUrl: any;

    /**
     */
    readonly scope?: any;

    /**
     */
    readonly authQueryParameters?: any;

    /**
     * Default: "header"
     */
    readonly authentication?: any;


}

