// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Kitemaker/Kitemaker.node.ts' node

export const description = "Consume the Kitemaker GraphQL API" as const;
export const type = "n8n-nodes-base.kitemaker" as const;
export const version = 1 as const;
export const credentials = [{"name":"kitemakerApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface KitemakerNodeParameters {
    /** Default: "workItem" */
    readonly resource?: "organization" | "space" | "user" | "workItem";

    /** Default: "get" */
    readonly operation?: "get" | "getAll" | "create" | "get" | "getAll" | "update";

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 5
     * Type options: {"minValue":1,"maxValue":1000}
     */
    readonly limit?: number;

    /** Title of the work item to create */
    readonly title?: string;

    /**
     * ID of the space to retrieve the work items from. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getSpaces"}
     */
    readonly spaceId?: string;

    /**
     * ID of the status to set on the item to create. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsDependsOn":["spaceId"],"loadOptionsMethod":"getStatuses"}
     */
    readonly statusId?: string;

    /** Default: {} */
    readonly additionalFields?: { description?: string, effort?: "SMALL" | "MEDIUM" | "LARGE", impact?: "SMALL" | "MEDIUM" | "LARGE", labelIds?: unknown[], memberIds?: unknown[] };

    /** ID of the work item to retrieve */
    readonly workItemId?: string;

    /** Default: {} */
    readonly updateFields?: { description?: string, effort?: "SMALL" | "MEDIUM" | "LARGE", impact?: "SMALL" | "MEDIUM" | "LARGE", statusId?: string, title?: string };

}
