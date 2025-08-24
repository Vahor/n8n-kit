// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/chains/ChainSummarization/V1/ChainSummarizationV1.node.ts' node

export const description = "Transforms text into a concise summary" as const;
export const type = "@n8n/n8n-nodes-langchain.chainSummarization" as const;
export const version = 1 as const;
export const credentials = [] as const;
export const inputs = {"main":"main","Model":"ai_languageModel","Document":"ai_document"} as const;
export const outputs = {"main":"main"} as const;

export interface ChainSummarizationV1NodeParameters {
    /**
     * The type of summarization to run
     * Default: "map_reduce"
     */
    readonly type?: "map_reduce" | "refine" | "stuff";

    /** Default: {} */
    readonly options?: { "combineMapPrompt"?: string, "prompt"?: string, "refinePrompt"?: string, "refineQuestionPrompt"?: string };

}
