// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MicrosoftExcelOAuth2Api.credentials.ts' credentials

export const name = "microsoftExcelOAuth2Api" as const;

/**
 * displayName: Microsoft Excel OAuth2 API
 * documentationUrl: microsoft
 */
export interface MicrosoftExcelOAuth2ApiCredentials {
    /** Define custom scopes */
    readonly "customScopes"?: boolean;

    readonly "customScopesNotice"?: string;

    /**
     * Scopes that should be enabled
     * Default: "openid offline_access Files.ReadWrite"
     */
    readonly "enabledScopes"?: string;

    /** Default: "={{$self[\"customScopes\"] ? $self[\"enabledScopes\"] : \"openid offline_access Files.ReadWrite\"}}" */
    readonly "scope"?: unknown;

    readonly __name: "microsoftExcelOAuth2Api";
}
