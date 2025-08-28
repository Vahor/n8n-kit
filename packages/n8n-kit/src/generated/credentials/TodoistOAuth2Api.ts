// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/TodoistOAuth2Api.credentials.ts' credentials

export const name = "todoistOAuth2Api" as const;

/**
 * displayName: Todoist OAuth2 API
 * documentationUrl: todoist
 */
export interface TodoistOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://todoist.com/oauth/authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://todoist.com/oauth/access_token" */
    readonly "accessTokenUrl": unknown;

    /** Default: "data:read_write,data:delete" */
    readonly "scope"?: unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly __name: "todoistOAuth2Api";
}
