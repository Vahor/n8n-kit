// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/vector_store/VectorStoreSupabaseLoad/VectorStoreSupabaseLoad.node.ts' node

export const description = "Load data from Supabase Vector Store index" as const;
export const type = "@n8n/n8n-nodes-langchain.vectorStoreSupabaseLoad" as const;
export const version = 1 as const;
export const credentials = [{"name":"supabaseApi","required":true}] as const;
export const inputs = {"Embedding":"ai_embedding"} as const;
export const outputs = {"ai_vectorStore":"ai_vectorStore"} as const;

export interface VectorStoreSupabaseLoadNodeParameters {
    /** Default: {"mode":"list","value":""} */
    readonly tableName?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Name of the query to use for matching documents
     * Default: "match_documents"
     */
    readonly queryName?: string;

    /** Default: {} */
    readonly options?: { metadata?: { metadataValues: { name: string, value?: string } } };

}
