// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MicrosoftSharePointOAuth2Api.credentials.ts' credentials

export const name = "microsoftSharePointOAuth2Api" as const;

/**
 * displayName: Microsoft SharePoint OAuth2 API
 * documentationUrl: microsoft
 */
export interface MicrosoftSharePointOAuth2ApiCredentials {
    /** Define custom scopes */
    readonly "customScopes"?: boolean;

    readonly "customScopesNotice"?: string;

    /**
     * Scopes that should be enabled. Use <code>{subdomain}</code> as a placeholder that will be replaced with the Subdomain value.
     * Default: "openid offline_access https://{subdomain}.sharepoint.com/.default"
     */
    readonly "enabledScopes"?: string;

    /** Default: "={{($self[\"customScopes\"] ? $self[\"enabledScopes\"] : \"openid offline_access https://{subdomain}.sharepoint.com/.default\").replace(/\\{subdomain\\}/g, $self[\"subdomain\"])}}" */
    readonly "scope"?: unknown;

    readonly "subdomain"?: string;

    /** Default: "https://graph.microsoft.com" */
    readonly "graphApiBaseUrl"?: unknown;

    readonly __name: "microsoftSharePointOAuth2Api";
}
