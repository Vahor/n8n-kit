// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Microsoft/Outlook/v1/MicrosoftOutlookV1.node.ts' node

export const description = "Consume Microsoft Outlook API" as const;
export const type = "n8n-nodes-base.microsoftOutlook" as const;
export const version = 1 as const;
export const credentials = [{"name":"microsoftOutlookOAuth2Api","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface MicrosoftOutlookV1NodeParameters {
    /** Default: "message" */
    readonly resource?: "draft" | "folder" | "folderMessage" | "message" | "messageAttachment";

    /** Default: "create" */
    readonly operation?: "create" | "delete" | "get" | "send" | "update" | "delete" | "get" | "getAll" | "getMime" | "move" | "reply" | "send" | "update" | "add" | "download" | "get" | "getAll" | "create" | "delete" | "get" | "getChildren" | "getAll" | "getAll";

    readonly messageId?: string;

    /** The subject of the message */
    readonly subject?: string;

    /** Message body content */
    readonly bodyContent?: string;

    /** Default: {} */
    readonly additionalFields?: { attachments?: { attachments: { binaryPropertyName?: string } }, bccRecipients?: string, bodyContentType?: "html" | "Text", categories?: any[], ccRecipients?: string, internetMessageHeaders?: { headers: { name?: string, value?: string } }, from?: string, importance?: "Low" | "Normal" | "High", isReadReceiptRequested?: boolean, toRecipients?: string, replyTo?: string } | { recipients?: string } | { attachments?: { attachments: { binaryPropertyName?: string } }, bccRecipients?: string, bodyContent?: string, bodyContentType?: "html" | "Text", ccRecipients?: string, internetMessageHeaders?: { headers: { name?: string, value?: string } }, from?: string, importance?: "Low" | "Normal" | "High", isReadReceiptRequested?: boolean, toRecipients?: string, replyTo?: string, subject?: string } | { attachments?: { attachments: { binaryPropertyName?: string } }, bccRecipients?: string, bodyContentType?: "html" | "Text", categories?: any[], ccRecipients?: string, internetMessageHeaders?: { headers: { name?: string, value?: string } }, from?: string, importance?: "Low" | "Normal" | "High", isReadReceiptRequested?: boolean, toRecipients?: string, replyTo?: string, saveToSentItems?: boolean } | { fileName?: string } | { fields?: string, filter?: string } | { dataPropertyAttachmentsPrefixName?: string, fields?: string, filter?: string };

    /** Default: "reply" */
    readonly replyType?: "reply" | "replyAll";

    /** A comment to include. Can be an empty string. */
    readonly comment?: string;

    /**
     * Whether to send the reply message directly. If not set, it will be saved as draft.
     * Default: true
     */
    readonly send?: boolean;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /** Email addresses of recipients. Multiple can be added separated by comma. */
    readonly toRecipients?: string;

    /** Default: "data" */
    readonly binaryPropertyName?: string;

    /** Target Folder ID */
    readonly folderId?: string;

    readonly attachmentId?: string;

    /**
     * Folder Type
     * Default: "folder"
     */
    readonly folderType?: "folder" | "searchFolder";

    /** Name of the folder */
    readonly displayName?: string;

    /** Whether to include child folders in the search */
    readonly includeNestedFolders?: boolean;

    /**
     * The mailbox folders that should be mined
     * Default: []
     * Type options: {"multipleValues":true}
     */
    readonly sourceFolderIds?: string;

    /** The OData query to filter the messages */
    readonly filterQuery?: string;

    /**
     * Fields to update
     * Default: {}
     */
    readonly updateFields?: { displayName?: string, filterQuery?: string, includeNestedFolders?: boolean, sourceFolderIds?: string } | { bccRecipients?: string, bodyContent?: string, bodyContentType?: "html" | "Text", categories?: any[], ccRecipients?: string, internetMessageHeaders?: { headers: { name?: string, value?: string } }, from?: string, importance?: "Low" | "Normal" | "High", isRead?: boolean, isReadReceiptRequested?: boolean, toRecipients?: string, replyTo?: string, subject?: string };

}
