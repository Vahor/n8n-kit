// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/vector_store/VectorStorePineconeLoad/VectorStorePineconeLoad.node.ts' node

export const description = "Load data from Pinecone Vector Store index" as const;
export const type = "@n8n/n8n-nodes-langchain.vectorStorePineconeLoad" as const;
export const version = 1 as const;
export const credentials = [{"name":"pineconeApi","required":true}] as const;
export const inputs = {"Embedding":"ai_embedding"} as const;
export const outputs = {"ai_vectorStore":"ai_vectorStore"} as const;

export interface VectorStorePineconeLoadNodeParameters {
    /** Default: {"mode":"list","value":""} */
    readonly pineconeIndex?: {
	value: string,
	mode: "list" | "id",
};

    readonly pineconeNamespace?: string;

    /** Default: {} */
    readonly options?: { metadata?: { metadataValues: Array<{ name: string, value?: string }> } };

}
