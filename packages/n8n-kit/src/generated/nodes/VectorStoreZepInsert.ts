// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/vector_store/VectorStoreZepInsert/VectorStoreZepInsert.node.ts' node

export const description = "Insert data into Zep Vector Store index" as const;
export const type = "@n8n/n8n-nodes-langchain.vectorStoreZepInsert" as const;
export const version = 1 as const;
export const credentials = [{"name":"zepApi","required":true}] as const;
export const inputs = {"main":"main","Document":"ai_document","Embedding":"ai_embedding"} as const;
export const outputs = {"main":"main"} as const;

export interface VectorStoreZepInsertNodeParameters {
    readonly collectionName?: string;

    /**
     * Default: {}
     */
    readonly options?: { "embeddingDimensions"?: number, "isAutoEmbedded"?: boolean };

}
