// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/llms/LMChatOpenAi/LmChatOpenAi.node.ts' node

export const description = "For advanced usage with an AI chain" as const;
export const type = "@n8n/n8n-nodes-langchain.lmChatOpenAi" as const;
export const version = 1.2 as const;
export const credentials = [{"name":"openAiApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"ai_languageModel":"ai_languageModel"} as const;

export interface LmChatOpenAiNodeParameters {
    /**
     * The model which will generate the completion. <a href="https://beta.openai.com/docs/models/overview">Learn more</a>.
     * Default: "gpt-4o-mini"
     * Type options: {"loadOptions":{"routing":{"request":{"method":"GET","url":"={{ $parameter.options?.baseURL?.split(\"/\").slice(-1).pop() || $credentials?.url?.split(\"/\").slice(-1).pop() || \"v1\" }}/models"},"output":{"postReceive":[{"type":"rootProperty","properties":{"property":"data"}},{"type":"filter","properties":{"pass":"={{\n\t\t\t\t\t\t\t\t\t\t\t\t($parameter.options?.baseURL && !$parameter.options?.baseURL?.startsWith('https://api.openai.com/')) ||\n\t\t\t\t\t\t\t\t\t\t\t\t($credentials?.url && !$credentials.url.startsWith('https://api.openai.com/')) ||\n\t\t\t\t\t\t\t\t\t\t\t\t$responseItem.id.startsWith('ft:') ||\n\t\t\t\t\t\t\t\t\t\t\t\t$responseItem.id.startsWith('o1') ||\n\t\t\t\t\t\t\t\t\t\t\t\t$responseItem.id.startsWith('o3') ||\n\t\t\t\t\t\t\t\t\t\t\t\t($responseItem.id.startsWith('gpt-') && !$responseItem.id.includes('instruct'))\n\t\t\t\t\t\t\t\t\t\t\t}}"}},{"type":"setKeyValue","properties":{"name":"={{$responseItem.id}}","value":"={{$responseItem.id}}"}},{"type":"sort","properties":{"key":"name"}}]}}}}
     */
    readonly model?: string | {
	value: string,
	mode: "list" | "id",
};

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { baseURL?: string, frequencyPenalty?: number, maxTokens?: number, responseFormat?: "text" | "json_object", presencePenalty?: number, temperature?: number, reasoningEffort?: "low" | "medium" | "high", timeout?: number, maxRetries?: number, topP?: number };

}
