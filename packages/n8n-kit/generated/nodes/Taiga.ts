// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Taiga/Taiga.node.ts' node

export const name = "taiga" as const;
export const description = "Consume Taiga API" as const;
export const version = 1 as const;
export const defaults = {"name":"Taiga"} as const;
export const credentials = [{"name":"taigaApi","required":true}] as const

/**
 * Consume Taiga API
 */
export interface TaigaNodeParameters {

    /**
     * Default: "issue"
     */
    readonly resource?: "epic" | "issue" | "task" | "userStory";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     * ID of the project to which the epic belongs. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getProjects"}
     */
    readonly projectId?: string;

    /**
     */
    readonly subject?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "assigned_to"?: string, "blocked_note"?: string, "color"?: any, "description"?: string, "is_blocked"?: boolean, "tags"?: string[], "milestone"?: string, "priority"?: string, "severity"?: string, "status"?: string, "type"?: string, "taskboard_order"?: number, "user_story"?: string, "us_order"?: number, "backlog_order"?: number, "kanban_order"?: number, "sprint_order"?: number };

    /**
     * ID of the epic to delete
     */
    readonly epicId?: string;

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
    readonly filters?: { "assigned_to"?: string, "statusIsClosed"?: boolean, "orderBy"?: "assigned_to" | "created_date" | "modified_date" | "owner" | "priority" | "severity" | "status" | "subject" | "type", "owner"?: string, "priority"?: string, "role"?: string, "severity"?: string, "status"?: string, "tags"?: string[], "type"?: string, "milestone"?: string, "userStory"?: string, "epic"?: string, "statusIsArchived"?: boolean };

    /**
     * Default: {}
     */
    readonly updateFields?: { "assigned_to"?: string, "blocked_note"?: string, "color"?: any, "description"?: string, "is_blocked"?: boolean, "subject"?: string, "tags"?: string[], "milestone"?: string, "priority"?: string, "severity"?: string, "status"?: string, "type"?: string, "user_story"?: string, "us_order"?: number, "taskboard_order"?: number, "backlog_order"?: number, "kanban_order"?: number, "sprint_order"?: number };

    /**
     * ID of the issue to delete
     */
    readonly issueId?: string;

    /**
     * ID of the task to delete
     */
    readonly taskId?: string;

    /**
     * ID of the user story to delete
     */
    readonly userStoryId?: string;


}

