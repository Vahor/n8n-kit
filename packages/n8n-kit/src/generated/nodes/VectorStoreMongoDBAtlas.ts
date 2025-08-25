// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/vector_store/VectorStoreMongoDBAtlas/VectorStoreMongoDBAtlas.node.ts' node

export const description = "Work with your data in MongoDB Atlas Vector Store" as const;
export const type = "@n8n/n8n-nodes-langchain.vectorStoreMongoDBAtlas" as const;
export const version = 1.3 as const;
export const credentials = [{"name":"mongoDb","required":true}] as const;
export const inputs = {"custom":"custom"} as const;
export const outputs = {"custom":"custom"} as const;

export interface VectorStoreMongoDBAtlasNodeParameters {
    /** Default: "retrieve" */
    readonly mode?: "load" | "insert" | "retrieve" | "retrieve-as-tool" | "update";

    /** Name of the vector store */
    readonly toolName?: string;

    /**
     * Explain to the LLM what this tool does, a good, specific description would allow LLMs to produce expected results much more often
     * Type options: {"rows":2}
     */
    readonly toolDescription?: string;

    /** Default: {"mode":"list","value":""} */
    readonly mongoCollection?: {
	value: string,
	mode: "list" | "name",
};

    /**
     * The field with the embedding array
     * Default: "embedding"
     */
    readonly embedding?: string;

    /**
     * The text field of the raw data
     * Default: "text"
     */
    readonly metadata_field?: string;

    /** The name of the vector index */
    readonly vectorIndexName?: string;

    /**
     * Number of documents to embed in a single batch
     * Default: 200
     */
    readonly embeddingBatchSize?: number;

    /** Default: {} */
    readonly options?: { clearNamespace?: boolean, namespace?: string } | { namespace?: string, metadata?: { metadataValues: Array<{ name: string, value?: string }> } };

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
