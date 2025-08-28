// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Taiga/Taiga.node.ts' node

export const description = "Consume Taiga API" as const;
export const type = "n8n-nodes-base.taiga" as const;
export const version = 1 as const;
export const credentials = [{"name":"taigaApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface TaigaNodeParameters {
    /** Default: "issue" */
    readonly resource?: "epic" | "issue" | "task" | "userStory";

    /** Default: "create" */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     * ID of the project to which the epic belongs. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getProjects"}
     */
    readonly projectId?: string;

    readonly subject?: string;

    /** Default: {} */
    readonly additionalFields?: { assigned_to?: string, blocked_note?: string, color?: string, description?: string, is_blocked?: boolean, tags?: unknown[] } | { assigned_to?: string, blocked_note?: string, description?: string, is_blocked?: boolean, milestone?: string, priority?: string, severity?: string, status?: string, tags?: unknown[], type?: string } | { assigned_to?: string, blocked_note?: string, description?: string, is_blocked?: boolean, milestone?: string, status?: string, tags?: unknown[], taskboard_order?: number, user_story?: string, us_order?: number } | { assigned_to?: string, backlog_order?: number, blocked_note?: string, description?: string, is_blocked?: boolean, kanban_order?: number, milestone?: string, sprint_order?: number, status?: string, tags?: unknown[], type?: string };

    /** ID of the epic to delete */
    readonly epicId?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly filters?: { assigned_to?: string, statusIsClosed?: boolean } | { assigned_to?: string, orderBy?: "assigned_to" | "created_date" | "modified_date" | "owner" | "priority" | "severity" | "status" | "subject" | "type", owner?: string, priority?: string, role?: string, severity?: string, status?: string, tags?: unknown[], type?: string } | { assigned_to?: string, statusIsClosed?: boolean, milestone?: string, owner?: string, role?: string, status?: string, tags?: unknown[], userStory?: string } | { assigned_to?: string, epic?: string, statusIsClosed?: boolean, statusIsArchived?: boolean, milestone?: string, role?: string, status?: string, tags?: unknown[] };

    /** Default: {} */
    readonly updateFields?: { assigned_to?: string, blocked_note?: string, color?: string, description?: string, is_blocked?: boolean, subject?: string, tags?: unknown[] } | { assigned_to?: string, blocked_note?: string, description?: string, is_blocked?: boolean, milestone?: string, priority?: string, severity?: string, status?: string, subject?: string, tags?: unknown[], type?: string } | { assigned_to?: string, blocked_note?: string, description?: string, is_blocked?: boolean, milestone?: string, status?: string, subject?: string, user_story?: string, us_order?: number, tags?: unknown[], taskboard_order?: number } | { assigned_to?: string, backlog_order?: number, blocked_note?: string, description?: string, is_blocked?: boolean, kanban_order?: number, milestone?: string, subject?: string, sprint_order?: number, status?: string, tags?: unknown[], type?: string };

    /** ID of the issue to delete */
    readonly issueId?: string;

    /** ID of the task to delete */
    readonly taskId?: string;

    /** ID of the user story to delete */
    readonly userStoryId?: string;

}
