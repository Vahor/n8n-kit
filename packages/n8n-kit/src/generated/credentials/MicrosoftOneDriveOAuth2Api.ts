// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MicrosoftOneDriveOAuth2Api.credentials.ts' credentials

export const name = "microsoftOneDriveOAuth2Api" as const;

/**
 * displayName: Microsoft Drive OAuth2 API
 * documentationUrl: microsoft
 */
export interface MicrosoftOneDriveOAuth2ApiCredentials {
    /** Define custom scopes */
    readonly "customScopes"?: boolean;

    readonly "customScopesNotice"?: string;

    /**
     * Scopes that should be enabled
     * Default: "openid offline_access Files.ReadWrite.All"
     */
    readonly "enabledScopes"?: string;

    /** Default: "={{$self[\"customScopes\"] ? $self[\"enabledScopes\"] : \"openid offline_access Files.ReadWrite.All\"}}" */
    readonly "scope"?: unknown;

    readonly __name: "microsoftOneDriveOAuth2Api";
}
