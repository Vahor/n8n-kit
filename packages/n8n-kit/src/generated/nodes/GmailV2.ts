// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Google/Gmail/v2/GmailV2.node.ts' node

export const description = "Consume the Gmail API" as const;
export const type = "n8n-nodes-base.gmail" as const;
export const version = 2.1 as const;
export const credentials = [{"name":"googleApi","required":true,"displayOptions":{"show":{"authentication":["serviceAccount"]}}},{"name":"gmailOAuth2","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface GmailV2NodeParameters {
    /** Default: "oAuth2" */
    readonly authentication?: "oAuth2" | "serviceAccount";

    /** Default: "message" */
    readonly resource?: "message" | "label" | "draft" | "thread";

    /** Default: "create" */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "addLabels" | "delete" | "get" | "getAll" | "markAsRead" | "markAsUnread" | "removeLabels" | "reply" | "send" | "sendAndWait" | "addLabels" | "delete" | "get" | "getAll" | "removeLabels" | "reply" | "trash" | "untrash";

    readonly messageId?: string;

    readonly subject?: string;

    /** Default: "text" */
    readonly emailType?: "html" | "text" | "text" | "html";

    readonly message?: string;

    /** Default: {} */
    readonly options?: { attachmentsUi?: { attachmentsBinary: { property?: string } }, bccList?: string, ccList?: string, fromAlias?: string, replyTo?: string, threadId?: string, sendTo?: string } | { dataPropertyAttachmentsPrefixName?: string, downloadAttachments?: boolean } | { dataPropertyAttachmentsPrefixName?: string, downloadAttachments?: boolean, includeSpamTrash?: boolean } | { labelListVisibility?: "labelHide" | "labelShow" | "labelShowIfUnread", messageListVisibility?: "hide" | "show" } | { appendAttribution?: boolean, attachmentsUi?: { attachmentsBinary: { property?: string } }, bccList?: string, ccList?: string, senderName?: string, replyTo?: string, replyToSenderOnly?: boolean } | { limitWaitTime?: { values: { limitType?: "afterTimeInterval" | "atSpecifiedTime", resumeAmount?: number, resumeUnit?: "minutes" | "hours" | "days", maxDateAndTime?: string } }, appendAttribution?: boolean } | { messageButtonLabel?: string, responseFormTitle?: string, responseFormDescription?: string, responseFormButtonLabel?: string, responseFormCustomCss?: string, limitWaitTime?: { values: { limitType?: "afterTimeInterval" | "atSpecifiedTime", resumeAmount?: number, resumeUnit?: "minutes" | "hours" | "days", maxDateAndTime?: string } }, appendAttribution?: boolean } | { attachmentsUi?: { attachmentsBinary: { property?: string } }, bccList?: string, ccList?: string, senderName?: string, replyToSenderOnly?: boolean } | { returnOnlyMessages?: boolean };

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /** Label Name */
    readonly name?: string;

    /** The ID of the label */
    readonly labelId?: string;

    /** The email addresses of the recipients. Multiple addresses can be separated by a comma. e.g. jay@getsby.com, jon@smith.com. */
    readonly sendTo?: string;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;

    /** Default: {} */
    readonly filters?: { includeSpamTrash?: boolean, labelIds?: any[], q?: string, readStatus?: "both" | "unread" | "read", receivedAfter?: string, receivedBefore?: string, sender?: string } | { includeSpamTrash?: boolean, labelIds?: any[], q?: string, readStatus?: "both" | "unread" | "read", receivedAfter?: string, receivedBefore?: string };

    /**
     * Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Default: []
     * Type options: {"loadOptionsMethod":"getLabels"}
     */
    readonly labelIds?: any[];

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
    readonly approvalOptions?: { values: { approvalType?: "single" | "double", approveLabel?: string, buttonApprovalStyle?: "primary" | "secondary", disapproveLabel?: string, buttonDisapprovalStyle?: "primary" | "secondary" } };

    /** The ID of the thread you are operating on */
    readonly threadId?: string;

}
