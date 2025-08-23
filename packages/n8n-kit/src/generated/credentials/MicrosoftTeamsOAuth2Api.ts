// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/MicrosoftTeamsOAuth2Api.credentials.ts' credentials

export const name = "microsoftTeamsOAuth2Api" as const;

/**
 * displayName: Microsoft Teams OAuth2 API
 * documentationUrl: microsoft
 */
export interface MicrosoftTeamsOAuth2ApiCredentials {
    /**
     * Default: "openid offline_access User.ReadWrite.All Group.ReadWrite.All Chat.ReadWrite ChannelMessage.Read.All"
     */
    readonly "scope"?: any;

    readonly "notice"?: string;

    readonly __name: "microsoftTeamsOAuth2Api";
}
