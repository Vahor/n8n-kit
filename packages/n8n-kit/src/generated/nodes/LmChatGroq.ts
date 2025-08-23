// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/llms/LmChatGroq/LmChatGroq.node.ts' node

export const name = "lmChatGroq" as const;
export const description = "Language Model Groq" as const;
export const version = 1 as const;
export const credentials = [{"name":"groqApi","required":true}] as const;

/**
 * Language Model Groq
 */
export interface LmChatGroqNodeParameters {

    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

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

