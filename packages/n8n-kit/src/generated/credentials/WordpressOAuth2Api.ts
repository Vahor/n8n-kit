// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/WordpressOAuth2Api.credentials.ts' credentials

export const name = "wordpressOAuth2Api" as const;

/**
 * displayName: WordPress OAuth2 API
 * documentationUrl: wordpress
 */
export interface WordpressOAuth2ApiCredentials {
    readonly "wordpressComNotice"?: string;

    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://public-api.wordpress.com/oauth2/authorize" */
    readonly "authUrl": unknown;

    /** Default: "https://public-api.wordpress.com/oauth2/token" */
    readonly "accessTokenUrl": unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "header" */
    readonly "authentication"?: unknown;

    /** Your WordPress.com site identifier — either a .wordpress.com subdomain (e.g. myblog.wordpress.com) or a custom domain (e.g. myblog.com). Used in API requests that still route through public-api.wordpress.com. */
    readonly "wordpressSite": string;

    /** Whether to define custom OAuth2 scopes instead of the defaults */
    readonly "customScopes"?: boolean;

    readonly "customScopesNotice"?: string;

    /**
     * Space-separated list of OAuth2 scopes to request
     * Default: "global"
     */
    readonly "enabledScopes"?: string;

    /** Default: "={{$self[\"customScopes\"] ? $self[\"enabledScopes\"] : \"global\"}}" */
    readonly "scope"?: unknown;

    readonly __name: "wordpressOAuth2Api";
}
