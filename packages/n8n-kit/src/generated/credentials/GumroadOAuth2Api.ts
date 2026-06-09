// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GumroadOAuth2Api.credentials.ts' credentials

export const name = "gumroadOAuth2Api" as const;

/**
 * displayName: Gumroad OAuth2 API
 * documentationUrl: gumroad
 */
export interface GumroadOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://gumroad.com/oauth/authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://gumroad.com/oauth/token" */
    readonly "accessTokenUrl": unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "body" */
    readonly "authentication"?: unknown;

    /** Define custom scopes */
    readonly "customScopes"?: boolean;

    readonly "customScopesNotice"?: string;

    /**
     * Space-separated list of scopes that should be enabled
     * Default: "view_sales"
     */
    readonly "enabledScopes"?: string;

    /** Default: "={{$self[\"customScopes\"] ? $self[\"enabledScopes\"] : \"view_sales\"}}" */
    readonly "scope"?: unknown;

    readonly __name: "gumroadOAuth2Api";
}
