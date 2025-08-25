// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/retrievers/RetrieverMultiQuery/RetrieverMultiQuery.node.ts' node

export const description = "Automates prompt tuning, generates diverse queries and expands document pool for enhanced retrieval." as const;
export const type = "@n8n/n8n-nodes-langchain.retrieverMultiQuery" as const;
export const version = 1 as const;
export const inputs = {"Model":"ai_languageModel","Retriever":"ai_retriever"} as const;
export const outputs = {"Retriever":"ai_retriever"} as const;

export interface RetrieverMultiQueryNodeParameters {
    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { queryCount?: number };

}
