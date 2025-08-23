// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/llms/LmChatOpenRouter/LmChatOpenRouter.node.ts' node

export const description = "For advanced usage with an AI chain" as const;
export const type = "@n8n/n8n-nodes-langchain.lmChatOpenRouter" as const;
export const version = 1 as const;
export const credentials = [{"name":"openRouterApi","required":true}] as const;
export const outputs = {"ai_languageModel":"ai_languageModel"} as const;

export interface LmChatOpenRouterNodeParameters {

    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    /**
     * The model which will generate the completion. <a href="https://openrouter.ai/docs/models">Learn more</a>.
     * Default: "openai/gpt-4.1-mini"
     * Type options: {"loadOptions":{"routing":{"request":{"method":"GET","url":"/models"},"output":{"postReceive":[{"type":"rootProperty","properties":{"property":"data"}},{"type":"setKeyValue","properties":{"name":"={{$responseItem.id}}","value":"={{$responseItem.id}}"}},{"type":"sort","properties":{"key":"name"}}]}}}}
     */
    readonly model?: string;

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { "frequencyPenalty"?: number, "maxTokens"?: number, "responseFormat"?: "text" | "json_object", "presencePenalty"?: number, "temperature"?: number, "timeout"?: number, "maxRetries"?: number, "topP"?: number };


}

