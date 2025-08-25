// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Bubble/Bubble.node.ts' node

export const description = "Consume the Bubble Data API" as const;
export const type = "n8n-nodes-base.bubble" as const;
export const version = 1 as const;
export const credentials = [{"name":"bubbleApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface BubbleNodeParameters {
    /** Default: "object" */
    readonly resource?: "object";

    /** Default: "get" */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /** Name of data type of the object to create */
    readonly typeName?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly properties?: { property: { key?: string, value?: string } };

    /** ID of the object to retrieve */
    readonly objectId?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    readonly jsonParameters?: boolean;

    /** Default: {} */
    readonly options?: { filters?: { filter: { key?: string, constraint_type?: "equals" | "not equal" | "is_empty" | "is_not_empty" | "text contains" | "not text contains" | "greater than" | "less than" | "in" | "not in" | "contains" | "not contains" | "empty" | "not empty" | "geographic_search", value?: string } }, filtersJson?: string, sort?: { sortValue: { sort_field?: string, descending?: boolean, geo_reference?: string } } };

}
