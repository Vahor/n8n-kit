// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/vector_store/VectorStorePineconeLoad/VectorStorePineconeLoad.node.ts' node

export const name = "vectorStorePineconeLoad" as const;
export const description = "Load data from Pinecone Vector Store index" as const;
export const version = 1 as const;
export const credentials = [{"name":"pineconeApi","required":true}] as const;

/**
 * Load data from Pinecone Vector Store index
 */
export interface VectorStorePineconeLoadNodeParameters {

    /**
     * Default: {"mode":"list","value":""}
     */
    readonly pineconeIndex: any;

    /**
     */
    readonly pineconeNamespace?: string;

    /**
     * Default: {}
     */
    readonly options?: { "metadata"?: { "metadataValues": any } };


}

