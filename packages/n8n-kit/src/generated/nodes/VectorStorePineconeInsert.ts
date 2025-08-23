// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/vector_store/VectorStorePineconeInsert/VectorStorePineconeInsert.node.ts' node

export const description = "Insert data into Pinecone Vector Store index" as const;
export const type = "@n8n/n8n-nodes-langchain.vectorStorePineconeInsert" as const;
export const version = 1 as const;
export const credentials = [{"name":"pineconeApi","required":true}] as const;

/**
 * Insert data into Pinecone Vector Store index
 */
export interface VectorStorePineconeInsertNodeParameters {

    /**
     * Default: {"mode":"list","value":""}
     */
    readonly pineconeIndex?: any;

    readonly pineconeNamespace?: string;

    readonly notice?: string;

    /**
     * Whether to clear the namespace before inserting new data
     */
    readonly clearNamespace?: boolean;


}

