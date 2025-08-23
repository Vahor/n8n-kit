// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/embeddings/EmbeddingsAzureOpenAi/EmbeddingsAzureOpenAi.node.ts' node

export const description = "Use Embeddings Azure OpenAI" as const;
export const type = "@n8n/n8n-nodes-langchain.embeddingsAzureOpenAi" as const;
export const version = 1 as const;
export const credentials = [{"name":"azureOpenAiApi","required":true}] as const;

/**
 * Use Embeddings Azure OpenAI
 */
export interface EmbeddingsAzureOpenAiNodeParameters {

    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    /**
     * The name of the model(deployment) to use
     */
    readonly model?: string;

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { "batchSize"?: number, "stripNewLines"?: boolean, "timeout"?: number, "dimensions"?: "256" | "512" | "1024" | "1536" | "3072" };


}

