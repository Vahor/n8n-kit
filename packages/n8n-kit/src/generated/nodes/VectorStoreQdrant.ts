// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/vector_store/VectorStoreQdrant/VectorStoreQdrant.node.ts' node

export const name = "vectorStoreQdrant" as const;
export const description = "Work with your data in a Qdrant collection" as const;
export const version = 1.3 as const;
export const credentials = [{"name":"qdrantApi","required":true}] as const;

/**
 * Work with your data in a Qdrant collection
 */
export interface VectorStoreQdrantNodeParameters {

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
     * Default: {"mode":"list","value":""}
     */
    readonly qdrantCollection: any;

    /**
     * Number of documents to embed in a single batch
     * Default: 200
     */
    readonly embeddingBatchSize?: number;

    /**
     * Default: {}
     */
    readonly options?: { "collectionConfig"?: string } | { "searchFilterJson"?: string };

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

