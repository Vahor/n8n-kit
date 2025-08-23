// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/llms/LMOllama/LmOllama.node.ts' node

export const description = "Language Model Ollama" as const;
export const type = "@n8n/n8n-nodes-langchain.lmOllama" as const;
export const version = 1 as const;
export const credentials = [{"name":"ollamaApi","required":true}] as const;
export const outputs = {"ai_languageModel":"ai_languageModel"} as const;

export interface LmOllamaNodeParameters {

    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    /**
     * The model which will generate the completion. To download models, visit <a href="https://ollama.ai/library">Ollama Models Library</a>.
     * Default: "llama3.2"
     * Type options: {"loadOptions":{"routing":{"request":{"method":"GET","url":"/api/tags"},"output":{"postReceive":[{"type":"rootProperty","properties":{"property":"models"}},{"type":"setKeyValue","properties":{"name":"={{$responseItem.name}}","value":"={{$responseItem.name}}"}},{"type":"sort","properties":{"key":"name"}}]}}}}
     */
    readonly model?: string;

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { "temperature"?: number, "topK"?: number, "topP"?: number, "frequencyPenalty"?: number, "keepAlive"?: string, "lowVram"?: boolean, "mainGpu"?: number, "numBatch"?: number, "numCtx"?: number, "numGpu"?: number, "numPredict"?: number, "numThread"?: number, "penalizeNewline"?: boolean, "presencePenalty"?: number, "repeatPenalty"?: number, "useMLock"?: boolean, "useMMap"?: boolean, "vocabOnly"?: boolean, "format"?: "default" | "json" };


}

