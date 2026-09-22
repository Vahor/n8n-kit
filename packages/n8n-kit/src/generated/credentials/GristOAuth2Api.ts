// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GristOAuth2Api.credentials.ts' credentials

export const name = "gristOAuth2Api" as const;

/**
 * displayName: Grist OAuth2 API
 * documentationUrl: grist
 */
export interface GristOAuth2ApiCredentials {
    /** Default: "pkce" */
    readonly "grantType"?: unknown;

    /**
     * Defaults to hosted Grist. Use https://YOUR_TEAM.getgrist.com for a single team, or your own URL if self-managed with OAuth apps enabled. Do not include /api.
     * Default: "https://api.getgrist.com"
     */
    readonly "url": string;

    /** Default: "={{$self[\"url\"].replace(new RegExp(\"/$\"), \"\").replace(new RegExp(\"/api$\"), \"\")}}/oidc/auth" */
    readonly "authUrl": unknown;

    /** Default: "={{$self[\"url\"].replace(new RegExp(\"/$\"), \"\").replace(new RegExp(\"/api$\"), \"\")}}/oidc/token" */
    readonly "accessTokenUrl": unknown;

    /** Define custom scopes */
    readonly "customScopes"?: boolean;

    readonly "customScopesNotice"?: string;

    /**
     * Space-separated list of OAuth2 scopes to request
     * Default: "offline_access doc:read doc:write"
     */
    readonly "enabledScopes"?: string;

    /** Default: "={{($self[\"customScopes\"] && $self[\"enabledScopes\"]) ? $self[\"enabledScopes\"] : \"offline_access doc:read doc:write\"}}" */
    readonly "scope"?: unknown;

    /** Default: "prompt=consent" */
    readonly "authQueryParameters"?: unknown;

    /** Default: "header" */
    readonly "authentication"?: unknown;

    readonly __name: "gristOAuth2Api";
}
