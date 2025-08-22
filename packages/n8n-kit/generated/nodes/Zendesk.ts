// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Zendesk/Zendesk.node.ts' node

export const name = "zendesk" as const;
export const description = "Consume Zendesk API" as const;
export const version = 1 as const;

/**
 * Consume Zendesk API
 */
export interface ZendeskNodeParameters {

    /**
     * Default: "apiToken"
     */
    readonly authentication?: "apiToken" | "oAuth2";

    /**
     * Default: "ticket"
     */
    readonly resource?: "ticket" | "ticketField" | "user" | "organization";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "recover" | "update" | "get" | "getAll" | "create" | "delete" | "get" | "getAll" | "getOrganizations" | "getRelatedData" | "search" | "update" | "count" | "create" | "delete" | "get" | "getAll" | "getRelatedData" | "update";

    /**
     * The first comment on the ticket
     */
    readonly description?: string;

    /**
     */
    readonly jsonParameters?: boolean;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "customFieldsUi"?: { "customFieldsValues": any }, "externalId"?: string, "group"?: string, "recipient"?: string, "status"?: "closed" | "new" | "hold" | "open" | "pending" | "solved", "subject"?: string, "tags"?: string[], "type"?: "question" | "incident" | "problem" | "task" } | { "alias"?: string, "custom_role_id"?: number, "details"?: string, "email"?: string, "external_id"?: string, "locale"?: string, "moderator"?: boolean, "notes"?: string, "only_private_comments"?: boolean, "organization_id"?: string, "phone"?: string, "report_csv"?: boolean, "restricted_agent"?: boolean, "role"?: "end-user" | "agent" | "admin", "signature"?: string, "suspended"?: boolean, "tags"?: string[], "ticket_restriction"?: "organization" | "groups" | "assigned" | "requested", "time_zone"?: string, "userFieldsUi"?: { "userFieldValues": any }, "verified"?: boolean } | { "details"?: string, "domain_names"?: string, "notes"?: string, "organizationFieldsUi"?: { "organizationFieldValues": any }, "tags"?: string[] };

    /**
     * Object of values to set as described <a href="https://developer.zendesk.com/rest_api/docs/support/tickets">here</a>
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly additionalFieldsJson?: string;

    /**
     */
    readonly id?: string;

    /**
     * Default: {}
     */
    readonly updateFields?: { "assigneeEmail"?: string, "customFieldsUi"?: { "customFieldsValues": any }, "externalId"?: string, "group"?: string, "internalNote"?: string, "publicReply"?: string, "recipient"?: string, "status"?: "closed" | "new" | "hold" | "open" | "pending" | "solved", "subject"?: string, "tags"?: string[], "type"?: "question" | "incident" | "problem" | "task" } | { "alias"?: string, "custom_role_id"?: number, "details"?: string, "email"?: string, "external_id"?: string, "locale"?: string, "moderator"?: boolean, "name"?: string, "notes"?: string, "only_private_comments"?: boolean, "organization_id"?: string, "phone"?: string, "report_csv"?: boolean, "restricted_agent"?: boolean, "role"?: "end-user" | "agent" | "admin", "signature"?: string, "suspended"?: boolean, "tags"?: string[], "ticket_restriction"?: "organization" | "groups" | "assigned" | "requested", "time_zone"?: string, "userFieldsUi"?: { "userFieldValues": any }, "verified"?: boolean } | { "details"?: string, "domain_names"?: string, "name"?: string, "notes"?: string, "organizationFieldsUi"?: { "organizationFieldValues": any }, "tags"?: string[] };

    /**
     * Object of values to update as described <a href="https://developer.zendesk.com/rest_api/docs/support/tickets">here</a>
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly updateFieldsJson?: string;

    /**
     * Default: "regular"
     */
    readonly ticketType?: "regular" | "suspended";

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly options?: { "group"?: string, "query"?: string, "sortBy"?: "created_at" | "priority" | "status" | "ticket_type" | "updated_at", "sortOrder"?: "asc" | "desc", "status"?: "closed" | "new" | "hold" | "open" | "pending" | "solved" };

    /**
     */
    readonly ticketFieldId?: string;

    /**
     * The user's name
     */
    readonly name?: string;

    /**
     * Default: {}
     */
    readonly filters?: { "role"?: ("end-user" | "agent" | "admin")[] } | { "query"?: string, "external_id"?: string };


}

