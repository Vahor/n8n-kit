// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Gitlab/Gitlab.node.ts' node

export const name = "gitlab" as const;
export const description = "Retrieve data from GitLab API" as const;
export const version = 1 as const;
export const defaults = {"name":"GitLab"} as const;
export const credentials = [{"name":"gitlabApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}}},{"name":"gitlabOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const

/**
 * Retrieve data from GitLab API
 */
export interface GitlabNodeParameters {

    /**
     * Default: "accessToken"
     */
    readonly authentication?: "accessToken" | "oAuth2";

    /**
     * Default: "issue"
     */
    readonly resource?: "file" | "issue" | "release" | "repository" | "user";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "createComment" | "edit" | "get" | "lock" | "getIssues" | "getRepositories" | "delete" | "getAll" | "update" | "list";

    /**
     * User, group or namespace of the project
     */
    readonly owner: string;

    /**
     * The name of the project
     */
    readonly repository: string;

    /**
     * The title of the issue
     */
    readonly title?: string;

    /**
     * The body of the issue
     * Type options: {"rows":5}
     */
    readonly body?: string;

    /**
     * Due Date for issue
     */
    readonly due_date?: string;

    /**
     * Default: {"label":""}
     * Type options: {"multipleValues":true,"multipleValueButtonText":"Add Label"}
     */
    readonly labels?: { "label"?: string };

    /**
     * Default: {"assignee":""}
     * Type options: {"multipleValues":true,"multipleValueButtonText":"Add Assignee"}
     */
    readonly assignee_ids?: { "assignee"?: number };

    /**
     * The number of the issue on which to create the comment on
     */
    readonly issueNumber?: number;

    /**
     * Default: {}
     * Type options: {"multipleValueButtonText":"Add Field"}
     */
    readonly editFields?: { "title"?: string, "description"?: string, "state"?: "closed" | "open", "labels"?: { "label"?: string }, "assignee_ids"?: { "assignee"?: string }, "due_date"?: string };

    /**
     * The reason to lock the issue
     * Default: "resolved"
     */
    readonly lockReason?: "off-topic" | "too heated" | "resolved" | "spam";

    /**
     * The tag of the release
     */
    readonly releaseTag?: string;

    /**
     * Default: {}
     * Type options: {"multipleValueButtonText":"Add Field"}
     */
    readonly additionalFields?: { "name"?: string, "description"?: string, "ref"?: string, "order_by"?: "created_at" | "released_at", "sort"?: "asc" | "desc", "milestones"?: string, "released_at"?: string };

    /**
     * The ID or URL-encoded path of the project
     */
    readonly projectId?: string;

    /**
     * The Git tag the release is associated with
     */
    readonly tag_name?: string;

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
     * Type options: {"multipleValueButtonText":"Add Filter"}
     */
    readonly getRepositoryIssuesFilters?: { "assignee_username"?: string, "author_username"?: string, "search"?: string, "labels"?: string, "updated_after"?: string, "state"?: "" | "closed" | "opened", "order_by"?: "created_at" | "updated_at" | "priority", "sort"?: "asc" | "desc" };

    /**
     * The file path of the file. Has to contain the full path or leave it empty for root folder.
     */
    readonly filePath?: string;

    /**
     * Page of results to display
     * Default: 1
     * Type options: {"minValue":1,"maxValue":1000}
     */
    readonly page?: number;

    /**
     * Additional fields to add
     * Default: {}
     */
    readonly additionalParameters?: { "ref"?: string, "recursive"?: boolean, "reference"?: string, "branchStart"?: any, "author"?: any, "encoding"?: any };

    /**
     * Whether to set the data of the file as binary property instead of returning the raw API response
     * Default: true
     */
    readonly asBinaryProperty?: boolean;

    /**
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * Whether the data to upload should be taken from binary field
     */
    readonly binaryData?: boolean;

    /**
     * The text content of the file
     */
    readonly fileContent?: string;

    /**
     */
    readonly commitMessage?: string;

    /**
     * Name of the new branch to create. The commit is added to this branch.
     */
    readonly branch?: string;


}

