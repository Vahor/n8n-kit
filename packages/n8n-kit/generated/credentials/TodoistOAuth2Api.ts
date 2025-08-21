// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/TodoistOAuth2Api.credentials.ts' credentials

export const name = "todoistOAuth2Api" as const;

/**
 * displayName: Todoist OAuth2 API
 * documentationUrl: todoist
 */
export interface TodoistOAuth2ApiNodeParameters {

    /**
     * Default: "authorizationCode"
     */
    readonly grantType?: any;

    /**
     * Default: "https://todoist.com/oauth/authorize"
     */
    readonly authUrl: any;

    /**
     * Default: "https://todoist.com/oauth/access_token"
     */
    readonly accessTokenUrl: any;

    /**
     * Default: "data:read_write,data:delete"
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

