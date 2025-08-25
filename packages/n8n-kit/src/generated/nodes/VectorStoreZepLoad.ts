// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/vector_store/VectorStoreZepLoad/VectorStoreZepLoad.node.ts' node

export const description = "Load data from Zep Vector Store index" as const;
export const type = "@n8n/n8n-nodes-langchain.vectorStoreZepLoad" as const;
export const version = 1 as const;
export const credentials = [{"name":"zepApi","required":true}] as const;
export const inputs = {"Embedding":"ai_embedding"} as const;
export const outputs = {"ai_vectorStore":"ai_vectorStore"} as const;

export interface VectorStoreZepLoadNodeParameters {
    readonly collectionName?: string;

    /** Default: {} */
    readonly options?: { embeddingDimensions?: number, metadata?: { metadataValues: { name: string, value?: string } } };

}
