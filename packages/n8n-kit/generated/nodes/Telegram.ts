// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Telegram/Telegram.node.ts' node

export const name = "telegram" as const;
export const description = "Sends data to Telegram" as const;
export const version = 1.2 as const;
export const defaults = {"name":"Telegram"} as const;
export const credentials = [{"name":"telegramApi","required":true}] as const

/**
 * Sends data to Telegram
 */
export interface TelegramNodeParameters {

    /**
     * Default: "message"
     */
    readonly resource?: "chat" | "callback" | "file" | "message";

    /**
     * Default: "get"
     */
    readonly operation?: "get" | "administrators" | "member" | "leave" | "setDescription" | "setTitle" | "answerQuery" | "answerInlineQuery" | "deleteMessage" | "editMessageText" | "pinChatMessage" | "sendAnimation" | "sendAudio" | "sendChatAction" | "sendDocument" | "sendLocation" | "sendMediaGroup" | "sendMessage" | "SEND_AND_WAIT_OPERATION" | "sendPhoto" | "sendSticker" | "sendVideo" | "unpinChatMessage";

    /**
     * Unique identifier for the target chat or username, To find your chat ID ask @get_id_bot
     */
    readonly chatId?: string;

    /**
     * Unique identifier of the message to delete
     */
    readonly messageId?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "disable_notification"?: boolean, "cache_time"?: number, "show_alert"?: boolean, "text"?: string, "url"?: string, "mimeType"?: string, "undefined"?: any, "caption"?: string, "disable_web_page_preview"?: boolean, "duration"?: number, "fileName"?: string, "height"?: number, "parse_mode"?: "Markdown" | "MarkdownV2" | "HTML", "performer"?: string, "reply_to_message_id"?: number, "message_thread_id"?: number, "title"?: string, "thumb"?: string, "width"?: number };

    /**
     * Unique identifier of the target user
     */
    readonly userId?: string;

    /**
     * New chat description, 0-255 characters
     */
    readonly description?: string;

    /**
     * New chat title, 1-255 characters
     */
    readonly title?: string;

    /**
     * Unique identifier for the query to be answered
     */
    readonly queryId?: string;

    /**
     * A JSON-serialized array of results for the inline query
     */
    readonly results?: string;

    /**
     * The ID of the file
     */
    readonly fileId?: string;

    /**
     * Whether to download the file
     * Default: true
     */
    readonly download?: boolean;

    /**
     * The type of the message to edit
     * Default: "message"
     */
    readonly messageType?: "inlineMessage" | "message";

    /**
     * Whether the data to upload should be taken from binary field
     */
    readonly binaryData?: boolean;

    /**
     * Name of the binary property that contains the data to upload
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * Unique identifier of the inline message to edit
     */
    readonly inlineMessageId?: string;

    /**
     * Additional interface options
     * Default: "none"
     */
    readonly replyMarkup?: "none" | "inlineKeyboard" | "forceReply" | "replyKeyboard" | "replyKeyboardRemove";

    /**
     * Animation to send. Pass a file_id to send an animation that exists on the Telegram servers (recommended), an HTTP URL for Telegram to get an animation from the Internet.
     */
    readonly file?: string;

    /**
     * Type of action to broadcast. Choose one, depending on what the user is about to receive. The status is set for 5 seconds or less (when a message arrives from your bot).
     * Default: "typing"
     */
    readonly action?: "find_location" | "record_audio" | "record_video" | "record_video_note" | "typing" | "upload_audio" | "upload_document" | "upload_photo" | "upload_video" | "upload_video_note";

    /**
     * Location latitude
     * Type options: {"numberPrecision":10,"minValue":"-90","maxValue":90}
     */
    readonly latitude?: number;

    /**
     * Location longitude
     * Type options: {"numberPrecision":10,"minValue":"-180","maxValue":180}
     */
    readonly longitude?: number;

    /**
     * The media to add
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly media?: { "media": any };

    /**
     * Text of the message to be sent
     */
    readonly text?: string;

    /**
     * Default: {}
     */
    readonly forceReply?: { "force_reply"?: boolean, "selective"?: boolean };

    /**
     * Adds an inline keyboard that appears right next to the message it belongs to
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly inlineKeyboard?: { "rows": any };

    /**
     * Adds a custom keyboard with reply options
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly replyKeyboard?: { "rows": any };

    /**
     * Default: {}
     */
    readonly replyKeyboardOptions?: { "resize_keyboard"?: boolean, "one_time_keyboard"?: boolean, "selective"?: boolean };

    /**
     * Default: {}
     */
    readonly replyKeyboardRemove?: { "remove_keyboard"?: boolean, "selective"?: boolean };


}

