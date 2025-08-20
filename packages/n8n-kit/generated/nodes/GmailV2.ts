// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Google/Gmail/v2/GmailV2.node.js' node

export const name = "gmail" as const;
export const description = "Consume the Gmail API" as const;
export const version = 2.1 as const;
export const defaults = {"name":"Gmail"} as const;
export const credentials = [{"name":"googleApi","required":true,"displayOptions":{"show":{"authentication":["serviceAccount"]}}},{"name":"gmailOAuth2","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const

/**
 * Consume the Gmail API
 */
export interface GmailV2NodeParameters {

    /**
     * Default: "oAuth2"
     */
    readonly authentication?: "oAuth2" | "serviceAccount";

    /**
     * Default: "message"
     */
    readonly resource?: "message" | "label" | "draft" | "thread";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "addLabels" | "markAsRead" | "markAsUnread" | "removeLabels" | "reply" | "send" | "trash" | "untrash";

    /**
     */
    readonly messageId?: string;

    /**
     */
    readonly subject?: string;

    /**
     * Default: "text"
     */
    readonly emailType?: "html" | "text";

    /**
     */
    readonly message?: string;

    /**
     * Default: {}
     */
    readonly options?: { "sendTo"?: string, "bccList"?: string, "ccList"?: string, "replyTo"?: string, "attachmentsUi"?: { "attachmentsBinary": any }, "dataPropertyAttachmentsPrefixName"?: string, "downloadAttachments"?: boolean, "includeSpamTrash"?: boolean, "labelListVisibility"?: "labelHide" | "labelShow" | "labelShowIfUnread", "messageListVisibility"?: "hide" | "show", "appendAttribution"?: boolean, "senderName"?: string, "replyToSenderOnly"?: boolean, "returnOnlyMessages"?: boolean };

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /**
     * Label Name
     */
    readonly name?: string;

    /**
     * The ID of the label
     */
    readonly labelId?: string;

    /**
     * The email addresses of the recipients. Multiple addresses can be separated by a comma. e.g. jay@getsby.com, jon@smith.com.
     */
    readonly sendTo?: string;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;

    /**
     */
    readonly filtersNotice?: string;

    /**
     * Default: {}
     */
    readonly filters?: { "includeSpamTrash"?: boolean, "labelIds"?: string[], "q"?: string, "readStatus"?: "both" | "unread" | "read", "receivedAfter"?: string, "receivedBefore"?: string, "sender"?: string };

    /**
     * Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>
     * Default: []
     * Type options: {"loadOptionsMethod":"getLabels"}
     */
    readonly labelIds?: string[];

    /**
     * The ID of the thread you are operating on
     */
    readonly threadId?: string;


}

