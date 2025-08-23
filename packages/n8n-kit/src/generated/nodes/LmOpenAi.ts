// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/llms/LMOpenAi/LmOpenAi.node.ts' node

export const description = "For advanced usage with an AI chain" as const;
export const type = "@n8n/n8n-nodes-langchain.lmOpenAi" as const;
export const version = 1 as const;
export const credentials = [{"name":"openAiApi","required":true}] as const;

/**
 * For advanced usage with an AI chain
 */
export interface LmOpenAiNodeParameters {

    readonly deprecated?: string;

    /**
     * The model which will generate the completion. <a href="https://beta.openai.com/docs/models/overview">Learn more</a>.
     * Default: {"mode":"list","value":"gpt-3.5-turbo-instruct"}
     */
    readonly model?: {
	value: string,
	mode: "list" | "id",
};

    readonly notice?: string;

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { "baseURL"?: string, "frequencyPenalty"?: number, "maxTokens"?: number, "presencePenalty"?: number, "temperature"?: number, "timeout"?: number, "maxRetries"?: number, "topP"?: number };


}

