// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Google/Gmail/v1/GmailV1.node.ts' node

export const name = "gmail" as const;
export const description = "Consume the Gmail API" as const;
export const version = 1 as const;
export const defaults = {"name":"Gmail"} as const;
export const credentials = [{"name":"googleApi","required":true,"displayOptions":{"show":{"authentication":["serviceAccount"]}}},{"name":"gmailOAuth2","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const

/**
 * Consume the Gmail API
 */
export interface GmailV1NodeParameters {

    /**
     */
    readonly oldVersionNotice?: string;

    /**
     * Default: "oAuth2"
     */
    readonly authentication?: "oAuth2" | "serviceAccount";

    /**
     * Default: "draft"
     */
    readonly resource?: "draft" | "label" | "message" | "messageLabel";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "reply" | "send" | "add" | "remove";

    /**
     */
    readonly messageId?: string;

    /**
     */
    readonly subject?: string;

    /**
     * Whether the message should also be included as HTML
     */
    readonly includeHtml?: boolean;

    /**
     * The HTML message body
     */
    readonly htmlMessage?: string;

    /**
     * The message body. If HTML formatted, then you have to add and activate the option "HTML content" in the "Additional Options" section.
     */
    readonly message?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "toList"?: string, "ccList"?: string, "bccList"?: string, "attachmentsUi"?: { "attachmentsBinary": any }, "dataPropertyAttachmentsPrefixName"?: string, "format"?: "full" | "metadata" | "minimal" | "raw" | "resolved", "includeSpamTrash"?: boolean, "senderName"?: string, "labelIds"?: string[], "q"?: string };

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 10
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
     * The visibility of the label in the label list in the Gmail web interface
     * Default: "labelShow"
     */
    readonly labelListVisibility?: "labelHide" | "labelShow" | "labelShowIfUnread";

    /**
     * The visibility of messages with this label in the message list in the Gmail web interface
     * Default: "show"
     */
    readonly messageListVisibility?: "hide" | "show";

    /**
     */
    readonly threadId?: string;

    /**
     * The email addresses of the recipients
     * Default: []
     * Type options: {"multipleValues":true,"multipleValueButtonText":"Add To Email"}
     */
    readonly toList?: string;

    /**
     * The ID of the label. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getLabels"}
     */
    readonly labelIds?: string[];


}

