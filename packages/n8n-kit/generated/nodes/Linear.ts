// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Linear/Linear.node.js' node

export const name = "linear" as const;
export const description = "Consume Linear API" as const;
export const version = 1 as const;
export const defaults = {"name":"Linear"} as const;
export const credentials = [{"name":"linearApi","required":true,"testedBy":"linearApiTest","displayOptions":{"show":{"authentication":["apiToken"]}}},{"name":"linearOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const

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
    readonly resource?: "issue";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getTeams"}
     */
    readonly teamId?: string;

    /**
     */
    readonly title?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "assigneeId"?: string, "description"?: string, "priorityId"?: "1" | "2" | "3" | "4" | "0", "stateId"?: string };

    /**
     */
    readonly issueId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":300}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly updateFields?: { "assigneeId"?: string, "description"?: string, "priorityId"?: "1" | "2" | "3" | "3" | "0", "stateId"?: string, "teamId"?: string, "title"?: string };


}

