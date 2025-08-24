// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/embeddings/EmbeddingsGoogleVertex/EmbeddingsGoogleVertex.node.ts' node

export const description = "Use Google Vertex Embeddings" as const;
export const type = "@n8n/n8n-nodes-langchain.embeddingsGoogleVertex" as const;
export const version = 1 as const;
export const credentials = [{"name":"googleApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"ai_embedding":"ai_embedding"} as const;

export interface EmbeddingsGoogleVertexNodeParameters {
    /**
     * Select or enter your Google Cloud project ID
     * Default: {"mode":"list","value":""}
     */
    readonly projectId?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * The model which will generate the embeddings. <a href="https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/text-embeddings-api">Learn more</a>.
     * Default: "text-embedding-005"
     */
    readonly modelName?: string;

}
