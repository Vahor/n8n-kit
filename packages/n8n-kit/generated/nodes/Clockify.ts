// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Clockify/Clockify.node.ts' node

export const name = "clockify" as const;
export const description = "Consume Clockify REST API" as const;
export const version = 1 as const;

/**
 * Consume Clockify REST API
 */
export interface ClockifyNodeParameters {

    /**
     * Default: "project"
     */
    readonly resource?: "client" | "project" | "tag" | "task" | "timeEntry" | "user" | "workspace";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "getAll" | "update" | "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "get" | "update" | "getAll" | "getAll";

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean | boolean | boolean | boolean | boolean | boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number | number | number | number | number | number;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Default: []
     * Type options: {"loadOptionsMethod":"listWorkspaces"}
     */
    readonly workspaceId: string;

    /**
     * Name of client being created
     */
    readonly name?: string | string | string | string | string;

    /**
     */
    readonly clientId?: string | string | string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "archived"?: boolean, "name"?: string, "sort-order"?: "ASCENDING" | "DESCENDING" } | { "billable"?: boolean, "color"?: any, "clientId"?: string, "estimateUi"?: { "estimateValues": any }, "isPublic"?: boolean, "note"?: string } | { "archived"?: boolean, "billable"?: boolean, "clients"?: string[], "contains-client"?: boolean, "client-status"?: "ACTIVE" | "ARCHIVED", "contains-user"?: boolean, "is-template"?: boolean, "name"?: string, "sort-column"?: "NAME" | "CLIENT_NAME" | "DURATION", "sort-order"?: "ASCENDING" | "DESCENDING", "users"?: string, "user-status"?: "ACTIVE" | "ARCHIVED" } | { "archived"?: boolean, "name"?: string, "sort-column"?: "NAME", "sort-order"?: "ASCENDING" | "DESCENDING" } | { "assigneeIds"?: string[], "estimate"?: string } | { "email"?: string, "name"?: string, "status"?: "ACTIVE" | "INACTIVE" | "PENDING" | "DECLINED", "sort-column"?: "EMAIL" | "NAME" | "HOURLYRATE", "sort-order"?: "ASCENDING" | "DESCENDING" } | { "billable"?: boolean, "customFieldsUi"?: { "customFieldsValues": any }, "description"?: string, "end"?: string, "projectId"?: string, "tagIds"?: string[], "taskId"?: string } | { "consider-duration-format"?: boolean, "hydrated"?: boolean };

    /**
     * Default: {}
     */
    readonly updateFields?: { "address"?: string, "archived"?: boolean } | { "billable"?: boolean, "color"?: any, "clientId"?: string, "estimateUi"?: { "estimateValues": any }, "isPublic"?: boolean, "name"?: string, "note"?: string } | { "archived"?: boolean, "name"?: string } | { "assigneeIds"?: string[], "estimate"?: string, "name"?: string, "status"?: "ACTIVE" | "DONE" } | { "billable"?: boolean, "customFieldsUi"?: { "customFieldsValues": any }, "description"?: string, "end"?: string, "projectId"?: string, "start"?: string, "tagIds"?: string[], "taskId"?: string };

    /**
     */
    readonly projectId?: string | string | string | string;

    /**
     */
    readonly tagId?: string | string;

    /**
     * ID of task to delete
     */
    readonly taskId?: string | string | string;

    /**
     * Default: {}
     */
    readonly filters?: { "is-active"?: boolean, "name"?: string, "sort-column"?: "NAME", "sort-order"?: "ASCENDING" | "DESCENDING" };

    /**
     */
    readonly start?: string;

    /**
     */
    readonly timeEntryId?: string | string | string;


}

