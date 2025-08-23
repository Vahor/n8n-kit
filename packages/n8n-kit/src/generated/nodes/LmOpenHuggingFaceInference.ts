// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/llms/LMOpenHuggingFaceInference/LmOpenHuggingFaceInference.node.ts' node

export const name = "lmOpenHuggingFaceInference" as const;
export const description = "Language Model HuggingFaceInference" as const;
export const version = 1 as const;
export const credentials = [{"name":"huggingFaceApi","required":true}] as const;

/**
 * Language Model HuggingFaceInference
 */
export interface LmOpenHuggingFaceInferenceNodeParameters {

    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    /**
     * Default: "mistralai/Mistral-Nemo-Base-2407"
     */
    readonly model?: string;

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { "endpointUrl"?: string, "frequencyPenalty"?: number, "maxTokens"?: number, "presencePenalty"?: number, "temperature"?: number, "topK"?: number, "topP"?: number };


}

