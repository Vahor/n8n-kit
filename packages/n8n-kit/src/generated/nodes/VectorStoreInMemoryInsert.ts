// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/vector_store/VectorStoreInMemoryInsert/VectorStoreInMemoryInsert.node.ts' node

export const description = "Insert data into an in-memory vector store" as const;
export const type = "@n8n/n8n-nodes-langchain.vectorStoreInMemoryInsert" as const;
export const version = 1 as const;
export const inputs = {"main":"main","Document":"ai_document","Embedding":"ai_embedding"} as const;
export const outputs = {"main":"main"} as const;

export interface VectorStoreInMemoryInsertNodeParameters {
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
