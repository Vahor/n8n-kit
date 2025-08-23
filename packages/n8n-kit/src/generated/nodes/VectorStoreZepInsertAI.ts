// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/vector_store/VectorStoreZepInsert/VectorStoreZepInsert.node.ts' node

export const name = "vectorStoreZepInsert" as const;
export const description = "Insert data into Zep Vector Store index" as const;
export const version = 1 as const;
export const credentials = [{"name":"zepApi","required":true}] as const;

/**
 * Insert data into Zep Vector Store index
 */
export interface VectorStoreZepInsertAINodeParameters {

    readonly deprecationNotice?: string;

    readonly collectionName: string;

    readonly notice?: string;

    /**
     * Default: {}
     */
    readonly options?: { "embeddingDimensions"?: number, "isAutoEmbedded"?: boolean };


}

