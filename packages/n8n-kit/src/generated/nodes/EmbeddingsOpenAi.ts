// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/embeddings/EmbeddingsOpenAI/EmbeddingsOpenAi.node.ts' node

export const description = "Use Embeddings OpenAI" as const;
export const type = "@n8n/n8n-nodes-langchain.embeddingsOpenAi" as const;
export const version = 1.2 as const;
export const credentials = [{"name":"openAiApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"ai_embedding":"ai_embedding"} as const;

export interface EmbeddingsOpenAiNodeParameters {
    /**
     * The model which will generate the embeddings. <a href="https://platform.openai.com/docs/models/overview">Learn more</a>.
     * Default: "text-embedding-ada-002"
     * Type options: {"loadOptions":{"routing":{"request":{"method":"GET","url":"={{ $parameter.options?.baseURL?.split(\"/\").slice(-1).pop() || $credentials?.url?.split(\"/\").slice(-1).pop() || \"v1\" }}/models"},"output":{"postReceive":[{"type":"rootProperty","properties":{"property":"data"}},{"type":"filter","properties":{"pass":"={{\n\t\t\t\t\t\t\t\t\t($parameter.options?.baseURL && !$parameter.options?.baseURL?.startsWith('https://api.openai.com/')) ||\n\t\t\t\t\t\t\t\t\t($credentials?.url && !$credentials.url.startsWith('https://api.openai.com/')) ||\n\t\t\t\t\t\t\t\t\t$responseItem.id.includes('embed')\n\t\t\t\t\t\t\t\t}}"}},{"type":"setKeyValue","properties":{"name":"={{$responseItem.id}}","value":"={{$responseItem.id}}"}},{"type":"sort","properties":{"key":"name"}}]}}}}
     */
    readonly model?: string;

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { dimensions?: 256 | 512 | 1024 | 1536 | 3072, baseURL?: string, batchSize?: number, stripNewLines?: boolean, timeout?: number, encodingFormat?: "float" | "base64" };

}
