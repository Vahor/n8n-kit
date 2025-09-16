// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/SlackOAuth2Api.credentials.ts' credentials

export const name = "slackOAuth2Api" as const;

/**
 * displayName: Slack OAuth2 API
 * documentationUrl: slack
 */
export interface SlackOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://slack.com/oauth/v2/authorize" */
    readonly "authUrl"?: unknown;

    /** Default: "https://slack.com/api/oauth.v2.access" */
    readonly "accessTokenUrl"?: unknown;

    /** Default: "chat:write" */
    readonly "scope"?: unknown;

    /** Default: "user_scope=channels:read channels:write chat:write files:read files:write groups:read im:read mpim:read reactions:read reactions:write stars:read stars:write usergroups:write usergroups:read users.profile:read users.profile:write users:read search:read" */
    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly "notice"?: string;

    readonly __name: "slackOAuth2Api";
}
