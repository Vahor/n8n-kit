// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/rerankers/RerankerCohere/RerankerCohere.node.ts' node

export const description = "Use Cohere Reranker to reorder documents after retrieval from a vector store by relevance to the given query." as const;
export const type = "@n8n/n8n-nodes-langchain.rerankerCohere" as const;
export const version = 1 as const;
export const credentials = [{"name":"cohereApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"ai_reranker":"ai_reranker"} as const;

export interface RerankerCohereNodeParameters {
    /**
     * The model that should be used to rerank the documents. <a href="https://docs.cohere.com/docs/models">Learn more</a>.
     * Default: "rerank-v3.5"
     */
    readonly modelName?: "rerank-v3.5" | "rerank-english-v3.0" | "rerank-multilingual-v3.0";

    /**
     * The maximum number of documents to return after reranking
     * Default: 3
     */
    readonly topN?: number;

}
