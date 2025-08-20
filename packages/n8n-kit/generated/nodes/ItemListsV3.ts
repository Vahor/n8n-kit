// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/ItemLists/V3/ItemListsV3.node.ts' node

export const name = "itemLists" as const;
export const description = "Helper for working with lists of items and transforming arrays" as const;
export const version = 3.1 as const;
export const defaults = {"name":"Item Lists"} as const;
export const credentials = [] as const

/**
 * Helper for working with lists of items and transforming arrays
 */
export interface ItemListsV3NodeParameters {

    /**
     * Default: "itemList"
     */
    readonly resource?: any;

    /**
     * Default: "splitOutItems"
     */
    readonly operation?: "concatenateItems" | "limit" | "removeDuplicates" | "sort" | "splitOutItems" | "summarize";


}

