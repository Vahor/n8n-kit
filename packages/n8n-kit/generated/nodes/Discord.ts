// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Discord/Discord.node.js' node

export const name = "discord" as const;
export const description = "Sends data to Discord" as const;
export const version = 1 as const;
export const defaults = {"name":"Discord"} as const;

/**
 * Sends data to Discord
 */
export interface DiscordNodeParameters {

    /**
     */
    readonly webhookUri: string;

    /**
     * Type options: {"maxValue":2000}
     */
    readonly text?: string;

    /**
     * Default: {}
     */
    readonly options?: { "allowedMentions"?: string, "attachments"?: string, "avatarUrl"?: string, "components"?: string, "embeds"?: string, "flags"?: number, "payloadJson"?: string, "username"?: string, "tts"?: boolean };


}

