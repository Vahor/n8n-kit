// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/DiscordOAuth2Api.credentials.ts' credentials

export const name = "discordOAuth2Api" as const;

/**
 * displayName: Discord OAuth2 API
 * documentationUrl: discord
 */
export interface DiscordOAuth2ApiCredentials {

    /**
     * Type options: {"password":true}
     */
    readonly "botToken"?: string;

    /**
     * Default: "authorizationCode"
     */
    readonly "grantType"?: any;

    /**
     * Default: "https://discord.com/api/oauth2/authorize"
     */
    readonly "authUrl": any;

    /**
     * Default: "https://discord.com/api/oauth2/token"
     */
    readonly "accessTokenUrl": any;

    /**
     * Default: "permissions=1642758929655"
     */
    readonly "authQueryParameters"?: any;

    /**
     * Define custom scopes
     */
    readonly "customScopes"?: boolean;

    /**
     */
    readonly "customScopesNotice"?: string;

    /**
     * Scopes that should be enabled
     * Default: "identify guilds guilds.join bot"
     */
    readonly "enabledScopes"?: string;

    /**
     * Default: "={{$self[\"customScopes\"] ? $self[\"enabledScopes\"] : \"identify guilds guilds.join bot\"}}"
     */
    readonly "scope"?: any;

    readonly __name: "discordOAuth2Api";


}

