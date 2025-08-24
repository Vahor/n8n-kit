// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Discord/v1/DiscordV1.node.ts' node

export const description = "Sends data to Discord" as const;
export const type = "n8n-nodes-base.discord" as const;
export const version = 1 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface DiscordV1NodeParameters {
    readonly webhookUri?: string;

    /**
     * Type options: {"maxValue":2000}
     */
    readonly text?: string;

    /**
     * Default: {}
     */
    readonly options?: { "allowedMentions"?: string, "attachments"?: string, "avatarUrl"?: string, "components"?: string, "embeds"?: string, "flags"?: number, "payloadJson"?: string, "username"?: string, "tts"?: boolean };

}
