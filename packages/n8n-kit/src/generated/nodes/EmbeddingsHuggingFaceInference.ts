// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/embeddings/EmbeddingsHuggingFaceInference/EmbeddingsHuggingFaceInference.node.ts' node

export const name = "embeddingsHuggingFaceInference" as const;
export const description = "Use HuggingFace Inference Embeddings" as const;
export const version = 1 as const;
export const credentials = [{"name":"huggingFaceApi","required":true}] as const;

/**
 * Use HuggingFace Inference Embeddings
 */
export interface EmbeddingsHuggingFaceInferenceNodeParameters {

    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    /**
     * The model name to use from HuggingFace library
     * Default: "sentence-transformers/distilbert-base-nli-mean-tokens"
     */
    readonly modelName?: string;

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { "endpointUrl"?: string, "provider"?: "black-forest-labs" | "cerebras" | "cohere" | "fal-ai" | "featherless-ai" | "fireworks-ai" | "groq" | "hf-inference" | "hyperbolic" | "nebius" | "novita" | "nscale" | "openai" | "ovhcloud" | "replicate" | "sambanova" | "together" | "auto" };


}

