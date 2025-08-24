// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Clockify/Clockify.node.ts' node

export const description = "Consume Clockify REST API" as const;
export const type = "n8n-nodes-base.clockify" as const;
export const version = 1 as const;
export const credentials = [{"name":"clockifyApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface ClockifyNodeParameters {
    /** Default: "project" */
    readonly resource?: "client" | "project" | "tag" | "task" | "timeEntry" | "user" | "workspace";

    /** Default: "create" */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "getAll" | "update" | "create" | "delete" | "get" | "update" | "getAll";

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Default: []
     * Type options: {"loadOptionsMethod":"listWorkspaces"}
     */
    readonly workspaceId?: string;

    /** Name of client being created */
    readonly name?: string;

    readonly clientId?: string;

    /** Default: {} */
    readonly additionalFields?: { "archived"?: boolean, "name"?: string, "sort-order"?: "ASCENDING" | "DESCENDING" } | { "billable"?: boolean, "color"?: string, "clientId"?: string, "estimateUi"?: { "estimateValues": any }, "isPublic"?: boolean, "note"?: string } | { "archived"?: boolean, "billable"?: boolean, "clients"?: any[], "contains-client"?: boolean, "client-status"?: "ACTIVE" | "ARCHIVED", "contains-user"?: boolean, "is-template"?: boolean, "name"?: string, "sort-column"?: "NAME" | "CLIENT_NAME" | "DURATION", "sort-order"?: "ASCENDING" | "DESCENDING", "users"?: string, "user-status"?: "ACTIVE" | "ARCHIVED" } | { "archived"?: boolean, "name"?: string, "sort-column"?: "NAME", "sort-order"?: "ASCENDING" | "DESCENDING" } | { "assigneeIds"?: any[], "estimate"?: string } | { "email"?: string, "name"?: string, "status"?: "ACTIVE" | "INACTIVE" | "PENDING" | "DECLINED", "sort-column"?: "EMAIL" | "NAME" | "HOURLYRATE", "sort-order"?: "ASCENDING" | "DESCENDING" } | { "billable"?: boolean, "customFieldsUi"?: { "customFieldsValues": any }, "description"?: string, "end"?: string, "projectId"?: string, "tagIds"?: any[], "taskId"?: string } | { "consider-duration-format"?: boolean, "hydrated"?: boolean };

    /** Default: {} */
    readonly updateFields?: { "address"?: string, "archived"?: boolean } | { "billable"?: boolean, "color"?: string, "clientId"?: string, "estimateUi"?: { "estimateValues": any }, "isPublic"?: boolean, "name"?: string, "note"?: string } | { "archived"?: boolean, "name"?: string } | { "assigneeIds"?: any[], "estimate"?: string, "name"?: string, "status"?: "ACTIVE" | "DONE" } | { "billable"?: boolean, "customFieldsUi"?: { "customFieldsValues": any }, "description"?: string, "end"?: string, "projectId"?: string, "start"?: string, "tagIds"?: any[], "taskId"?: string };

    readonly projectId?: string;

    readonly tagId?: string;

    /** ID of task to delete */
    readonly taskId?: string;

    /** Default: {} */
    readonly filters?: { "is-active"?: boolean, "name"?: string, "sort-column"?: "NAME", "sort-order"?: "ASCENDING" | "DESCENDING" };

    readonly start?: string;

    readonly timeEntryId?: string;

}
