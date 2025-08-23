// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/ClickUp/ClickUp.node.ts' node

export const name = "clickUp" as const;
export const description = "Consume ClickUp API (Beta)" as const;
export const version = 1 as const;
export const credentials = [{"name":"clickUpApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}}},{"name":"clickUpOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;

/**
 * Consume ClickUp API (Beta)
 */
export interface ClickUpNodeParameters {

    /**
     * Default: "accessToken"
     */
    readonly authentication?: "accessToken" | "oAuth2";

    /**
     * Default: "task"
     */
    readonly resource?: "checklist" | "checklistItem" | "comment" | "folder" | "goal" | "goalKeyResult" | "list" | "spaceTag" | "task" | "taskDependency" | "taskList" | "taskTag" | "timeEntry" | "timeEntryTag";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "update" | "create" | "delete" | "getAll" | "update" | "create" | "delete" | "get" | "getAll" | "update" | "add" | "remove" | "create" | "delete" | "get" | "getAll" | "member" | "setCustomField" | "update" | "create" | "delete" | "create" | "delete" | "get" | "getAll" | "start" | "stop" | "update" | "add" | "getAll" | "remove" | "create" | "customFields" | "delete" | "get" | "getAll" | "member" | "update";

    readonly task?: string;

    readonly name?: string;

    readonly checklist?: string;

    /**
     * Default: {}
     */
    readonly updateFields?: { "name"?: string, "position"?: number } | { "assignee"?: string, "name"?: string, "parent"?: string, "resolved"?: boolean } | { "assignee"?: string, "commentText"?: string, "resolved"?: boolean } | { "name"?: string } | { "addOwners"?: string, "color"?: any, "description"?: string, "dueDate"?: string, "name"?: string, "removeOwners"?: string } | { "name"?: string, "note"?: string, "stepsCurrent"?: number, "stepsEnd"?: number, "stepsStart"?: number, "unit"?: string } | { "addAssignees"?: string, "content"?: string, "dueDate"?: string, "dueDateTime"?: boolean, "markdownContent"?: boolean, "name"?: string, "notifyAll"?: boolean, "parentId"?: string, "priority"?: number, "removeAssignees"?: string, "status"?: string, "startDate"?: string, "startDateTime"?: boolean, "timeEstimate"?: number } | { "assignee"?: string, "billable"?: boolean, "description"?: string, "duration"?: number, "start"?: string, "tags"?: any[], "task"?: string } | { "assignee"?: string, "content"?: string, "dueDate"?: string, "dueDateTime"?: boolean, "name"?: string, "priority"?: number, "unsetStatus"?: boolean };

    /**
     * Default: {}
     */
    readonly additionalFields?: { "assignee"?: string } | { "assignee"?: string, "notifyAll"?: boolean } | { "color"?: any, "description"?: string, "dueDate"?: string, "multipleOwners"?: boolean, "owners"?: string } | { "listIds"?: string, "owners"?: string, "stepsStart"?: number, "stepsEnd"?: number, "taskIds"?: string, "unit"?: string } | { "custom_task_ids"?: boolean, "team_id"?: string } | { "assignees"?: any[], "customFieldsJson"?: string, "content"?: string, "dueDate"?: string, "dueDateTime"?: boolean, "markdownContent"?: boolean, "notifyAll"?: boolean, "parentId"?: string, "priority"?: number, "startDate"?: string, "startDateTime"?: boolean, "status"?: string, "tags"?: any[], "timeEstimate"?: number } | { "assignee"?: string, "billable"?: boolean, "description"?: string, "tags"?: any[] } | { "billable"?: boolean, "description"?: string } | { "assignee"?: string, "content"?: string, "dueDate"?: string, "dueDateTime"?: boolean, "priority"?: number, "status"?: string };

    readonly checklistItem?: string;

    readonly commentOn?: "list" | "task" | "view";

    readonly id?: string;

    readonly commentText?: string;

    readonly comment?: string;

    readonly commentsOn?: "list" | "task" | "view";

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getTeams"}
     */
    readonly team?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getSpaces","loadOptionsDependsOn":["team"]}
     */
    readonly space?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getFolders","loadOptionsDependsOn":["space"]}
     */
    readonly folder?: string;

    /**
     * Default: {}
     */
    readonly filters?: { "archived"?: boolean } | { "archived"?: boolean, "assignees"?: any[], "customFieldsUi"?: { "customFieldsValues": any }, "dateCreatedGt"?: string, "dateCreatedLt"?: string, "dateUpdatedGt"?: string, "dateUpdatedLt"?: string, "dueDateGt"?: string, "dueDateLt"?: string, "includeClosed"?: boolean, "orderBy"?: "id" | "created" | "updated" | "dueDate", "statuses"?: any[], "subtasks"?: boolean, "tags"?: any[] } | { "end_date"?: string, "start_date"?: string };

    readonly goal?: string;

    readonly type?: "automatic" | "boolean" | "currency" | "number" | "percentage";

    readonly keyResult?: string;

    readonly taskId?: string;

    readonly tagName?: string;

    readonly listId?: string;

    /**
     * New name to set for the tag
     */
    readonly newName?: string;

    /**
     * Default: "#000000"
     */
    readonly foregroundColor?: any;

    /**
     * Default: "#000000"
     */
    readonly backgroundColor?: any;

    /**
     * Whether to return all results or only up to a given limit
     * Default: true
     */
    readonly returnAll?: boolean;

    readonly folderless?: boolean;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getFolderlessLists","loadOptionsDependsOn":["space"]}
     */
    readonly list?: string;

    /**
     * Whether to also fetch and include subtasks for this task
     */
    readonly includeSubtasks?: boolean;

    /**
     * Whether to include the markdown_description field in the response. This is important for preserving links in the description.
     */
    readonly includeMarkdownDescription?: boolean;

    /**
     * The ID of the field to add custom field to
     */
    readonly field?: string;

    /**
     * The value is JSON and will be parsed as such. Is needed if for example needed for labels which expects the value to be an array.
     */
    readonly jsonParse?: boolean;

    /**
     * The value to set on custom field
     */
    readonly value?: string;

    readonly dependsOnTask?: string;

    /**
     * Whether to return just the current running time entry
     */
    readonly running?: boolean;

    readonly timeEntry?: string;

    readonly start?: string;

    /**
     * Duration in minutes
     */
    readonly duration?: number;

    readonly archived?: boolean;

    readonly timeEntryIds?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly tagsUi?: { "tagsValues": any };

    /**
     * Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Default: []
     * Type options: {"loadOptionsMethod":"getTimeEntryTags","loadOptionsDependsOn":["teamId"]}
     */
    readonly tagNames?: any[];


}

