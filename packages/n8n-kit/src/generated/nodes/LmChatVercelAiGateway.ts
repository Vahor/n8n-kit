// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/llms/LmChatVercelAiGateway/LmChatVercelAiGateway.node.ts' node

export const description = "For advanced usage with an AI chain via Vercel AI Gateway" as const;
export const type = "@n8n/n8n-nodes-langchain.lmChatVercelAiGateway" as const;
export const version = 1 as const;
export const credentials = [{"name":"vercelAiGatewayApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"ai_languageModel":"ai_languageModel"} as const;

export interface LmChatVercelAiGatewayNodeParameters {
    /**
     * The model which will generate the completion
     * Default: "openai/gpt-4o"
     * Type options: {"loadOptions":{"routing":{"request":{"method":"GET","url":"/models"},"output":{"postReceive":[{"type":"rootProperty","properties":{"property":"data"}},{"type":"setKeyValue","properties":{"name":"={{$responseItem.id}}","value":"={{$responseItem.id}}"}},{"type":"sort","properties":{"key":"name"}}]}}}}
     */
    readonly model?: string;

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { frequencyPenalty?: number, maxTokens?: number, responseFormat?: "text" | "json_object", presencePenalty?: number, temperature?: number, timeout?: number, maxRetries?: number, topP?: number };

}
