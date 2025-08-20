// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Clockify/Clockify.node.ts' node

export const name = "clockify" as const;
export const description = "Consume Clockify REST API" as const;
export const version = 1 as const;
export const defaults = {"name":"Clockify"} as const;
export const credentials = [{"name":"clockifyApi","required":true}] as const

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
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     * Whether to return all results or only up to a given limit
     */
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
    readonly workspaceId: string;

    /**
     * Name of client being created
     */
    readonly name?: string;

    /**
     */
    readonly clientId?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "archived"?: boolean, "name"?: string, "sort-order"?: "ASCENDING" | "DESCENDING", "billable"?: boolean, "color"?: any, "clientId"?: string, "estimateUi"?: { "estimateValues": any }, "isPublic"?: boolean, "note"?: string, "clients"?: string[], "contains-client"?: boolean, "client-status"?: "ACTIVE" | "ARCHIVED", "contains-user"?: boolean, "is-template"?: boolean, "sort-column"?: "NAME" | "CLIENT_NAME" | "DURATION", "users"?: string, "user-status"?: "ACTIVE" | "ARCHIVED", "assigneeIds"?: string[], "estimate"?: string, "email"?: string, "status"?: "ACTIVE" | "INACTIVE" | "PENDING" | "DECLINED", "customFieldsUi"?: { "customFieldsValues": any }, "description"?: string, "end"?: any, "projectId"?: string, "tagIds"?: string[], "taskId"?: string, "consider-duration-format"?: boolean, "hydrated"?: boolean };

    /**
     * Default: {}
     */
    readonly updateFields?: { "address"?: string, "archived"?: boolean, "billable"?: boolean, "color"?: any, "clientId"?: string, "estimateUi"?: { "estimateValues": any }, "isPublic"?: boolean, "name"?: string, "note"?: string, "assigneeIds"?: string[], "estimate"?: string, "status"?: "ACTIVE" | "DONE", "customFieldsUi"?: { "customFieldsValues": any }, "description"?: string, "end"?: any, "projectId"?: string, "start"?: any, "tagIds"?: string[], "taskId"?: string };

    /**
     */
    readonly projectId?: string;

    /**
     */
    readonly tagId?: string;

    /**
     * ID of task to delete
     */
    readonly taskId?: string;

    /**
     * Default: {}
     */
    readonly filters?: { "is-active"?: boolean, "name"?: string, "sort-column"?: "NAME", "sort-order"?: "ASCENDING" | "DESCENDING" };

    /**
     */
    readonly start?: any;

    /**
     */
    readonly timeEntryId?: string;


}

