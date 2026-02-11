// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/llms/LMChatOpenAi/LmChatOpenAi.node.ts' node

export const description = "For advanced usage with an AI chain" as const;
export const type = "@n8n/n8n-nodes-langchain.lmChatOpenAi" as const;
export const version = 1.3 as const;
export const credentials = [{"name":"openAiApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"ai_languageModel":"ai_languageModel"} as const;

export interface LmChatOpenAiNodeParameters {
    /**
     * The model which will generate the completion. <a href="https://beta.openai.com/docs/models/overview">Learn more</a>.
     * Default: "gpt-5-mini"
     * Type options: {"loadOptions":{"routing":{"request":{"method":"GET","url":"={{ $parameter.options?.baseURL?.split(\"/\").slice(-1).pop() || $credentials?.url?.split(\"/\").slice(-1).pop() || \"v1\" }}/models"},"output":{"postReceive":[{"type":"rootProperty","properties":{"property":"data"}},{"type":"filter","properties":{"pass":"={{\n\t\t\t\t\t\t\t\t\t\t\t\t($parameter.options?.baseURL && !$parameter.options?.baseURL?.startsWith('https://api.openai.com/')) ||\n\t\t\t\t\t\t\t\t\t\t\t\t($credentials?.url && !$credentials.url.startsWith('https://api.openai.com/')) ||\n\t\t\t\t\t\t\t\t\t\t\t\t$responseItem.id.startsWith('ft:') ||\n\t\t\t\t\t\t\t\t\t\t\t\t$responseItem.id.startsWith('o1') ||\n\t\t\t\t\t\t\t\t\t\t\t\t$responseItem.id.startsWith('o3') ||\n\t\t\t\t\t\t\t\t\t\t\t\t($responseItem.id.startsWith('gpt-') && !$responseItem.id.includes('instruct'))\n\t\t\t\t\t\t\t\t\t\t\t}}"}},{"type":"setKeyValue","properties":{"name":"={{$responseItem.id}}","value":"={{$responseItem.id}}"}},{"type":"sort","properties":{"key":"name"}}]}}}}
     */
    readonly model?: string | {
	value: string,
	mode: "list" | "id",
};

    /**
     * Whether to use the Responses API to generate the response. <a href="https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatopenai/#use-responses-api">Learn more</a>.
     * Default: true
     */
    readonly responsesApiEnabled?: boolean;

    /** Default: {} */
    readonly builtInTools?: { webSearch?: { searchContextSize?: "low" | "medium" | "high", allowedDomains?: string, country?: string, city?: string, region?: string }, fileSearch?: { vectorStoreIds: string, filters?: string, maxResults?: number }, codeInterpreter?: boolean };

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { baseURL?: string, frequencyPenalty?: number, maxTokens?: number, responseFormat?: "text" | "json_object", textFormat?: { textOptions: { type?: "text" | "json_schema" | "json_object", verbosity?: "low" | "medium" | "high", name?: string, requiredNotice?: string, schema?: string, description?: string, strict?: boolean } }, presencePenalty?: number, temperature?: number, reasoningEffort?: "low" | "medium" | "high", timeout?: number, maxRetries?: number, topP?: number, conversationId?: string, promptCacheKey?: string, safetyIdentifier?: string, serviceTier?: "auto" | "flex" | "default" | "priority", metadata?: string, topLogprobs?: number, promptConfig?: { promptOptions: { promptId?: string, version?: string, variables?: string } } };

}
