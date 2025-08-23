// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/llms/LMChatAnthropic/LmChatAnthropic.node.ts' node

export const description = "Language Model Anthropic" as const;
export const type = "@n8n/n8n-nodes-langchain.lmChatAnthropic" as const;
export const version = 1.3 as const;
export const credentials = [{"name":"anthropicApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"ai_languageModel":"ai_languageModel"} as const;

export interface LmChatAnthropicNodeParameters {
    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    /**
     * The model which will generate the completion. <a href="https://docs.anthropic.com/claude/docs/models-overview">Learn more</a>.
     * Default: "claude-2"
     */
    readonly model?: "claude-3-5-sonnet-20241022" | "claude-3-opus-20240229" | "claude-3-5-sonnet-20240620" | "claude-3-sonnet-20240229" | "claude-3-5-haiku-20241022" | "claude-3-haiku-20240307" | "claude-2" | "claude-2.1" | "claude-instant-1.2" | "claude-instant-1" | "claude-3-5-sonnet-20241022" | "claude-3-opus-20240229" | "claude-3-5-sonnet-20240620" | "claude-3-sonnet-20240229" | "claude-3-5-haiku-20241022" | "claude-3-haiku-20240307" | {
	value: string,
	mode: "list" | "id",
};

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { "maxTokensToSample"?: number, "temperature"?: number, "topK"?: number, "topP"?: number, "thinking"?: boolean, "thinkingBudget"?: number };

}
