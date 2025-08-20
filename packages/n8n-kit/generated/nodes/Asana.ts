// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Asana/Asana.node.ts' node

export const name = "asana" as const;
export const description = "Consume Asana REST API" as const;
export const version = 1 as const;
export const defaults = {"name":"Asana"} as const;
export const credentials = [{"name":"asanaApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}},"testedBy":{"request":{"method":"GET","url":"/users/me"}}},{"name":"asanaOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const

/**
 * Consume Asana REST API
 */
export interface AsanaNodeParameters {

    /**
     * Default: "accessToken"
     */
    readonly authentication?: "accessToken" | "oAuth2";

    /**
     * Default: "task"
     */
    readonly resource?: "project" | "subtask" | "task" | "taskComment" | "taskProject" | "taskTag" | "user";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "getAll" | "delete" | "get" | "move" | "search" | "update" | "add" | "remove";

    /**
     * The task to operate on
     */
    readonly taskId?: string;

    /**
     * The name of the subtask to create
     */
    readonly name?: string;

    /**
     * Default: {}
     */
    readonly otherProperties?: { "assignee"?: string, "assignee_status"?: "inbox" | "today" | "upcoming" | "later", "completed"?: boolean, "due_on"?: string, "liked"?: boolean, "notes"?: string, "workspace"?: string, "name"?: string, "projects"?: string[] };

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
     * Default: {}
     */
    readonly options?: { "opt_fields"?: string[], "opt_pretty"?: boolean };

    /**
     * The workspace to create the task in. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getWorkspaces"}
     */
    readonly workspace?: string;

    /**
     * The ID of the task to delete
     */
    readonly id?: string;

    /**
     * Properties to search for
     * Default: {}
     */
    readonly filters?: { "assignee"?: string, "opt_fields"?: string[], "opt_pretty"?: boolean, "project"?: string, "section"?: string, "workspace"?: string, "completed_since"?: string, "modified_since"?: string };

    /**
     * Project to show the sections of. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getProjects"}
     */
    readonly projectId?: string;

    /**
     * The Section to move the task to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsDependsOn":["projectId"],"loadOptionsMethod":"getSections"}
     */
    readonly section?: string;

    /**
     * Properties to search for
     * Default: {}
     */
    readonly searchTaskProperties?: { "completed"?: boolean, "text"?: string };

    /**
     * Whether body is HTML or simple text
     */
    readonly isTextHtml?: boolean;

    /**
     * The plain text of the comment to add
     */
    readonly text?: string;

    /**
     * Properties of the task comment
     * Default: {}
     */
    readonly additionalFields?: { "is_pinned"?: boolean, "insert_after"?: string, "insert_before"?: string, "section"?: string, "color"?: string, "due_on"?: string, "notes"?: string, "privacy_setting"?: "private" | "private_to_team" | "public_to_workspace", "archived"?: boolean, "team"?: string };

    /**
     * The project where the task will be added. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getProjects"}
     */
    readonly project?: string;

    /**
     * The tag that should be added. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsDependsOn":["id"],"loadOptionsMethod":"getTags"}
     */
    readonly tag?: string;

    /**
     * An identifier for the user to get data of. Can be one of an email address,the globally unique identifier for the user, or the keyword me to indicate the current user making the request.
     */
    readonly userId?: string;

    /**
     * The team this project will be assigned to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsDependsOn":["workspace"],"loadOptionsMethod":"getTeams"}
     */
    readonly team?: string;

    /**
     * Other properties to set
     * Default: {}
     */
    readonly updateFields?: { "color"?: string, "due_on"?: string, "name"?: string, "notes"?: string, "owner"?: string, "privacy_setting"?: "private" | "private_to_team" | "public_to_workspace", "team"?: string };


}

