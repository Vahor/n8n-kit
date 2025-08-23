// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/vector_store/VectorStoreZepLoad/VectorStoreZepLoad.node.ts' node

export const name = "vectorStoreZepLoad" as const;
export const description = "Load data from Zep Vector Store index" as const;
export const version = 1 as const;
export const credentials = [{"name":"zepApi","required":true}] as const;

/**
 * Load data from Zep Vector Store index
 */
export interface VectorStoreZepLoadAINodeParameters {

    /**
     */
    readonly deprecationNotice?: string;

    /**
     */
    readonly collectionName: string;

    /**
     * Default: {}
     */
    readonly options?: { "embeddingDimensions"?: number, "metadata"?: { "metadataValues": any } };


}

