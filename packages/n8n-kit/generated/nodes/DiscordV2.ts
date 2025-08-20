// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Discord/v2/DiscordV2.node.ts' node

export const name = "discord" as const;
export const description = "Sends data to Discord" as const;
export const version = 2 as const;
export const defaults = {"name":"Discord"} as const;
export const credentials = [{"name":"discordBotApi","required":true,"displayOptions":{"show":{"authentication":["botToken"]}}},{"name":"discordOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}},{"name":"discordWebhookApi","displayOptions":{"show":{"authentication":["webhook"]}}}] as const

/**
 * Sends data to Discord
 */
export interface DiscordV2NodeParameters {

    /**
     * Default: "botToken"
     */
    readonly authentication?: "botToken" | "oAuth2" | "webhook";

    /**
     * Default: "channel"
     */
    readonly resource?: "channel" | "message" | "member";

    /**
     * Default: "send"
     */
    readonly operation?: "deleteMessage" | "get" | "getAll" | "react" | "send" | "SEND_AND_WAIT_OPERATION" | "create" | "update" | "roleAdd" | "roleRemove" | "sendLegacy";


}

