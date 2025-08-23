// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/rerankers/RerankerCohere/RerankerCohere.node.ts' node

export const name = "rerankerCohere" as const;
export const description = "Use Cohere Reranker to reorder documents after retrieval from a vector store by relevance to the given query." as const;
export const version = 1 as const;
export const credentials = [{"name":"cohereApi","required":true}] as const;

/**
 * Use Cohere Reranker to reorder documents after retrieval from a vector store by relevance to the given query.
 */
export interface RerankerCohereAINodeParameters {

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

