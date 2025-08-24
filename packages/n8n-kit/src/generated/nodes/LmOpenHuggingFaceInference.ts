// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/llms/LMOpenHuggingFaceInference/LmOpenHuggingFaceInference.node.ts' node

export const description = "Language Model HuggingFaceInference" as const;
export const type = "@n8n/n8n-nodes-langchain.lmOpenHuggingFaceInference" as const;
export const version = 1 as const;
export const credentials = [{"name":"huggingFaceApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"ai_languageModel":"ai_languageModel"} as const;

export interface LmOpenHuggingFaceInferenceNodeParameters {
    /** Default: "mistralai/Mistral-Nemo-Base-2407" */
    readonly model?: string;

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { "endpointUrl"?: string, "frequencyPenalty"?: number, "maxTokens"?: number, "presencePenalty"?: number, "temperature"?: number, "topK"?: number, "topP"?: number };

}
