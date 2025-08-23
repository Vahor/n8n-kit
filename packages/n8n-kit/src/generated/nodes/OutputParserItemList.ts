// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/output_parser/OutputParserItemList/OutputParserItemList.node.ts' node

export const name = "outputParserItemList" as const;
export const description = "Return the results as separate items" as const;
export const version = 1 as const;

/**
 * Return the results as separate items
 */
export interface OutputParserItemListNodeParameters {

    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    /**
     * Default: {}
     */
    readonly options?: { "numberOfItems"?: number, "separator"?: string };


}

