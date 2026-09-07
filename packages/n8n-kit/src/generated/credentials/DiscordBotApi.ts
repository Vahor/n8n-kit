// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/DiscordBotApi.credentials.ts' credentials

export const name = "discordBotApi" as const;

/**
 * displayName: Discord Bot API
 * documentationUrl: discord
 */
export interface DiscordBotApiCredentials {
    /** Type options: {"password":true} */
    readonly "botToken": string;

    /** Only needed when using Discord as an agent channel. Found on the application General Information page. */
    readonly "applicationId"?: string;

    /**
     * Only needed when using Discord as an agent channel. Used to verify Discord interaction signatures.
     * Type options: {"password":true}
     */
    readonly "publicKey"?: string;

    readonly __name: "discordBotApi";
}
