// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MicrosoftTeamsOAuth2Api.credentials.ts' credentials

export const name = "microsoftTeamsOAuth2Api" as const;

/**
 * displayName: Microsoft Teams OAuth2 API
 * documentationUrl: microsoft
 */
export interface MicrosoftTeamsOAuth2ApiCredentials {
    /** Define custom scopes */
    readonly "customScopes"?: boolean;

    readonly "customScopesNotice"?: string;

    /**
     * Scopes that should be enabled
     * Default: "openid offline_access User.Read.All Group.ReadWrite.All Chat.ReadWrite ChannelMessage.Read.All"
     */
    readonly "enabledScopes"?: string;

    /** Default: "={{$self[\"customScopes\"] ? $self[\"enabledScopes\"] : \"openid offline_access User.Read.All Group.ReadWrite.All Chat.ReadWrite ChannelMessage.Read.All\"}}" */
    readonly "scope"?: unknown;

    readonly "notice"?: string;

    readonly __name: "microsoftTeamsOAuth2Api";
}
