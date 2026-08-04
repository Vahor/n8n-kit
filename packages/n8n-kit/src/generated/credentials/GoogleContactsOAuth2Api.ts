// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/GoogleContactsOAuth2Api.credentials.ts' credentials

export const name = "googleContactsOAuth2Api" as const;

/**
 * displayName: Google Contacts OAuth2 API
 * documentationUrl: google/oauth-single-service
 */
export interface GoogleContactsOAuth2ApiCredentials {
    /** Define custom scopes */
    readonly "customScopes"?: boolean;

    readonly "customScopesNotice"?: string;

    /**
     * Scopes that should be enabled
     * Default: "https://www.googleapis.com/auth/contacts"
     */
    readonly "enabledScopes"?: string;

    /** Default: "={{$self[\"customScopes\"] ? $self[\"enabledScopes\"] : \"https://www.googleapis.com/auth/contacts\"}}" */
    readonly "scope"?: unknown;

    readonly __name: "googleContactsOAuth2Api";
}
