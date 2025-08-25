// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Discord/v2/DiscordV2.node.ts' node

export const description = "Sends data to Discord" as const;
export const type = "n8n-nodes-base.discord" as const;
export const version = 2 as const;
export const credentials = [{"name":"discordBotApi","required":true,"displayOptions":{"show":{"authentication":["botToken"]}}},{"name":"discordOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}},{"name":"discordWebhookApi","displayOptions":{"show":{"authentication":["webhook"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface DiscordV2NodeParameters {
    /** Default: "botToken" */
    readonly authentication?: "botToken" | "oAuth2" | "webhook";

    /** Default: "channel" */
    readonly resource?: "channel" | "message" | "member";

    /** Default: "send" */
    readonly operation?: "deleteMessage" | "get" | "getAll" | "react" | "send" | "sendAndWait" | "create" | "deleteChannel" | "get" | "getAll" | "update" | "getAll" | "roleAdd" | "roleRemove" | "sendLegacy";

    /**
     * Select the server (guild) that your bot is connected to
     * Default: {"mode":"list","value":""}
     */
    readonly guildId?: {
	value: string,
	mode: "list" | "url" | "id",
};

    /**
     * Select the channel by name, URL, or ID
     * Default: {"mode":"list","value":""}
     */
    readonly channelId?: {
	value: string,
	mode: "list" | "url" | "id",
};

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly options?: { simplify?: boolean } | { flags?: ("SUPPRESS_EMBEDS" | "SUPPRESS_NOTIFICATIONS")[], message_reference?: string, tts?: boolean } | { limitWaitTime?: { values: { limitType?: "afterTimeInterval" | "atSpecifiedTime", resumeAmount?: number, resumeUnit?: "minutes" | "hours" | "days", maxDateAndTime?: string } }, appendAttribution?: boolean } | { messageButtonLabel?: string, responseFormTitle?: string, responseFormDescription?: string, responseFormButtonLabel?: string, responseFormCustomCss?: string, limitWaitTime?: { values: { limitType?: "afterTimeInterval" | "atSpecifiedTime", resumeAmount?: number, resumeUnit?: "minutes" | "hours" | "days", maxDateAndTime?: string } }, appendAttribution?: boolean } | { nsfw?: boolean, bitrate?: number, categoryId?: {
	value: string,
	mode: "list" | "url" | "id",
}, position?: number, rate_limit_per_user?: number, topic?: string, user_limit?: number } | { filter?: ("0" | "2" | "4")[] } | { avatar_url?: string, flags?: ("SUPPRESS_EMBEDS" | "SUPPRESS_NOTIFICATIONS")[], tts?: boolean, username?: string, wait?: boolean };

    /** The ID of the message */
    readonly messageId?: string;

    /** The emoji you want to react with */
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
    readonly userId?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * The content of the message (up to 2000 characters)
     * Type options: {"rows":2}
     */
    readonly content?: string;

    /**
     * Default: []
     * Type options: {"multipleValues":true}
     */
    readonly embeds?: { values: { inputMethod?: "fields" | "json", json?: string, description?: string, author?: string, color?: string, timestamp?: string, title?: string, url?: string, image?: string, thumbnail?: string, video?: string } };

    /**
     * Default: []
     * Type options: {"multipleValues":true}
     */
    readonly files?: { values: { inputFieldName?: string } };

    /** Type options: {"rows":4} */
    readonly message?: string;

    /** Default: "approval" */
    readonly responseType?: "approval" | "freeText" | "customForm";

    /** Default: "fields" */
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
    readonly formFields?: { values: { fieldLabel: string, fieldName?: string, fieldType: "checkbox" | "html" | "date" | "dropdown" | "email" | "file" | "hiddenField" | "number" | "password" | "radio" | "text" | "textarea", elementName?: string, placeholder?: string, fieldValue?: string, fieldOptions: { values: { option?: string } }, multiselectLegacyNotice?: string, multiselect?: boolean, limitSelection?: "exact" | "range" | "unlimited", numberOfSelections?: number, minSelections?: number, maxSelections?: number, html?: string, multipleFiles?: boolean, acceptFileTypes?: string, formatDate?: string, requiredField?: boolean } };

    /** Default: {} */
    readonly approvalOptions?: { values: { approvalType?: "single" | "double", approveLabel?: string, disapproveLabel?: string } };

    /** The name of the channel */
    readonly name?: string;

    /**
     * The type of channel to create
     * Default: "0"
     */
    readonly type?: "0" | "2" | "4";

    /** The ID of the user after which to return the members */
    readonly after?: string;

    /**
     * Select the roles you want to add to the user
     * Default: []
     * Type options: {"loadOptionsMethod":"getRoles","loadOptionsDependsOn":["userId.value","guildId.value","operation"]}
     */
    readonly role?: any[];

}
