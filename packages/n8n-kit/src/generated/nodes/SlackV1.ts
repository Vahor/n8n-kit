// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Slack/V1/SlackV1.node.ts' node

export const name = "undefined" as const;
export const description = "undefined" as const;
export const version = 1 as const;
export const credentials = [{"name":"slackApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}}},{"name":"slackOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;

/**
 * undefined
 */
export interface SlackV1NodeParameters {

    /**
     */
    readonly oldVersionNotice?: string;

    /**
     * Default: "accessToken"
     */
    readonly authentication?: "accessToken" | "oAuth2";

    /**
     * Default: "message"
     */
    readonly resource?: "channel" | "file" | "message" | "reaction" | "star" | "user" | "userGroup" | "userProfile";

    /**
     * Default: "create"
     */
    readonly operation?: "archive" | "close" | "create" | "get" | "getAll" | "history" | "invite" | "join" | "kick" | "leave" | "member" | "open" | "rename" | "replies" | "setPurpose" | "setTopic" | "unarchive" | "delete" | "getPermalink" | "post" | "postEphemeral" | "update" | "add" | "delete" | "getAll" | "get" | "getAll" | "upload" | "add" | "get" | "remove" | "info" | "getAll" | "getPresence" | "create" | "disable" | "enable" | "getAll" | "update" | "get" | "update";

    /**
     * The name of the channel to archive. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getChannels"}
     */
    readonly channelId?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "isPrivate"?: boolean } | { "includeNumMembers"?: boolean } | { "channelIds"?: any[], "description"?: string, "handle"?: string, "include_count"?: boolean } | { "include_count"?: boolean } | { "include_count"?: boolean, "include_disabled"?: boolean, "include_users"?: boolean } | { "customFieldUi"?: { "customFieldValues": any }, "email"?: string, "first_name"?: string, "last_name"?: string, "status_emoji"?: string, "status_expiration"?: string, "status_text"?: string, "user"?: string } | { "include_labels"?: boolean, "user"?: string };

    /**
     * The ID of the user to invite into channel. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getUsers"}
     */
    readonly userIds?: any[];

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getUsers"}
     */
    readonly userId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly filters?: { "excludeArchived"?: boolean, "types"?: ("public_channel" | "private_channel" | "mpim" | "im")[] } | { "inclusive"?: boolean, "latest"?: string, "oldest"?: string } | { "channelId"?: string, "showFilesHidden"?: boolean, "tsFrom"?: string, "tsTo"?: string, "types"?: ("all" | "gdocs" | "images" | "pdfs" | "snippets" | "spaces" | "zips")[], "userId"?: string };

    /**
     * Whether to resolve the data automatically. By default the response only contain the ID to resource.
     */
    readonly resolveData?: boolean;

    /**
     * Default: {}
     */
    readonly options?: { "channelId"?: string, "returnIm"?: boolean, "users"?: any[] } | { "channelId"?: string, "fileComment"?: string, "fileId"?: string, "timestamp"?: string } | { "channelId"?: string, "fileId"?: string, "fileComment"?: string, "timestamp"?: string } | { "channelIds"?: any[], "fileName"?: string, "initialComment"?: string, "threadTs"?: string, "title"?: string };

    /**
     * New name for conversation
     */
    readonly name?: string;

    /**
     * Unique identifier of a thread's parent message
     */
    readonly ts?: string;

    /**
     * A new, specialer purpose
     */
    readonly purpose?: string;

    /**
     * The new topic string. Does not support formatting or linkification.
     */
    readonly topic?: string;

    /**
     * Timestamp of the message to get permanent link
     */
    readonly timestamp?: string;

    /**
     * The channel to send the message to
     */
    readonly channel?: string;

    /**
     * The user ID to send the message to
     */
    readonly user?: string;

    /**
     * The text to send
     */
    readonly text?: string;

    /**
     */
    readonly jsonParameters?: boolean;

    /**
     * Other options to set
     * Default: {}
     */
    readonly otherOptions?: { "icon_emoji"?: string, "icon_url"?: string, "link_names"?: boolean, "thread_ts"?: string, "mrkdwn"?: boolean, "reply_broadcast"?: boolean, "unfurl_links"?: boolean, "unfurl_media"?: boolean, "sendAsUser"?: string };

    /**
     * The attachment to add
     * Default: {}
     * Type options: {"multipleValues":true,"multipleValueButtonText":"Add attachment"}
     */
    readonly attachments?: { "fallback"?: string, "text"?: string, "title"?: string, "title_link"?: string, "color"?: any, "pretext"?: string, "author_name"?: string, "author_link"?: string, "author_icon"?: string, "image_url"?: string, "thumb_url"?: string, "footer"?: string, "footer_icon"?: string, "ts"?: string, "fields"?: { "item": any } };

    /**
     * Default: {}
     */
    readonly updateFields?: { "link_names"?: boolean, "parse"?: "client" | "full" | "none" } | { "channels"?: any[], "description"?: string, "handle"?: string, "include_count"?: boolean, "name"?: string };

    /**
     * The attachments to add
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly attachmentsJson?: string;

    /**
     * The blocks to add
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly blocksJson?: string;

    /**
     * The blocks to add
     * Default: {}
     * Type options: {"multipleValues":true,"multipleValueButtonText":"Add Block"}
     */
    readonly blocksUi?: { "blocksValues": any };

    /**
     * Whether the data to upload should be taken from binary field
     */
    readonly binaryData?: boolean;

    /**
     * The text content of the file to upload
     */
    readonly fileContent?: string;

    /**
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     */
    readonly fileId?: string;

    /**
     * The encoded ID of the User Group to update
     */
    readonly userGroupId?: string;


}

