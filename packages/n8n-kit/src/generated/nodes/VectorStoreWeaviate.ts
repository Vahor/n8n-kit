// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/vector_store/VectorStoreWeaviate/VectorStoreWeaviate.node.ts' node

export const description = "Work with your data in a Weaviate Cluster" as const;
export const type = "@n8n/n8n-nodes-langchain.vectorStoreWeaviate" as const;
export const version = 1.3 as const;
export const credentials = [{"name":"weaviateApi","required":true}] as const;
export const inputs = {"custom":"custom"} as const;
export const outputs = {"custom":"custom"} as const;

export interface VectorStoreWeaviateNodeParameters {
    /** Default: "retrieve" */
    readonly mode?: "load" | "insert" | "retrieve" | "retrieve-as-tool";

    /** Name of the vector store */
    readonly toolName?: string;

    /**
     * Explain to the LLM what this tool does, a good, specific description would allow LLMs to produce expected results much more often
     * Type options: {"rows":2}
     */
    readonly toolDescription?: string;

    /** Default: {"mode":"list","value":""} */
    readonly weaviateCollection?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Number of documents to embed in a single batch
     * Default: 200
     */
    readonly embeddingBatchSize?: number;

    /** Default: {} */
    readonly options?: { tenant?: string, textKey?: string, skip_init_checks?: boolean, timeout_init?: number, timeout_insert?: number, timeout_query?: number, proxy_grpc?: string, clearStore?: boolean } | { searchFilterJson?: string, metadataKeys?: string, tenant?: string, textKey?: string, skip_init_checks?: boolean, timeout_init?: number, timeout_insert?: number, timeout_query?: number, proxy_grpc?: string };

    /** Search prompt to retrieve matching documents from the vector store using similarity-based ranking */
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

    /** Whether or not to rerank results */
    readonly useReranker?: boolean;

    /** ID of an embedding entry */
    readonly id?: string;

}
