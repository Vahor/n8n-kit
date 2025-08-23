// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/vector_store/VectorStoreSupabaseInsert/VectorStoreSupabaseInsert.node.ts' node

export const description = "Insert data into Supabase Vector Store index [https://supabase.com/docs/guides/ai/langchain]" as const;
export const type = "@n8n/n8n-nodes-langchain.vectorStoreSupabaseInsert" as const;
export const version = 1 as const;
export const credentials = [{"name":"supabaseApi","required":true}] as const;
export const inputs = {"main":"main","Document":"ai_document","Embedding":"ai_embedding"} as const;
export const outputs = {"main":"main"} as const;

export interface VectorStoreSupabaseInsertNodeParameters {
    readonly setupNotice?: string;

    /**
     * Default: {"mode":"list","value":""}
     */
    readonly tableName?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Name of the query to use for matching documents
     * Default: "match_documents"
     */
    readonly queryName?: string;

    readonly notice?: string;

}
