// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/vector_store/VectorStoreSupabaseLoad/VectorStoreSupabaseLoad.node.ts' node

export const name = "vectorStoreSupabaseLoad" as const;
export const description = "Load data from Supabase Vector Store index" as const;
export const version = 1 as const;
export const credentials = [{"name":"supabaseApi","required":true}] as const;

/**
 * Load data from Supabase Vector Store index
 */
export interface VectorStoreSupabaseLoadAINodeParameters {

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
     * Default: {}
     */
    readonly options?: { "metadata"?: { "metadataValues": any } };


}

