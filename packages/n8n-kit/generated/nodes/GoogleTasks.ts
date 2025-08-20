// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Google/Task/GoogleTasks.node.ts' node

export const name = "googleTasks" as const;
export const description = "Consume Google Tasks API" as const;
export const version = 1 as const;
export const defaults = {"name":"Google Tasks"} as const;
export const credentials = [{"name":"googleTasksOAuth2Api","required":true}] as const

/**
 * Consume Google Tasks API
 */
export interface GoogleTasksNodeParameters {

    /**
     * Default: "task"
     */
    readonly resource?: "task";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getTasks"}
     */
    readonly task?: string;

    /**
     * Title of the task
     */
    readonly title?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "completed"?: any, "deleted"?: boolean, "dueDate"?: any, "notes"?: string, "parent"?: string, "previous"?: string, "status"?: "needsAction" | "completed", "completedMax"?: any, "completedMin"?: any, "dueMin"?: any, "dueMax"?: any, "showCompleted"?: boolean, "showDeleted"?: boolean, "showHidden"?: boolean, "updatedMin"?: any };

    /**
     */
    readonly taskId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 20
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly updateFields?: { "completed"?: any, "deleted"?: boolean, "dueDate"?: any, "notes"?: string, "previous"?: string, "status"?: "needsAction" | "completed", "title"?: string };


}

