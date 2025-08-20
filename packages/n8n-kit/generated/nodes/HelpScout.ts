// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/HelpScout/HelpScout.node.js' node

export const name = "helpScout" as const;
export const description = "Consume HelpScout API" as const;
export const version = 1 as const;
export const defaults = {"name":"HelpScout"} as const;
export const credentials = [{"name":"helpScoutOAuth2Api","required":true}] as const

/**
 * Consume HelpScout API
 */
export interface HelpScoutNodeParameters {

    /**
     * Default: "conversation"
     */
    readonly resource?: "conversation" | "customer" | "mailbox" | "thread";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "properties" | "update";

    /**
     * ID of a mailbox where the conversation is being created. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
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
    readonly type?: "chat" | "email" | "phone" | "customer" | "note" | "reply";

    /**
     * By default the response only contain the ID to resource. If this option gets activated, it will resolve the data automatically.
     * Default: true
     */
    readonly resolveData?: boolean;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "assignTo"?: number, "autoReply"?: boolean, "closedAt"?: string, "createdAt"?: string, "customerEmail"?: string, "customerId"?: number, "imported"?: boolean, "tags"?: string[], "user"?: number, "age"?: number, "firstName"?: string, "gender"?: "female" | "male" | "unknown", "jobTitle"?: string, "lastName"?: string, "location"?: string, "background"?: string, "organization"?: string, "photoUrl"?: string, "draft"?: boolean };

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
    readonly options?: { "assignTo"?: number, "embed"?: "threads", "folder"?: string, "mailbox"?: string, "modifiedSince"?: string, "number"?: number, "query"?: string, "sortField"?: "createdAt" | "customerEmail" | "customerName" | "mailboxid" | "modifiedAt" | "number" | "score" | "status" | "subject", "sortOrder"?: "asc" | "desc", "status"?: "active" | "all" | "closed" | "open" | "pending" | "spam", "tags"?: string[], "firstName"?: string, "lastName"?: string };

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

