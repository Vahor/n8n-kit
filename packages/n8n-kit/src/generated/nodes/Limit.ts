// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Transform/Limit/Limit.node.ts' node

export const description = "Restrict the number of items" as const;
export const type = "n8n-nodes-base.limit" as const;
export const version = 1 as const;

/**
 * Restrict the number of items
 */
export interface LimitNodeParameters {

    /**
     * If there are more items than this number, some are removed
     * Default: 1
     * Type options: {"minValue":1}
     */
    readonly maxItems?: number;

    /**
     * When removing items, whether to keep the ones at the start or the ending
     * Default: "firstItems"
     */
    readonly keep?: "firstItems" | "lastItems";


}

