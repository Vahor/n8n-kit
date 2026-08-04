// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GoogleBooksOAuth2Api.credentials.ts' credentials

export const name = "googleBooksOAuth2Api" as const;

/**
 * displayName: Google Books OAuth2 API
 * documentationUrl: google/oauth-single-service
 */
export interface GoogleBooksOAuth2ApiCredentials {
    /** Define custom scopes */
    readonly "customScopes"?: boolean;

    readonly "customScopesNotice"?: string;

    /**
     * Scopes that should be enabled
     * Default: "https://www.googleapis.com/auth/books"
     */
    readonly "enabledScopes"?: string;

    /** Default: "={{$self[\"customScopes\"] ? $self[\"enabledScopes\"] : \"https://www.googleapis.com/auth/books\"}}" */
    readonly "scope"?: unknown;

    readonly __name: "googleBooksOAuth2Api";
}
