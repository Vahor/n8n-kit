// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/SlackOAuth2Api.credentials.ts' credentials

export const name = "slackOAuth2Api" as const;

/**
 * displayName: Slack OAuth2 API
 * documentationUrl: slack
 */
export interface SlackOAuth2ApiCredentials {
    /**
     * The signing secret is used to verify the authenticity of requests sent by Slack.
     * Type options: {"password":true}
     */
    readonly "signatureSecret"?: string;

    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://slack.com/oauth/v2/authorize" */
    readonly "authUrl"?: unknown;

    /** Default: "https://slack.com/api/oauth.v2.access" */
    readonly "accessTokenUrl"?: unknown;

    readonly "scope"?: unknown;

    /** Define custom scopes */
    readonly "customScopes"?: boolean;

    readonly "customScopesNotice"?: string;

    /**
     * Space-separated user-level scopes for your Slack app
     * Default: "channels:read channels:write channels:history chat:write files:read files:write groups:read groups:history im:read im:history mpim:read mpim:history reactions:read reactions:write stars:read stars:write usergroups:write usergroups:read users.profile:read users.profile:write users:read users:read.email search:read"
     */
    readonly "userScope"?: string;

    /** Default: "={{$self[\"customScopes\"] ? \"user_scope=\" + $self[\"userScope\"] : \"user_scope=channels:read channels:write channels:history chat:write files:read files:write groups:read groups:history im:read im:history mpim:read mpim:history reactions:read reactions:write stars:read stars:write usergroups:write usergroups:read users.profile:read users.profile:write users:read users:read.email search:read\"}}" */
    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    readonly "notice"?: string;

    readonly __name: "slackOAuth2Api";
}
