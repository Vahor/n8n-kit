// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/HelpScout/HelpScout.node.ts' node

export const description = "Consume Help Scout API" as const;
export const type = "n8n-nodes-base.helpScout" as const;
export const version = 1 as const;
export const credentials = [{"name":"helpScoutOAuth2Api","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface HelpScoutNodeParameters {
    /** Default: "conversation" */
    readonly resource?: "conversation" | "customer" | "mailbox" | "thread";

    /** Default: "create" */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "create" | "get" | "getAll" | "properties" | "update" | "get" | "getAll" | "create" | "getAll";

    /**
     * ID of a mailbox where the conversation is being created. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getMailboxes"}
     */
    readonly mailboxId?: string;

    /** Conversation status */
    readonly status?: "active" | "closed" | "pending";

    /** Conversation’s subject */
    readonly subject?: string;

    /** Conversation type */
    readonly type?: "chat" | "email" | "phone" | "chat" | "customer" | "note" | "phone" | "reply";

    /**
     * By default the response only contain the ID to resource. If this option gets activated, it will resolve the data automatically.
     * Default: true
     */
    readonly resolveData?: boolean;

    /** Default: {} */
    readonly additionalFields?: { assignTo?: number, autoReply?: boolean, closedAt?: string, createdAt?: string, customerEmail?: string, customerId?: number, imported?: boolean, tags?: any[], user?: number } | { age?: number, firstName?: string, gender?: "female" | "male" | "unknown", jobTitle?: string, lastName?: string, location?: string, background?: string, organization?: string, photoUrl?: string } | { createdAt?: string, customerEmail?: string, customerId?: number, draft?: boolean, imported?: boolean };

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly threadsUi?: { threadsValues: { type?: "chat" | "customer" | "note" | "phone" | "reply", text?: string, bcc?: string, cc?: string, draft?: boolean } };

    readonly conversationId?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly options?: { assignTo?: number, embed?: "threads", folder?: string, mailbox?: string, modifiedSince?: string, number?: number, query?: string, sortField?: "createdAt" | "customerEmail" | "customerName" | "mailboxid" | "modifiedAt" | "number" | "score" | "status" | "subject", sortOrder?: "asc" | "desc", status?: "active" | "all" | "closed" | "open" | "pending" | "spam", tags?: any[] } | { firstName?: string, lastName?: string, mailbox?: string, modifiedSince?: string, sortField?: "score" | "firstName" | "lastName" | "modifiedAt", sortOrder?: "asc" | "desc", query?: string };

    /** Default: {} */
    readonly addressUi?: { addressValue: { line1?: string, line2?: string, city?: string, state?: string, country?: string, postalCode?: string } };

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly chatsUi?: { chatsValues: { type?: "aim" | "gtalk" | "icq" | "msn" | "other" | "qq" | "skype" | "xmpp" | "yahoo", value?: string } };

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly emailsUi?: { emailsValues: { type?: "home" | "other" | "work", value?: string } };

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly phonesUi?: { phonesValues: { type?: "fax" | "home" | "other" | "pager" | "work", value?: string } };

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly socialProfilesUi?: { socialProfilesValues: { type?: "aboutMe" | "facebook" | "flickr" | "forsquare" | "google" | "googleplus" | "linkedin" | "other" | "quora" | "tungleme" | "twitter" | "youtube", value?: string } };

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly websitesUi?: { websitesValues: { value?: string } };

    readonly customerId?: string;

    /** Default: {} */
    readonly updateFields?: { age?: number, firstName?: string, gender?: "female" | "male" | "unknown", jobTitle?: string, lastName?: string, location?: string, background?: string, organization?: string, photoUrl?: string };

    /** The chat text */
    readonly text?: string;

    /**
     * Array of supported attachments to add to the message
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly attachmentsUi?: { attachmentsValues: { fileName?: string, mimeType?: string, data?: string }, attachmentsBinary: { property?: string } };

}
