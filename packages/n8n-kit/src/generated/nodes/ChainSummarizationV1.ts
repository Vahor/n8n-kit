// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/chains/ChainSummarization/V1/ChainSummarizationV1.node.ts' node

export const name = "undefined" as const;
export const description = "undefined" as const;
export const version = 1 as const;
export const credentials = [] as const;

/**
 * undefined
 */
export interface ChainSummarizationV1NodeParameters {

    /**
     */
    readonly notice?: string;

    /**
     * The type of summarization to run
     * Default: "map_reduce"
     */
    readonly type?: "map_reduce" | "refine" | "stuff";

    /**
     * Default: {}
     */
    readonly options?: { "combineMapPrompt"?: string, "prompt"?: string, "refinePrompt"?: string, "refineQuestionPrompt"?: string };


}

