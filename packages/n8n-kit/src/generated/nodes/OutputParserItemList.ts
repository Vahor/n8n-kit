// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/output_parser/OutputParserItemList/OutputParserItemList.node.ts' node

export const description = "Return the results as separate items" as const;
export const type = "@n8n/n8n-nodes-langchain.outputParserItemList" as const;
export const version = 1 as const;
export const inputs = {} as const;
export const outputs = {"ai_outputParser":"ai_outputParser"} as const;

export interface OutputParserItemListNodeParameters {
    /** Default: {} */
    readonly options?: { numberOfItems?: number, separator?: string };

}
