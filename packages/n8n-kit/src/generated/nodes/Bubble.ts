// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Bubble/Bubble.node.ts' node

export const description = "Consume the Bubble Data API" as const;
export const type = "n8n-nodes-base.bubble" as const;
export const version = 1 as const;
export const credentials = [{"name":"bubbleApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface BubbleNodeParameters {
    /**
     * Default: "object"
     */
    readonly resource?: "object";

    /**
     * Default: "get"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     * Name of data type of the object to create
     */
    readonly typeName?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly properties?: { "property": any };

    /**
     * ID of the object to retrieve
     */
    readonly objectId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    readonly jsonParameters?: boolean;

    /**
     * Default: {}
     */
    readonly options?: { "filters"?: { "filter": any }, "filtersJson"?: string, "sort"?: { "sortValue": any } };

}
