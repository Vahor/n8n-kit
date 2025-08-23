// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/vector_store/VectorStoreInMemory/VectorStoreInMemory.node.ts' node

export const name = "vectorStoreInMemory" as const;
export const description = "The easiest way to experiment with vector stores, without external setup." as const;
export const version = 1.3 as const;

/**
 * The easiest way to experiment with vector stores, without external setup.
 */
export interface VectorStoreInMemoryNodeParameters {

    /**
     * Type options: {"calloutAction":{"label":"RAG starter template","type":"openSampleWorkflowTemplate","templateId":"rag-starter-template"}}
     */
    readonly ragStarterCallout?: any;

    /**
     * Default: "retrieve"
     */
    readonly mode?: "load" | "insert" | "retrieve" | "retrieve-as-tool";

    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    /**
     * Name of the vector store
     */
    readonly toolName?: string;

    /**
     * Explain to the LLM what this tool does, a good, specific description would allow LLMs to produce expected results much more often
     * Type options: {"rows":2}
     */
    readonly toolDescription?: string;

    /**
     * The key to use to store the vector memory in the workflow data. The key will be prefixed with the workflow ID to avoid collisions.
     * Default: "vector_store_key"
     */
    readonly memoryKey?: string | any;

    /**
     * Number of documents to embed in a single batch
     * Default: 200
     */
    readonly embeddingBatchSize?: number;

    /**
     * Whether to clear the store before inserting new data
     */
    readonly clearStore?: boolean;

    /**
     * Search prompt to retrieve matching documents from the vector store using similarity-based ranking
     */
    readonly prompt?: string;

    /**
     * Number of top results to fetch from vector store
     * Default: 4
     */
    readonly topK?: number;

    /**
     * Whether or not to include document metadata
     * Default: true
     */
    readonly includeDocumentMetadata?: boolean;

    /**
     * Whether or not to rerank results
     */
    readonly useReranker?: boolean;

    /**
     * ID of an embedding entry
     */
    readonly id?: string;


}

