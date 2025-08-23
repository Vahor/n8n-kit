// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Microsoft/Outlook/MicrosoftOutlookTrigger.node.ts' node

export const description = "Fetches emails from Microsoft Outlook and starts the workflow on specified polling intervals." as const;
export const type = "n8n-nodes-base.microsoftOutlookTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"microsoftOutlookOAuth2Api","required":true}] as const;
export const outputs = {"main":"main"} as const;

export interface MicrosoftOutlookTriggerNodeParameters {

    /**
     * Default: "messageReceived"
     */
    readonly event?: "messageReceived";

    /**
     * Default: "simple"
     */
    readonly output?: "simple" | "raw" | "fields";

    /**
     * The fields to add to the output
     * Default: []
     */
    readonly fields?: ("bccRecipients" | "body" | "bodyPreview" | "categories" | "ccRecipients" | "changeKey" | "conversationId" | "createdDateTime" | "flag" | "from" | "hasAttachments" | "importance" | "inferenceClassification" | "internetMessageId" | "isDeliveryReceiptRequested" | "isDraft" | "isRead" | "isReadReceiptRequested" | "lastModifiedDateTime" | "parentFolderId" | "receivedDateTime" | "replyTo" | "sender" | "sentDateTime" | "subject" | "toRecipients" | "webLink")[];

    /**
     * Default: {}
     */
    readonly filters?: { "custom"?: string, "hasAttachments"?: boolean, "foldersToExclude"?: any[], "foldersToInclude"?: any[], "readStatus"?: "both" | "unread" | "read", "sender"?: string };

    /**
     * Default: {}
     */
    readonly options?: { "attachmentsPrefix"?: string, "downloadAttachments"?: boolean };

    readonly pollTimes: { item: { mode: "everyMinute" | (string & {}) }[] };

}

