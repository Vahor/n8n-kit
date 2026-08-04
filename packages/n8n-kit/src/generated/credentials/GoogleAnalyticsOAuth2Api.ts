// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GoogleAnalyticsOAuth2Api.credentials.ts' credentials

export const name = "googleAnalyticsOAuth2" as const;

/**
 * displayName: Google Analytics OAuth2 API
 * documentationUrl: google/oauth-single-service
 */
export interface GoogleAnalyticsOAuth2ApiCredentials {
    /** Define custom scopes */
    readonly "customScopes"?: boolean;

    readonly "customScopesNotice"?: string;

    /**
     * Scopes that should be enabled
     * Default: "https://www.googleapis.com/auth/analytics https://www.googleapis.com/auth/analytics.readonly"
     */
    readonly "enabledScopes"?: string;

    /** Default: "={{$self[\"customScopes\"] ? $self[\"enabledScopes\"] : \"https://www.googleapis.com/auth/analytics https://www.googleapis.com/auth/analytics.readonly\"}}" */
    readonly "scope"?: unknown;

    readonly __name: "googleAnalyticsOAuth2";
}
