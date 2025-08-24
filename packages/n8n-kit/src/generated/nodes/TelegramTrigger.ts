// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Telegram/TelegramTrigger.node.ts' node

export const description = "Starts the workflow on a Telegram update" as const;
export const type = "n8n-nodes-base.telegramTrigger" as const;
export const version = 1.2 as const;
export const credentials = [{"name":"telegramApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface TelegramTriggerNodeParameters {
    /** Default: [] */
    readonly updates?: ("*" | "callback_query" | "channel_post" | "edited_channel_post" | "edited_message" | "inline_query" | "message" | "poll" | "pre_checkout_query" | "shipping_query")[];

    /** Default: {} */
    readonly additionalFields?: { "download"?: boolean, "imageSize"?: "small" | "medium" | "large" | "extraLarge", "chatIds"?: string, "userIds"?: string };

}
