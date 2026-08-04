// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GooglePerspectiveOAuth2Api.credentials.ts' credentials

export const name = "googlePerspectiveOAuth2Api" as const;

/**
 * displayName: Google Perspective OAuth2 API
 * documentationUrl: google/oauth-single-service
 */
export interface GooglePerspectiveOAuth2ApiCredentials {
    /** Define custom scopes */
    readonly "customScopes"?: boolean;

    readonly "customScopesNotice"?: string;

    /**
     * Scopes that should be enabled
     * Default: "https://www.googleapis.com/auth/userinfo.email"
     */
    readonly "enabledScopes"?: string;

    /** Default: "={{$self[\"customScopes\"] ? $self[\"enabledScopes\"] : \"https://www.googleapis.com/auth/userinfo.email\"}}" */
    readonly "scope"?: unknown;

    readonly __name: "googlePerspectiveOAuth2Api";
}
