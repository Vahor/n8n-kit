// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/llms/LmChatNvidia/LmChatNvidia.node.ts' node

export const description = "NVIDIA Nemotron models from build.nvidia.com or self-hosted NIM" as const;
export const type = "@n8n/n8n-nodes-langchain.lmChatNvidia" as const;
export const version = 1 as const;
export const credentials = [{"name":"nvidiaApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"ai_languageModel":"ai_languageModel"} as const;

export interface LmChatNvidiaNodeParameters {
    /**
     * The Nemotron model which will generate the completion. <a href="https://build.nvidia.com/models">Learn more</a>.
     * Default: "nvidia/llama-3.3-nemotron-super-49b-v1"
     * Type options: {"loadOptions":{"routing":{"request":{"method":"GET","url":"/models"},"output":{"postReceive":[{"type":"rootProperty","properties":{"property":"data"}},{"type":"filter","properties":{"pass":"={{ /nemotron/i.test($responseItem.id) }}"}},{"type":"setKeyValue","properties":{"name":"={{$responseItem.id}}","value":"={{$responseItem.id}}"}},{"type":"sort","properties":{"key":"name"}}]}}}}
     */
    readonly model?: "nvidia/llama-3.3-nemotron-super-49b-v1" | "nvidia/llama-3.1-nemotron-70b-instruct" | "nvidia/llama-3.1-nemotron-nano-8b-v1" | "nvidia/nemotron-4-340b-instruct" | "nvidia/nemotron-mini-4b-instruct";

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { frequencyPenalty?: number, maxTokens?: number, responseFormat?: "text" | "json_object", presencePenalty?: number, temperature?: number, timeout?: number, maxRetries?: number, topP?: number };

}
