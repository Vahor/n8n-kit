// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/output_parser/OutputParserAutofixing/OutputParserAutofixing.node.ts' node

export const description = "Deprecated, use structured output parser" as const;
export const type = "@n8n/n8n-nodes-langchain.outputParserAutofixing" as const;
export const version = 1 as const;
export const inputs = {"Model":"ai_languageModel","Output Parser":"ai_outputParser"} as const;
export const outputs = {"ai_outputParser":"ai_outputParser"} as const;

export interface OutputParserAutofixingNodeParameters {
    /** Default: {} */
    readonly options?: { prompt?: string };

}
