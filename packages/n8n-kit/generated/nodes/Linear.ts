// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Linear/Linear.node.ts' node

export const name = "linear" as const;
export const description = "Consume Linear API" as const;
export const version = 1.1 as const;

/**
 * Consume Linear API
 */
export interface LinearNodeParameters {

    /**
     * Default: "apiToken"
     */
    readonly authentication?: "apiToken" | "oAuth2";

    /**
     * Default: "issue"
     */
    readonly resource?: "comment" | "issue";

    /**
     * Default: "addComment"
     */
    readonly operation?: "addComment" | "addLink" | "create" | "delete" | "get" | "getAll" | "update";

    /**
     */
    readonly issueId?: string | string | string;

    /**
     */
    readonly comment?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "parentId"?: string } | { "assigneeId"?: string, "description"?: string, "priorityId"?: "1" | "2" | "3" | "4" | "0", "stateId"?: string };

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getTeams"}
     */
    readonly teamId?: string;

    /**
     */
    readonly title?: string;

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
    readonly updateFields?: { "assigneeId"?: string, "description"?: string, "priorityId"?: "1" | "2" | "3" | "3" | "0", "stateId"?: string, "teamId"?: string, "title"?: string } | { "assigneeId"?: string, "description"?: string, "priorityId"?: "1" | "2" | "3" | "4" | "0", "stateId"?: string, "teamId"?: string, "title"?: string };

    /**
     */
    readonly link?: string;


}

