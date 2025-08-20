// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Bubble/Bubble.node.ts' node

export const name = "bubble" as const;
export const description = "Consume the Bubble Data API" as const;
export const version = 1 as const;
export const defaults = {"name":"Bubble"} as const;
export const credentials = [{"name":"bubbleApi","required":true}] as const

/**
 * Consume the Bubble Data API
 */
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

    /**
     */
    readonly jsonParameters?: boolean;

    /**
     * Default: {}
     */
    readonly options?: { "filters"?: { "filter": any }, "filtersJson"?: any, "sort"?: { "sortValue": any } };


}

