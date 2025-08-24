// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/llms/LmChatGroq/LmChatGroq.node.ts' node

export const description = "Language Model Groq" as const;
export const type = "@n8n/n8n-nodes-langchain.lmChatGroq" as const;
export const version = 1 as const;
export const credentials = [{"name":"groqApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"ai_languageModel":"ai_languageModel"} as const;

export interface LmChatGroqNodeParameters {
    /**
     * The model which will generate the completion. <a href="https://console.groq.com/docs/models">Learn more</a>.
     * Default: "llama3-8b-8192"
     * Type options: {"loadOptions":{"routing":{"request":{"method":"GET","url":"/models"},"output":{"postReceive":[{"type":"rootProperty","properties":{"property":"data"}},{"type":"filter","properties":{"pass":"={{ $responseItem.active === true && $responseItem.object === \"model\" }}"}},{"type":"setKeyValue","properties":{"name":"={{$responseItem.id}}","value":"={{$responseItem.id}}"}}]}}}}
     */
    readonly model?: string;

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { "maxTokensToSample"?: number, "temperature"?: number };

}
