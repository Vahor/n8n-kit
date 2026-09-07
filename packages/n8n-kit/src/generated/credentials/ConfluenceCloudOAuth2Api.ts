// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/ConfluenceCloudOAuth2Api.credentials.ts' credentials

export const name = "confluenceCloudOAuth2Api" as const;

/**
 * displayName: Confluence Cloud OAuth2 API
 * documentationUrl: confluence
 */
export interface ConfluenceCloudOAuth2ApiCredentials {
    /** Define custom scopes */
    readonly "customScopes"?: boolean;

    readonly "customScopesNotice"?: string;

    /**
     * Scopes that should be enabled
     * Default: "read:page:confluence write:page:confluence read:hierarchical-content:confluence read:space:confluence read:attachment:confluence read:comment:confluence read:label:confluence read:content-details:confluence write:attachment:confluence delete:attachment:confluence write:comment:confluence delete:comment:confluence write:label:confluence delete:page:confluence offline_access"
     */
    readonly "enabledScopes"?: string;

    /** Default: "={{$self[\"customScopes\"] ? $self[\"enabledScopes\"] : \"read:page:confluence write:page:confluence read:hierarchical-content:confluence read:space:confluence read:attachment:confluence read:comment:confluence read:label:confluence read:content-details:confluence write:attachment:confluence delete:attachment:confluence write:comment:confluence delete:comment:confluence write:label:confluence delete:page:confluence offline_access\"}}" */
    readonly "scope"?: unknown;

    readonly __name: "confluenceCloudOAuth2Api";
}
