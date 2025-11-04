// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/embeddings/EmbeddingsLemonade/EmbeddingsLemonade.node.ts' node

export const description = "Use Lemonade Embeddings" as const;
export const type = "@n8n/n8n-nodes-langchain.embeddingsLemonade" as const;
export const version = 1 as const;
export const credentials = [{"name":"lemonadeApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"ai_embedding":"ai_embedding"} as const;

export interface EmbeddingsLemonadeNodeParameters {
    /**
     * The model which will generate the completion. Models are loaded and managed through the Lemonade server.
     * Type options: {"loadOptions":{"routing":{"request":{"method":"GET","url":"/models"},"output":{"postReceive":[{"type":"rootProperty","properties":{"property":"data"}},{"type":"setKeyValue","properties":{"name":"={{$responseItem.id}}","value":"={{$responseItem.id}}"}},{"type":"sort","properties":{"key":"name"}}]}}}}
     */
    readonly model?: string;

}
