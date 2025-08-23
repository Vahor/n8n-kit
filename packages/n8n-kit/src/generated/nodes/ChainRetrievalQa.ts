// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/chains/ChainRetrievalQA/ChainRetrievalQa.node.ts' node

export const description = "Answer questions about retrieved documents" as const;
export const type = "@n8n/n8n-nodes-langchain.chainRetrievalQa" as const;
export const version = 1.6 as const;
export const credentials = [] as const;
export const inputs = {"main":"main","Model":"ai_languageModel","Retriever":"ai_retriever"} as const;
export const outputs = {"main":"main"} as const;

export interface ChainRetrievalQaNodeParameters {
    readonly notice?: string;

    /**
     * Default: "={{ $json.input }}"
     */
    readonly query?: string;

    /**
     * Default: "auto"
     */
    readonly promptType?: "auto" | "define";

    /**
     * Default: "={{ $json.chatInput }}"
     * Type options: {"rows":2}
     */
    readonly text?: string;

    /**
     * Default: {}
     */
    readonly options?: { "systemPromptTemplate"?: string, "batching"?: { "batchSize"?: number, "delayBetweenBatches"?: number } };

}
