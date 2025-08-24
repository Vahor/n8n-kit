// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Todoist/v2/TodoistV2.node.ts' node

export const description = "Consume Todoist API" as const;
export const type = "n8n-nodes-base.todoist" as const;
export const version = 2.1 as const;
export const credentials = [{"name":"todoistApi","required":true,"displayOptions":{"show":{"authentication":["apiKey"]}}},{"name":"todoistOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface TodoistV2NodeParameters {
    /** Default: "apiKey" */
    readonly authentication?: "apiKey" | "oAuth2";

    /** Default: "task" */
    readonly resource?: "task" | "project" | "section" | "comment" | "label" | "reminder";

    /** Default: "create" */
    readonly operation?: "close" | "create" | "delete" | "get" | "getAll" | "move" | "quickAdd" | "reopen" | "update" | "archive" | "create" | "delete" | "get" | "getCollaborators" | "getAll" | "unarchive" | "update" | "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "getAll" | "update";

    readonly taskId?: string;

    /**
     * The destination project. Choose from the list, or specify an ID.
     * Default: {"mode":"list","value":""}
     */
    readonly project?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Section to which you want move the task. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getSections","loadOptionsDependsOn":["project.value"]}
     */
    readonly section?: string;

    /** Default: {} */
    readonly options?: { "section"?: string, "parent"?: string } | { "note"?: string, "reminder"?: string, "auto_reminder"?: boolean } | { "description"?: string, "dueDateTime"?: string, "dueLang"?: string, "dueString"?: string, "parentId"?: string, "priority"?: number, "section"?: string, "order"?: number, "dueDate"?: string, "assigneeId"?: string, "duration"?: number, "durationUnit"?: "minute" | "day", "deadlineDate"?: string };

    /**
     * Optional labels that will be assigned to a created task. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getLabels"}
     */
    readonly labels?: any[];

    /**
     * Task content
     * Type options: {"rows":5}
     */
    readonly content?: string;

    /**
     * Natural language text for quick adding task (e.g., "Buy milk @Grocery #shopping tomorrow"). It can include a due date in free form text, a project name starting with the "#" character (without spaces), a label starting with the "@" character, an assignee starting with the "+" character, a priority (e.g., p1), a deadline between "{}" (e.g. {in 3 days}), or a description starting from "//" until the end of the text.
     * Type options: {"rows":3}
     */
    readonly text?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly filters?: { "filter"?: string, "ids"?: string, "labelId"?: string, "lang"?: string, "parentId"?: string, "projectId"?: string, "sectionId"?: string };

    /** Default: {} */
    readonly updateFields?: { "content"?: string, "description"?: string, "dueDateTime"?: string, "dueLang"?: string, "dueString"?: string, "labels"?: any[], "priority"?: number, "order"?: number, "dueDate"?: string, "assigneeId"?: string, "duration"?: number, "durationUnit"?: "minute" | "day", "deadlineDate"?: string };

    /** The project ID - can be either a string or number */
    readonly projectId?: string;

    /** Name of the project */
    readonly name?: string;

    /** Default: {} */
    readonly projectOptions?: { "color"?: "berry_red" | "red" | "orange" | "yellow" | "olive_green" | "lime_green" | "green" | "mint_green" | "teal" | "sky_blue" | "light_blue" | "blue" | "grape" | "violet" | "lavender" | "magenta" | "salmon" | "charcoal" | "grey" | "taupe", "is_favorite"?: boolean, "parent_id"?: string, "view_style"?: "list" | "board" };

    /** Default: {} */
    readonly projectUpdateFields?: { "name"?: string, "color"?: "berry_red" | "red" | "orange" | "yellow" | "olive_green" | "lime_green" | "green" | "mint_green" | "teal" | "sky_blue" | "light_blue" | "blue" | "grape" | "violet" | "lavender" | "magenta" | "salmon" | "charcoal" | "grey" | "taupe", "is_favorite"?: boolean, "view_style"?: "list" | "board" };

    readonly sectionId?: string;

    /**
     * The project to add the section to
     * Default: {"mode":"list","value":""}
     */
    readonly sectionProject?: {
	value: string,
	mode: "list" | "id",
};

    /** Name of the section */
    readonly sectionName?: string;

    /** Default: {} */
    readonly sectionOptions?: { "order"?: number };

    /** Default: {} */
    readonly sectionUpdateFields?: { "name"?: string };

    /** Default: {} */
    readonly sectionFilters?: { "project_id"?: string };

    readonly commentId?: string;

    /** The ID of the task to comment on */
    readonly commentTaskId?: string;

    /**
     * Comment content
     * Type options: {"rows":3}
     */
    readonly commentContent?: string;

    /** Default: {} */
    readonly commentUpdateFields?: { "content"?: string };

    /** Default: {} */
    readonly commentFilters?: { "task_id"?: string, "project_id"?: string };

    readonly labelId?: string;

    /** Name of the label */
    readonly labelName?: string;

    /** Default: {} */
    readonly labelOptions?: { "color"?: "berry_red" | "red" | "orange" | "yellow" | "olive_green" | "lime_green" | "green" | "mint_green" | "teal" | "sky_blue" | "light_blue" | "blue" | "grape" | "violet" | "lavender" | "magenta" | "salmon" | "charcoal" | "grey" | "taupe", "order"?: number, "is_favorite"?: boolean };

    /** Default: {} */
    readonly labelUpdateFields?: { "name"?: string, "color"?: "berry_red" | "red" | "orange" | "yellow" | "olive_green" | "lime_green" | "green" | "mint_green" | "teal" | "sky_blue" | "light_blue" | "blue" | "grape" | "violet" | "lavender" | "magenta" | "salmon" | "charcoal" | "grey" | "taupe", "order"?: number, "is_favorite"?: boolean };

    readonly reminderId?: string;

    /** The ID of the task to attach reminder to */
    readonly itemId?: string;

    /**
     * How to specify when the reminder should trigger
     * Default: "natural_language"
     */
    readonly dueDateType?: "natural_language" | "full_day" | "floating_time" | "fixed_timezone";

    /** Human-readable date and time */
    readonly natural_language_representation?: string;

    /** Full-day date in YYYY-MM-DD format */
    readonly date?: string;

    /** Floating date and time (no timezone) */
    readonly datetime?: string;

    /** Timezone for the fixed timezone date */
    readonly timezone?: string;

    /** Default: {} */
    readonly reminderOptions?: { "type"?: "absolute" | "relative", "minute_offset"?: number, "notify_uid"?: string };

    /** Default: {} */
    readonly reminderUpdateFields?: { "due"?: { "string"?: string, "date"?: string, "datetime"?: string, "timezone"?: string }, "type"?: "absolute" | "relative", "minute_offset"?: number, "notify_uid"?: string };

}
