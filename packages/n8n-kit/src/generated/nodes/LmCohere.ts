// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/llms/LMCohere/LmCohere.node.ts' node

export const description = "Language Model Cohere" as const;
export const type = "@n8n/n8n-nodes-langchain.lmCohere" as const;
export const version = 1 as const;
export const credentials = [{"name":"cohereApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"ai_languageModel":"ai_languageModel"} as const;

export interface LmCohereNodeParameters {
    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { "maxTokens"?: number, "model"?: string, "temperature"?: number };

}
