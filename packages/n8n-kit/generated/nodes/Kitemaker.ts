// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Kitemaker/Kitemaker.node.ts' node

export const name = "kitemaker" as const;
export const description = "Consume the Kitemaker GraphQL API" as const;
export const version = 1 as const;

/**
 * Consume the Kitemaker GraphQL API
 */
export interface KitemakerNodeParameters {

    /**
     * Default: "workItem"
     */
    readonly resource: "organization" | "space" | "user" | "workItem";

    /**
     * Default: "get"
     */
    readonly operation?: "get" | "getAll" | "getAll" | "create" | "get" | "getAll" | "update";

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean | boolean | boolean;

    /**
     * Max number of results to return
     * Default: 5
     * Type options: {"minValue":1,"maxValue":1000}
     */
    readonly limit?: number | number | number;

    /**
     * Title of the work item to create
     */
    readonly title?: string;

    /**
     * ID of the space to retrieve the work items from. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getSpaces"}
     */
    readonly spaceId?: string | string;

    /**
     * ID of the status to set on the item to create. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsDependsOn":["spaceId"],"loadOptionsMethod":"getStatuses"}
     */
    readonly statusId?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "description"?: string, "effort"?: "SMALL" | "MEDIUM" | "LARGE", "impact"?: "SMALL" | "MEDIUM" | "LARGE", "labelIds"?: string[], "memberIds"?: string[] };

    /**
     * ID of the work item to retrieve
     */
    readonly workItemId?: string | string;

    /**
     * Default: {}
     */
    readonly updateFields?: { "description"?: string, "effort"?: "SMALL" | "MEDIUM" | "LARGE", "impact"?: "SMALL" | "MEDIUM" | "LARGE", "statusId"?: string, "title"?: string };


}

