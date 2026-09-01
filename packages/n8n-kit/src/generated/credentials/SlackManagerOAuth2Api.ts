// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/SlackManagerOAuth2Api.credentials.ts' credentials

export const name = "slackManagerOAuth2Api" as const;

/**
 * displayName: Slack Manager OAuth2 API
 * documentationUrl: slack
 */
export interface SlackManagerOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://slack.com/oauth/v2/authorize" */
    readonly "authUrl"?: unknown;

    /** Default: "https://slack.com/api/oauth.v2.access" */
    readonly "accessTokenUrl"?: unknown;

    readonly "scope"?: unknown;

    /** Default: "={{\"user_scope=app_configurations:read app_configurations:write managed_apps:install\"}}" */
    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    /** Default: "none" */
    readonly "allowedHttpRequestDomains"?: unknown;

    readonly __name: "slackManagerOAuth2Api";
}
