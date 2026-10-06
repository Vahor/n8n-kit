// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/vector_store/VectorStoreDatabricks/VectorStoreDatabricks.node.ts' node

export const description = "Work with your data in Databricks Vector Search" as const;
export const type = "@n8n/n8n-nodes-langchain.vectorStoreDatabricks" as const;
export const version = 1.3 as const;
export const credentials = [{"name":"databricksOAuth2Api","required":true}] as const;
export const inputs = {"custom":"custom"} as const;
export const outputs = {"custom":"custom"} as const;

export interface VectorStoreDatabricksNodeParameters {
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
    readonly databricksIndex?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Column that becomes the document text. Leave empty on a managed-embedding index to use its embedding source column. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getIndexColumns","loadOptionsDependsOn":["databricksIndex.value"]}
     */
    readonly contentColumn?: string;

    /** Default: {} */
    readonly options?: { metadataColumns?: unknown[], searchMode?: "ANN" | "HYBRID", searchFilterJson?: string };

    /**
     * Number of documents to embed in a single batch
     * Default: 200
     */
    readonly embeddingBatchSize?: number;

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
