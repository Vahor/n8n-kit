// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/embeddings/EmbeddingsCohere/EmbeddingsCohere.node.ts' node

export const description = "Use Cohere Embeddings" as const;
export const type = "@n8n/n8n-nodes-langchain.embeddingsCohere" as const;
export const version = 1 as const;
export const credentials = [{"name":"cohereApi","required":true}] as const;

/**
 * Use Cohere Embeddings
 */
export interface EmbeddingsCohereNodeParameters {

    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    /**
     * The model which will generate the embeddings. <a href="https://docs.cohere.com/docs/models">Learn more</a>.
     * Default: "embed-english-v2.0"
     */
    readonly modelName?: "embed-english-light-v2.0" | "embed-english-light-v3.0" | "embed-english-v2.0" | "embed-english-v3.0" | "embed-multilingual-light-v3.0" | "embed-multilingual-v2.0" | "embed-multilingual-v3.0";


}

