// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/TelegramApi.credentials.ts' credentials

export const name = "telegramApi" as const;

/**
 * displayName: Telegram API
 * documentationUrl: telegram
 */
export interface TelegramApiCredentials {
    /**
     * Chat with the <a href="https://telegram.me/botfather">bot father</a> to obtain the access token
     * Type options: {"password":true}
     */
    readonly "accessToken"?: string;

    /**
     * Base URL for Telegram Bot API
     * Default: "https://api.telegram.org"
     */
    readonly "baseUrl"?: string;

    readonly __name: "telegramApi";
}
