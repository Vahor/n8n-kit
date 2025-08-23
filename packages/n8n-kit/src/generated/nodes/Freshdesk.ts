// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Freshdesk/Freshdesk.node.ts' node

export const name = "freshdesk" as const;
export const description = "Consume Freshdesk API" as const;
export const version = 1 as const;
export const credentials = [{"name":"freshdeskApi","required":true}] as const;

/**
 * Consume Freshdesk API
 */
export interface FreshdeskNodeParameters {

    /**
     * Default: "ticket"
     */
    readonly resource: "contact" | "ticket";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     * Default: "requesterId"
     */
    readonly requester?: "email" | "facebookId" | "phone" | "requesterId" | "twitterId" | "uniqueExternalId";

    /**
     * Value of the identification selected
     */
    readonly requesterIdentificationValue?: string;

    /**
     * Default: "pending"
     */
    readonly status?: "closed" | "open" | "pending" | "resolved";

    /**
     * Default: "low"
     */
    readonly priority?: "low" | "medium" | "high" | "urgent";

    /**
     * The channel through which the ticket was created
     * Default: "portal"
     */
    readonly source?: "chat" | "email" | "feedbackWidget" | "mobileHelp" | "OutboundEmail" | "phone" | "portal";

    /**
     * Default: {}
     */
    readonly options?: { "agent"?: string, "ccEmails"?: string, "company"?: string, "description"?: string, "dueBy"?: string, "emailConfigId"?: number, "frDueBy"?: string, "group"?: string, "name"?: string, "product"?: string, "subject"?: string, "tags"?: string, "type"?: "Feature Request" | "Incident" | "Problem" | "Question" | "Refund" } | { "companyId"?: string, "include"?: ("company" | "description" | "requester" | "stats")[], "order"?: "asc" | "desc", "orderBy"?: "createdAt" | "dueBy" | "updatedAt", "requesterEmail"?: string, "requesterId"?: string, "updatedSince"?: string };

    readonly ticketId?: string;

    /**
     * Default: {}
     */
    readonly updateFields?: { "agent"?: string, "ccEmails"?: string, "company"?: string, "dueBy"?: string, "emailConfigId"?: number, "frDueBy"?: string, "group"?: string, "name"?: string, "product"?: string, "priority"?: "low" | "medium" | "high" | "urgent", "requester"?: "email" | "facebookId" | "phone" | "requesterId" | "twitterId" | "uniqueExternalId", "requesterIdentificationValue"?: string, "status"?: "open" | "pending" | "resolved" | "closed", "source"?: "chat" | "email" | "feedbackWidget" | "mobileHelp" | "OutboundEmail" | "phone" | "portal", "tags"?: string, "type"?: "Feature Request" | "Incident" | "Problem" | "Question" | "Refund" };

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 5
     * Type options: {"minValue":1,"maxValue":10}
     */
    readonly limit?: number;

    /**
     * Name of the contact
     */
    readonly name?: string;

    /**
     * Primary email address of the contact. If you want to associate additional email(s) with this contact, use the other_emails attribute.
     */
    readonly email?: string;

    readonly contactId?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "address"?: string, "company_id"?: number, "customFields"?: { "customField": any }, "description"?: string, "email"?: string, "job_title"?: string, "language"?: string, "mobile"?: string, "name"?: string, "other_companies"?: string, "other_emails"?: string, "phone"?: string, "tags"?: string, "time_zone"?: string, "twitter_id"?: string, "unique_external_id"?: string, "view_all_tickets"?: boolean };

    /**
     * Default: {}
     */
    readonly filters?: { "company_id"?: number, "email"?: string, "mobile"?: string, "phone"?: string, "state"?: "blocked" | "deleted" | "unverified" | "verified", "updated_since"?: string };


}

