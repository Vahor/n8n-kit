// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/JiraSoftwareCloudOAuth2Api.credentials.ts' credentials

export const name = "jiraSoftwareCloudOAuth2Api" as const;

/**
 * displayName: Jira SW Cloud OAuth2 API
 * documentationUrl: jira
 */
export interface JiraSoftwareCloudOAuth2ApiCredentials {
    /** The URL of your Atlassian site, e.g. https://your-site.atlassian.net. The scheme and any path (like /wiki) are ignored. */
    readonly "domain": string;

    /** Define custom scopes */
    readonly "customScopes"?: boolean;

    readonly "customScopesNotice"?: string;

    /**
     * Scopes that should be enabled
     * Default: "read:jira-user read:jira-work write:jira-work manage:jira-webhook offline_access"
     */
    readonly "enabledScopes"?: string;

    /** Default: "={{$self[\"customScopes\"] ? $self[\"enabledScopes\"] : \"read:jira-user read:jira-work write:jira-work manage:jira-webhook offline_access\"}}" */
    readonly "scope"?: unknown;

    readonly __name: "jiraSoftwareCloudOAuth2Api";
}
