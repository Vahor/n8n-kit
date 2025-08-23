// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/llms/LmChatCohere/LmChatCohere.node.ts' node

export const description = "For advanced usage with an AI chain" as const;
export const type = "@n8n/n8n-nodes-langchain.lmChatCohere" as const;
export const version = 1 as const;
export const credentials = [{"name":"cohereApi","required":true}] as const;
export const outputs = {"ai_languageModel":"ai_languageModel"} as const;

export interface LmChatCohereNodeParameters {

    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    /**
     * The model which will generate the completion. <a href="https://docs.cohere.com/docs/models">Learn more</a>.
     * Default: "command-a-03-2025"
     * Type options: {"loadOptions":{"routing":{"request":{"method":"GET","url":"/v1/models?page_size=100&endpoint=chat"},"output":{"postReceive":[{"type":"rootProperty","properties":{"property":"models"}},{"type":"setKeyValue","properties":{"name":"={{$responseItem.name}}","value":"={{$responseItem.name}}","description":"={{$responseItem.description}}"}},{"type":"sort","properties":{"key":"name"}}]}}}}
     */
    readonly model?: string;

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { "temperature"?: number, "maxRetries"?: number };


}

