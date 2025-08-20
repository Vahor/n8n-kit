// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Microsoft/ToDo/MicrosoftToDo.node.ts' node

export const name = "microsoftToDo" as const;
export const description = "Consume Microsoft To Do API." as const;
export const version = 1 as const;
export const defaults = {"name":"Microsoft To Do"} as const;
export const credentials = [{"name":"microsoftToDoOAuth2Api","required":true}] as const

/**
 * Consume Microsoft To Do API.
 */
export interface MicrosoftToDoNodeParameters {

    /**
     * Default: "task"
     */
    readonly resource?: "linkedResource" | "list" | "task";

    /**
     * Default: "get"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getTaskLists"}
     */
    readonly taskListId?: string;

    /**
     */
    readonly taskId?: string;

    /**
     * Field indicating title of the linked entity
     */
    readonly displayName?: string;

    /**
     * App name of the source that is sending the linked entity
     */
    readonly applicationName?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "externalId"?: string, "webUrl"?: string, "content"?: string, "dueDateTime"?: any, "reminderDateTime"?: any, "importance"?: "low" | "normal" | "high", "status"?: "notStarted" | "inProgress" | "completed" | "waitingOnOthers" | "deferred" };

    /**
     */
    readonly linkedResourceId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly updateFields?: { "applicationName"?: string, "displayName"?: string, "externalId"?: string, "webUrl"?: string, "content"?: string, "dueDateTime"?: any, "reminderDateTime"?: any, "importance"?: "low" | "normal" | "high", "status"?: "notStarted" | "inProgress" | "completed" | "waitingOnOthers" | "deferred", "title"?: string };

    /**
     * A brief description of the task
     */
    readonly title?: string;

    /**
     * The identifier of the list, unique in the user's mailbox
     */
    readonly listId?: string;


}

