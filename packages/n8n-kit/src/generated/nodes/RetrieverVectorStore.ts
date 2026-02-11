// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/retrievers/RetrieverVectorStore/RetrieverVectorStore.node.ts' node

export const description = "Use a Vector Store as Retriever" as const;
export const type = "@n8n/n8n-nodes-langchain.retrieverVectorStore" as const;
export const version = 1 as const;
export const inputs = {"Vector Store":"ai_vectorStore"} as const;
export const outputs = {"ai_retriever":"ai_retriever"} as const;

export interface RetrieverVectorStoreNodeParameters {
    /**
     * The maximum number of results to return
     * Default: 4
     */
    readonly topK?: number;

}
