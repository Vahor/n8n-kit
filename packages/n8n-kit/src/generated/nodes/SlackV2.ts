// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Slack/V2/SlackV2.node.ts' node

export const description = "Consume Slack API" as const;
export const type = "n8n-nodes-base.slack" as const;
export const version = 2.4 as const;
export const credentials = [{"name":"slackApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}}},{"name":"slackOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface SlackV2NodeParameters {
    /** Default: "accessToken" */
    readonly authentication?: "accessToken" | "oAuth2";

    /** Default: "message" */
    readonly resource?: "channel" | "file" | "message" | "reaction" | "star" | "user" | "userGroup";

    /** Default: "create" */
    readonly operation?: "archive" | "close" | "create" | "get" | "getAll" | "history" | "invite" | "join" | "kick" | "leave" | "member" | "open" | "rename" | "replies" | "setPurpose" | "setTopic" | "unarchive" | "delete" | "getPermalink" | "search" | "post" | "sendAndWait" | "update" | "add" | "delete" | "getAll" | "get" | "getAll" | "upload" | "add" | "get" | "remove" | "info" | "getAll" | "getProfile" | "getPresence" | "updateProfile" | "updateUsers" | "create" | "disable" | "enable" | "getAll" | "getUsers" | "update";

    /**
     * The Slack channel to archive
     * Default: {"mode":"list","value":""}
     */
    readonly channelId?: {
	value: string,
	mode: "list" | "id" | "url",
} | string | {
	value: string,
	mode: "list" | "id" | "name" | "url",
};

    /**
     * Whether to create a Public or a Private Slack channel. <a href="https://slack.com/help/articles/360017938993-What-is-a-channel">More info</a>.
     * Default: "public"
     */
    readonly channelVisibility?: "public" | "private";

    /**
     * The ID of the user to invite into channel. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getUsers"}
     */
    readonly userIds?: unknown[];

    /** Default: {} */
    readonly options?: { includeNumMembers?: boolean } | { channelId?: string, returnIm?: boolean, users?: unknown[] } | { searchChannel?: unknown[] } | { limitWaitTime?: { values: { limitType?: "afterTimeInterval" | "atSpecifiedTime", resumeAmount?: number, resumeUnit?: "minutes" | "hours" | "days", maxDateAndTime?: string } }, appendAttribution?: boolean, thread_ts?: { replyValues: { thread_ts?: number, reply_broadcast?: boolean } } } | { messageButtonLabel?: string, responseFormTitle?: string, responseFormDescription?: string, responseFormButtonLabel?: string, responseFormCustomCss?: string, limitWaitTime?: { values: { limitType?: "afterTimeInterval" | "atSpecifiedTime", resumeAmount?: number, resumeUnit?: "minutes" | "hours" | "days", maxDateAndTime?: string } }, appendAttribution?: boolean, thread_ts?: { replyValues: { thread_ts?: number, reply_broadcast?: boolean } } } | { fileComment?: string } | { channelId?: string, fileId?: string, fileComment?: string, timestamp?: number } | { channelIds?: unknown[], channelId?: string, fileName?: string, initialComment?: string, threadTs?: string, title?: string } | { customFieldUi?: { customFieldValues: Array<{ id?: string, value?: string, alt?: string }> }, email?: string, first_name?: string, last_name?: string, status?: { set_status: Array<{ status_emoji?: string, status_expiration?: string, status_text?: string }> }, user?: string } | { include_count?: boolean } | { include_count?: boolean, include_disabled?: boolean, include_users?: boolean } | { resolveData?: boolean };

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getUsers"}
     */
    readonly userId?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly filters?: { excludeArchived?: boolean, types?: ("public_channel" | "private_channel" | "mpim" | "im")[] } | { inclusive?: boolean, latest?: string, oldest?: string } | { channelId?: string, showFilesHidden?: boolean, tsFrom?: string, tsTo?: string, types?: ("all" | "gdocs" | "images" | "pdfs" | "snippets" | "spaces" | "zips")[], userId?: string };

    /** Whether to resolve the data automatically. By default the response only contain the ID to resource. */
    readonly resolveData?: boolean;

    /** New name for conversation */
    readonly name?: string;

    /** Timestamp of the message to reply */
    readonly ts?: number;

    /** A new, specialer purpose */
    readonly purpose?: string;

    readonly topic?: string;

    /** Timestamp of the message to message */
    readonly timestamp?: number;

    readonly select?: "channel" | "user";

    /** Default: {"mode":"list","value":""} */
    readonly user?: {
	value: string,
	mode: "list" | "id" | "username",
} | {
	value: string,
	mode: "list" | "id",
};

    /**
     * Whether to send a simple text message, or use Slack’s Blocks UI builder for more sophisticated messages that include form fields, sections and more
     * Default: "text"
     */
    readonly messageType?: "text" | "block" | "attachment";

    /** The message text to post. Supports <a href="https://api.slack.com/reference/surfaces/formatting">markdown</a> by default - this can be disabled in "Options". */
    readonly text?: string;

    /**
     * Enter the JSON output from Slack's visual Block Kit Builder here. You can then use expressions to add variable content to your blocks. To create blocks, use <a target='_blank' href='https://app.slack.com/block-kit-builder'>Slack's Block Kit Builder</a>
     * Type options: {"rows":3}
     */
    readonly blocksUi?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true,"multipleValueButtonText":"Add attachment"}
     */
    readonly attachments?: { fallback?: string, text?: string, title?: string, title_link?: string, color?: string, pretext?: string, author_name?: string, author_link?: string, author_icon?: string, image_url?: string, thumb_url?: string, footer?: string, footer_icon?: string, ts?: number, fields?: { item: Array<{ title?: string, value?: string, short?: boolean }> } };

    /**
     * Other options to set
     * Default: {}
     */
    readonly otherOptions?: { includeLinkToWorkflow?: boolean, botProfile?: { imageValues: { profilePhotoType?: "image" | "emoji", icon_emoji?: string, icon_url?: string } }, link_names?: boolean, thread_ts?: { replyValues: { thread_ts?: number, reply_broadcast?: boolean } }, mrkdwn?: boolean, unfurl_links?: boolean, unfurl_media?: boolean, ephemeral?: { ephemeralValues: { user?: {
	value: string,
	mode: "list" | "id",
}, ephemeral?: boolean } } | boolean, sendAsUser?: string } | { includeLinkToWorkflow?: boolean };

    /** Default: {} */
    readonly updateFields?: { link_names?: boolean, parse?: "client" | "full" | "none" } | { channels?: unknown[], description?: string, handle?: string, include_count?: boolean, name?: string };

    /** The text to search for within messages */
    readonly query?: string;

    /**
     * How search results should be sorted. You can sort by.
     * Default: "desc"
     */
    readonly sort?: "desc" | "asc" | "relevance";

    /** Type options: {"rows":4} */
    readonly message?: string;

    /** Default: "approval" */
    readonly responseType?: "approval" | "freeText" | "customForm";

    /** Default: "fields" */
    readonly defineForm?: "fields" | "json";

    /**
     * Default: "[\n  {\n    \"fieldLabel\": \"Name\",\n    \"placeholder\": \"enter your name\",\n    \"requiredField\": true\n  },\n  {\n    \"fieldLabel\": \"Age\",\n    \"fieldType\": \"number\",\n    \"placeholder\": \"enter your age\"\n  },\n  {\n    \"fieldLabel\": \"Email\",\n    \"fieldType\": \"email\",\n    \"requiredField\": true\n  },\n  {\n    \"fieldLabel\": \"Textarea\",\n    \"fieldType\": \"textarea\"\n  },\n  {\n    \"fieldLabel\": \"Dropdown Options\",\n    \"fieldType\": \"dropdown\",\n    \"fieldOptions\": {\n      \"values\": [\n        {\n          \"option\": \"option 1\"\n        },\n        {\n          \"option\": \"option 2\"\n        }\n      ]\n    },\n    \"requiredField\": true\n  },\n  {\n    \"fieldLabel\": \"Checkboxes\",\n    \"fieldType\": \"checkbox\",\n    \"fieldOptions\": {\n      \"values\": [\n        {\n          \"option\": \"option 1\"\n        },\n        {\n          \"option\": \"option 2\"\n        }\n      ]\n    }\n  },\n  {\n    \"fieldLabel\": \"Radio\",\n    \"fieldType\": \"radio\",\n    \"fieldOptions\": {\n      \"values\": [\n        {\n          \"option\": \"option 1\"\n        },\n        {\n          \"option\": \"option 2\"\n        }\n      ]\n    }\n  },\n  {\n    \"fieldLabel\": \"Email\",\n    \"fieldType\": \"email\",\n    \"placeholder\": \"me@mail.con\"\n  },\n  {\n    \"fieldLabel\": \"File\",\n    \"fieldType\": \"file\",\n    \"multipleFiles\": true,\n    \"acceptFileTypes\": \".jpg, .png\"\n  },\n  {\n    \"fieldLabel\": \"Number\",\n    \"fieldType\": \"number\"\n  },\n  {\n    \"fieldLabel\": \"Password\",\n    \"fieldType\": \"password\"\n  }\n]\n"
     * Type options: {"rows":5}
     */
    readonly jsonOutput?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true,"fixedCollection":{"itemTitle":"={{ $collection.item.properties.find(p => p.name === \"fieldType\").options.find(o => o.value === $collection.item.value.fieldType).name }}"}}
     */
    readonly formFields?: { values: Array<{ fieldName: string, fieldLabel: string, fieldType: "checkbox" | "html" | "date" | "dropdown" | "email" | "file" | "hiddenField" | "number" | "password" | "radio" | "text" | "textarea", elementName?: string, placeholder?: string, defaultValue?: string, fieldValue?: string, fieldOptions: { values: Array<{ option?: string }> }, multiselectLegacyNotice?: string, multiselect?: boolean, limitSelection?: "exact" | "range" | "unlimited", numberOfSelections?: number, minSelections?: number, maxSelections?: number, html?: string, multipleFiles?: boolean, acceptFileTypes?: string, formatDate?: string, requiredField?: boolean }> };

    /** Default: {} */
    readonly approvalOptions?: { values: { approvalType?: "single" | "double", approveLabel?: string, buttonApprovalStyle?: "primary" | "secondary", disapproveLabel?: string, buttonDisapprovalStyle?: "primary" | "secondary" } };

    /** Choose whether to add a star to a message or a file */
    readonly target?: "message" | "file";

    /** File to add star to */
    readonly fileId?: string;

    /** Whether the data to upload should be taken from binary field */
    readonly binaryData?: boolean;

    readonly fileContent?: string;

    /**
     * Name of the binary property which contains the data for the file to be uploaded
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /** Default: {} */
    readonly Options?: { channelIds?: unknown[], description?: string, handle?: string, include_count?: boolean };

    /** The encoded ID of the User Group to update */
    readonly userGroupId?: string;

    /** Default: {} */
    readonly option?: { include_count?: boolean };

    /**
     * Users to add to the User Group. Existing users will be preserved. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getUsers"}
     */
    readonly users?: unknown[];

}
