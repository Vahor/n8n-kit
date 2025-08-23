// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/vector_store/VectorStoreSupabaseInsert/VectorStoreSupabaseInsert.node.ts' node

export const name = "vectorStoreSupabaseInsert" as const;
export const description = "Insert data into Supabase Vector Store index [https://supabase.com/docs/guides/ai/langchain]" as const;
export const version = 1 as const;
export const credentials = [{"name":"supabaseApi","required":true}] as const;

/**
 * Insert data into Supabase Vector Store index [https://supabase.com/docs/guides/ai/langchain]
 */
export interface VectorStoreSupabaseInsertAINodeParameters {

    /**
     */
    readonly setupNotice?: string;

    /**
     * Default: {"mode":"list","value":""}
     */
    readonly tableName: any;

    /**
     * Name of the query to use for matching documents
     * Default: "match_documents"
     */
    readonly queryName: string;

    /**
     */
    readonly notice?: string;


}

