// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/JiraSoftwareCloudOAuth2Api.credentials.ts' credentials

export const name = "jiraSoftwareCloudOAuth2Api" as const;

/**
 * displayName: Jira SW Cloud OAuth2 API
 * documentationUrl: jira
 */
export interface JiraSoftwareCloudOAuth2ApiCredentials {
    readonly "domain": string;

    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://auth.atlassian.com/authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://auth.atlassian.com/oauth/token" */
    readonly "accessTokenUrl": unknown;

    /** Default: "audience=api.atlassian.com&prompt=consent" */
    readonly "authQueryParameters"?: unknown;

    /** Default: "header" */
    readonly "authentication"?: unknown;

    /** Define custom scopes */
    readonly "customScopes"?: boolean;

    readonly "customScopesNotice"?: string;

    /**
     * Scopes that should be enabled
     * Default: "read:jira-user read:jira-work write:jira-work manage:jira-webhook manage:jira-user offline_access"
     */
    readonly "enabledScopes"?: string;

    /** Default: "={{$self[\"customScopes\"] ? $self[\"enabledScopes\"] : \"read:jira-user read:jira-work write:jira-work manage:jira-webhook manage:jira-user offline_access\"}}" */
    readonly "scope"?: unknown;

    readonly __name: "jiraSoftwareCloudOAuth2Api";
}
