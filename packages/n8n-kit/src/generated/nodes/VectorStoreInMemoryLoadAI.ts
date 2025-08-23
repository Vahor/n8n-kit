// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/vector_store/VectorStoreInMemoryLoad/VectorStoreInMemoryLoad.node.ts' node

export const name = "vectorStoreInMemoryLoad" as const;
export const description = "Load embedded data from an in-memory vector store" as const;
export const version = 1 as const;

/**
 * Load embedded data from an in-memory vector store
 */
export interface VectorStoreInMemoryLoadAINodeParameters {

    /**
     * The key to use to store the vector memory in the workflow data. The key will be prefixed with the workflow ID to avoid collisions.
     * Default: "vector_store_key"
     */
    readonly memoryKey?: string;


}

