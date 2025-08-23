// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Todoist/v1/TodoistV1.node.ts' node

export const description = "Consume Todoist API" as const;
export const type = "n8n-nodes-base.todoist" as const;
export const version = 1 as const;
export const credentials = [{"name":"todoistApi","required":true,"displayOptions":{"show":{"authentication":["apiKey"]}}},{"name":"todoistOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface TodoistV1NodeParameters {
    /**
     * Default: "apiKey"
     */
    readonly authentication?: "apiKey" | "oAuth2";

    /**
     * Default: "task"
     */
    readonly resource?: "task";

    /**
     * Default: "create"
     */
    readonly operation?: "close" | "create" | "delete" | "get" | "getAll" | "move" | "reopen" | "update";

    readonly taskId?: string;

    /**
     * The project you want to operate on. Choose from the list, or specify an ID.
     * Default: {"mode":"list","value":""}
     */
    readonly project?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Section to which you want move the task. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getSections","loadOptionsDependsOn":["project"]}
     */
    readonly section?: string;

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
     * Sync body
     * Default: "[]"
     */
    readonly commands?: string;

    /**
     * Default: {}
     */
    readonly options?: { "description"?: string, "dueDateTime"?: string, "dueLang"?: string, "dueString"?: string, "parentId"?: string, "priority"?: number, "section"?: string };

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly filters?: { "filter"?: string, "ids"?: string, "labelId"?: string, "lang"?: string, "parentId"?: string, "projectId"?: string, "sectionId"?: string };

    /**
     * Default: {}
     */
    readonly updateFields?: { "content"?: string, "description"?: string, "dueDateTime"?: string, "dueLang"?: string, "dueString"?: string, "labels"?: any[], "priority"?: number };

}
