// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/FacebookGraphApiOAuth2Api.credentials.ts' credentials

export const name = "facebookGraphApiOAuth2Api" as const;

/**
 * displayName: Facebook Graph OAuth2 API
 * documentationUrl: facebookgraph
 */
export interface FacebookGraphApiOAuth2ApiCredentials {
    /** Default: "authorizationCode" */
    readonly "grantType"?: unknown;

    /** Default: "https://www.facebook.com/v25.0/dialog/oauth" */
    readonly "authUrl": unknown;

    /** Default: "https://graph.facebook.com/v25.0/oauth/access_token" */
    readonly "accessTokenUrl": unknown;

    readonly "authQueryParameters"?: unknown;

    /** Default: "header" */
    readonly "authentication"?: unknown;

    /** Whether to define custom OAuth2 scopes instead of the defaults */
    readonly "customScopes"?: boolean;

    readonly "customScopesNotice"?: string;

    /**
     * Space-separated list of OAuth2 scopes to request
     * Default: "public_profile email pages_show_list pages_read_engagement pages_read_user_content pages_manage_metadata pages_manage_posts business_management"
     */
    readonly "enabledScopes"?: string;

    /** Default: "={{$self[\"customScopes\"] ? $self[\"enabledScopes\"] : \"public_profile email pages_show_list pages_read_engagement pages_read_user_content pages_manage_metadata pages_manage_posts business_management\"}}" */
    readonly "scope"?: unknown;

    readonly __name: "facebookGraphApiOAuth2Api";
}
