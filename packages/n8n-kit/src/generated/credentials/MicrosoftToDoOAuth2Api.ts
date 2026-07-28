// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MicrosoftToDoOAuth2Api.credentials.ts' credentials

export const name = "microsoftToDoOAuth2Api" as const;

/**
 * displayName: Microsoft To Do OAuth2 API
 * documentationUrl: microsoft
 */
export interface MicrosoftToDoOAuth2ApiCredentials {
    /** Define custom scopes */
    readonly "customScopes"?: boolean;

    readonly "customScopesNotice"?: string;

    /**
     * Scopes that should be enabled
     * Default: "openid offline_access Tasks.ReadWrite"
     */
    readonly "enabledScopes"?: string;

    /** Default: "={{$self[\"customScopes\"] ? $self[\"enabledScopes\"] : \"openid offline_access Tasks.ReadWrite\"}}" */
    readonly "scope"?: unknown;

    readonly __name: "microsoftToDoOAuth2Api";
}
