// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/embeddings/EmbeddingsOracleDB/EmbeddingsOracleDb.node.ts' node

export const description = "Use ONNX Embeddings" as const;
export const type = "@n8n/n8n-nodes-langchain.embeddingsOracleDb" as const;
export const version = 1 as const;
export const credentials = [{"name":"oracleDBApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"ai_embedding":"ai_embedding"} as const;

export interface EmbeddingsOracleDbNodeParameters {
    /**
     * The model. Choose from the list, or specify an ID.
     * Default: {"mode":"list","value":"ALL_MINILM_L12_V2"}
     */
    readonly model?: {
	value: string,
	mode: "list" | "id",
};

}
