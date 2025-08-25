// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Google/Task/GoogleTasks.node.ts' node

export const description = "Consume Google Tasks API" as const;
export const type = "n8n-nodes-base.googleTasks" as const;
export const version = 1 as const;
export const credentials = [{"name":"googleTasksOAuth2Api","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface GoogleTasksNodeParameters {
    /** Default: "task" */
    readonly resource?: "task";

    /** Default: "create" */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getTasks"}
     */
    readonly task?: string;

    /** Title of the task */
    readonly title?: string;

    /** Default: {} */
    readonly additionalFields?: { completed?: string, deleted?: boolean, dueDate?: string, notes?: string, parent?: string, previous?: string, status?: "needsAction" | "completed" } | { completedMax?: string, completedMin?: string, dueMin?: string, dueMax?: string, showCompleted?: boolean, showDeleted?: boolean, showHidden?: boolean, updatedMin?: string };

    readonly taskId?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 20
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly updateFields?: { completed?: string, deleted?: boolean, dueDate?: string, notes?: string, previous?: string, status?: "needsAction" | "completed", title?: string };

}
