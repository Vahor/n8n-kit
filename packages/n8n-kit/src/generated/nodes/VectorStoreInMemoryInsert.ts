// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/vector_store/VectorStoreInMemoryInsert/VectorStoreInMemoryInsert.node.ts' node

export const name = "vectorStoreInMemoryInsert" as const;
export const description = "Insert data into an in-memory vector store" as const;
export const version = 1 as const;

/**
 * Insert data into an in-memory vector store
 */
export interface VectorStoreInMemoryInsertNodeParameters {

    readonly notice?: string;

    /**
     * Whether to clear the store before inserting new data
     */
    readonly clearStore?: boolean;

    /**
     * The key to use to store the vector memory in the workflow data. The key will be prefixed with the workflow ID to avoid collisions.
     * Default: "vector_store_key"
     */
    readonly memoryKey?: string;


}

