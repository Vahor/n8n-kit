// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/SlackOAuth2Api.credentials.ts' credentials

export const name = "slackOAuth2Api" as const;

/**
 * displayName: Slack OAuth2 API
 * documentationUrl: slack
 */
export interface SlackOAuth2ApiNodeParameters {

    /**
     * Default: "authorizationCode"
     */
    readonly grantType?: any;

    /**
     * Default: "https://slack.com/oauth/v2/authorize"
     */
    readonly authUrl?: any;

    /**
     * Default: "https://slack.com/api/oauth.v2.access"
     */
    readonly accessTokenUrl?: any;

    /**
     * Default: "chat:write"
     */
    readonly scope?: any;

    /**
     * Default: "user_scope=channels:read channels:write chat:write files:read files:write groups:read im:read mpim:read reactions:read reactions:write stars:read stars:write usergroups:write usergroups:read users.profile:read users.profile:write users:read"
     */
    readonly authQueryParameters?: any;

    /**
     * Default: "body"
     */
    readonly authentication?: any;

    /**
     */
    readonly notice?: string;


}

