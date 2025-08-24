// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/embeddings/EmbeddingsOllama/EmbeddingsOllama.node.ts' node

export const description = "Use Ollama Embeddings" as const;
export const type = "@n8n/n8n-nodes-langchain.embeddingsOllama" as const;
export const version = 1 as const;
export const credentials = [{"name":"ollamaApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"ai_embedding":"ai_embedding"} as const;

export interface EmbeddingsOllamaNodeParameters {
    /**
     * The model which will generate the completion. To download models, visit <a href="https://ollama.ai/library">Ollama Models Library</a>.
     * Default: "llama3.2"
     * Type options: {"loadOptions":{"routing":{"request":{"method":"GET","url":"/api/tags"},"output":{"postReceive":[{"type":"rootProperty","properties":{"property":"models"}},{"type":"setKeyValue","properties":{"name":"={{$responseItem.name}}","value":"={{$responseItem.name}}"}},{"type":"sort","properties":{"key":"name"}}]}}}}
     */
    readonly model?: string;

}
