// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Mattermost/v1/MattermostV1.node.ts' node

export const name = "mattermost" as const;
export const description = "Sends data to Mattermost" as const;
export const version = 1 as const;
export const defaults = {"name":"Mattermost"} as const;
export const credentials = [{"name":"mattermostApi","required":true}] as const

/**
 * Sends data to Mattermost
 */
export interface MattermostV1NodeParameters {

    /**
     * Default: "message"
     */
    readonly resource?: "channel" | "message" | "reaction" | "user";

    /**
     * Default: "create"
     */
    readonly operation?: "addUser" | "create" | "delete" | "members" | "restore" | "search" | "statistics" | "post" | "postEphemeral" | "getAll" | "deactive" | "getByEmail" | "getById" | "invite";

    /**
     * The Mattermost Team. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getTeams"}
     */
    readonly teamId?: string;

    /**
     * The non-unique UI name for the channel
     */
    readonly displayName?: string;

    /**
     * The unique handle for the channel, will be present in the channel URL
     */
    readonly channel?: string;

    /**
     * The type of channel to create
     * Default: "public"
     */
    readonly type?: "private" | "public";

    /**
     * The ID of the channel to soft delete. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getChannels"}
     */
    readonly channelId?: string;

    /**
     * By default the response only contain the ID of the user. If this option gets activated, it will resolve the user automatically.
     * Default: true
     */
    readonly resolveData?: boolean;

    /**
     * Whether to return all results or only up to a given limit
     * Default: true
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /**
     * The ID of the user to invite into channel. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getUsers"}
     */
    readonly userId?: string;

    /**
     * The search term for Channels in a Team
     */
    readonly term?: string;

    /**
     * ID of the post to delete
     */
    readonly postId?: string;

    /**
     * The text to send
     */
    readonly message?: string;

    /**
     * The attachment to add
     * Default: {}
     * Type options: {"multipleValues":true,"multipleValueButtonText":"Add attachment"}
     */
    readonly attachments?: { "actions"?: { "item": any }, "author_icon"?: string, "author_link"?: string, "author_name"?: string, "color"?: any, "fallback"?: string, "fields"?: { "item": any }, "footer"?: string, "footer_icon"?: string, "image_url"?: string, "pretext"?: string, "text"?: string, "thumb_url"?: string, "title"?: string, "title_link"?: string };

    /**
     * Other options to set
     * Default: {}
     */
    readonly otherOptions?: { "root_id"?: string };

    /**
     * Emoji to use for this reaction
     */
    readonly emojiName?: string;

    /**
     */
    readonly username?: string;

    /**
     */
    readonly authService?: "email" | "gitlab" | "google" | "ldap" | "office365" | "saml";

    /**
     */
    readonly authData?: string;

    /**
     */
    readonly email?: string;

    /**
     * The password used for email authentication
     * Type options: {"password":true}
     */
    readonly password?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "first_name"?: string, "last_name"?: string, "locale"?: string, "nickname"?: string, "notificationUi"?: { "notificationValues": any }, "inChannel"?: string, "inTeam"?: string, "notInTeam"?: string, "notInChannel"?: string, "sort"?: "createdAt" | "lastActivityAt" | "status" | "username", "since"?: string };

    /**
     * User's ID
     */
    readonly userIds?: string;

    /**
     * User's email. Multiple emails can be set separated by comma.
     */
    readonly emails?: string;


}

