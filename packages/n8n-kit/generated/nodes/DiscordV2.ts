// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Discord/v2/DiscordV2.node.ts' node

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
    readonly operation?: "deleteMessage" | "get" | "getAll" | "react" | "send" | "sendAndWait" | "create" | "update" | "roleAdd" | "roleRemove" | "sendLegacy";

    /**
     * Select the server (guild) that your bot is connected to
     * Default: {"mode":"list","value":""}
     */
    readonly guildId?: any;

    /**
     * Select the channel by name, URL, or ID
     * Default: {"mode":"list","value":""}
     */
    readonly channelId?: any;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly options?: { "simplify"?: boolean, "flags"?: ("SUPPRESS_EMBEDS" | "SUPPRESS_NOTIFICATIONS")[], "message_reference"?: string, "tts"?: boolean, "limitWaitTime"?: { "values": any }, "appendAttribution"?: boolean, "messageButtonLabel"?: string, "responseFormTitle"?: string, "responseFormDescription"?: string, "responseFormButtonLabel"?: string, "responseFormCustomCss"?: string, "nsfw"?: boolean, "bitrate"?: number, "categoryId"?: any, "position"?: number, "rate_limit_per_user"?: number, "topic"?: string, "user_limit"?: number, "filter"?: ("0" | "2" | "4")[], "avatar_url"?: string, "username"?: string, "wait"?: boolean };

    /**
     * The ID of the message
     */
    readonly messageId?: string;

    /**
     * The emoji you want to react with
     */
    readonly emoji?: string;

    /**
     * Send message to a channel or DM to a user
     * Default: "channel"
     */
    readonly sendTo?: "user" | "channel";

    /**
     * Select the user you want to assign a role to
     * Default: {"mode":"list","value":""}
     */
    readonly userId?: any;

    /**
     * The content of the message (up to 2000 characters)
     * Type options: {"rows":2}
     */
    readonly content?: string;

    /**
     * Default: []
     * Type options: {"multipleValues":true}
     */
    readonly embeds?: { "values": any };

    /**
     * Default: []
     * Type options: {"multipleValues":true}
     */
    readonly files?: { "values": any };

    /**
     * Type options: {"rows":4}
     */
    readonly message?: string;

    /**
     * Default: "approval"
     */
    readonly responseType?: "approval" | "freeText" | "customForm";

    /**
     * Default: "fields"
     */
    readonly defineForm?: "fields" | "json";

    /**
     * Default: "[\n   {\n      \"fieldLabel\":\"Name\",\n      \"placeholder\":\"enter you name\",\n      \"requiredField\":true\n   },\n   {\n      \"fieldLabel\":\"Age\",\n      \"fieldType\":\"number\",\n      \"placeholder\":\"enter your age\"\n   },\n   {\n      \"fieldLabel\":\"Email\",\n      \"fieldType\":\"email\",\n      \"requiredField\":true\n   }\n]"
     * Type options: {"rows":5}
     */
    readonly jsonOutput?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly formFields?: { "values": any };

    /**
     * Default: {}
     */
    readonly approvalOptions?: { "values": any };

    /**
     * The name of the channel
     */
    readonly name?: string;

    /**
     * The type of channel to create
     * Default: "0"
     */
    readonly type?: "0" | "2" | "4";

    /**
     * The ID of the user after which to return the members
     */
    readonly after?: string;

    /**
     * Select the roles you want to add to the user
     * Default: []
     * Type options: {"loadOptionsMethod":"getRoles","loadOptionsDependsOn":["userId.value","guildId.value","operation"]}
     */
    readonly role?: string[];


}

