// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/llms/LMCohere/LmCohere.node.ts' node

export const name = "lmCohere" as const;
export const description = "Language Model Cohere" as const;
export const version = 1 as const;
export const credentials = [{"name":"cohereApi","required":true}] as const;

/**
 * Language Model Cohere
 */
export interface LmCohereAINodeParameters {

    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { "maxTokens"?: number, "model"?: string, "temperature"?: number };


}

