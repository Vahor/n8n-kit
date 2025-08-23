// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/HelpScout/HelpScout.node.ts' node

export const name = "helpScout" as const;
export const description = "Consume Help Scout API" as const;
export const version = 1 as const;
export const credentials = [{"name":"helpScoutOAuth2Api","required":true}] as const;

/**
 * Consume Help Scout API
 */
export interface HelpScoutNodeParameters {

    /**
     * Default: "conversation"
     */
    readonly resource?: "conversation" | "customer" | "mailbox" | "thread";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "create" | "get" | "getAll" | "properties" | "update" | "get" | "getAll" | "create" | "getAll";

    /**
     * ID of a mailbox where the conversation is being created. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getMailboxes"}
     */
    readonly mailboxId?: string;

    /**
     * Conversation status
     */
    readonly status?: "active" | "closed" | "pending";

    /**
     * Conversation’s subject
     */
    readonly subject?: string;

    /**
     * Conversation type
     */
    readonly type?: "chat" | "email" | "phone" | "chat" | "customer" | "note" | "phone" | "reply";

    /**
     * By default the response only contain the ID to resource. If this option gets activated, it will resolve the data automatically.
     * Default: true
     */
    readonly resolveData?: boolean;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "assignTo"?: number, "autoReply"?: boolean, "closedAt"?: string, "createdAt"?: string, "customerEmail"?: string, "customerId"?: number, "imported"?: boolean, "tags"?: any[], "user"?: number } | { "age"?: number, "firstName"?: string, "gender"?: "female" | "male" | "unknown", "jobTitle"?: string, "lastName"?: string, "location"?: string, "background"?: string, "organization"?: string, "photoUrl"?: string } | { "createdAt"?: string, "customerEmail"?: string, "customerId"?: number, "draft"?: boolean, "imported"?: boolean };

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly threadsUi?: { "threadsValues": any };

    /**
     */
    readonly conversationId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly options?: { "assignTo"?: number, "embed"?: "threads", "folder"?: string, "mailbox"?: string, "modifiedSince"?: string, "number"?: number, "query"?: string, "sortField"?: "createdAt" | "customerEmail" | "customerName" | "mailboxid" | "modifiedAt" | "number" | "score" | "status" | "subject", "sortOrder"?: "asc" | "desc", "status"?: "active" | "all" | "closed" | "open" | "pending" | "spam", "tags"?: any[] } | { "firstName"?: string, "lastName"?: string, "mailbox"?: string, "modifiedSince"?: string, "sortField"?: "score" | "firstName" | "lastName" | "modifiedAt", "sortOrder"?: "asc" | "desc", "query"?: string };

    /**
     * Default: {}
     */
    readonly addressUi?: { "addressValue": any };

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly chatsUi?: { "chatsValues": any };

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly emailsUi?: { "emailsValues": any };

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly phonesUi?: { "phonesValues": any };

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly socialProfilesUi?: { "socialProfilesValues": any };

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly websitesUi?: { "websitesValues": any };

    /**
     */
    readonly customerId?: string;

    /**
     * Default: {}
     */
    readonly updateFields?: { "age"?: number, "firstName"?: string, "gender"?: "female" | "male" | "unknown", "jobTitle"?: string, "lastName"?: string, "location"?: string, "background"?: string, "organization"?: string, "photoUrl"?: string };

    /**
     * The chat text
     */
    readonly text?: string;

    /**
     * Array of supported attachments to add to the message
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly attachmentsUi?: { "attachmentsValues": any, "attachmentsBinary": any };


}

