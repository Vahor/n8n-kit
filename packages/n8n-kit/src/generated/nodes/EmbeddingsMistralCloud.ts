// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/embeddings/EmbeddingsMistralCloud/EmbeddingsMistralCloud.node.ts' node

export const description = "Use Embeddings Mistral Cloud" as const;
export const type = "@n8n/n8n-nodes-langchain.embeddingsMistralCloud" as const;
export const version = 1 as const;
export const credentials = [{"name":"mistralCloudApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"ai_embedding":"ai_embedding"} as const;

export interface EmbeddingsMistralCloudNodeParameters {
    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    /**
     * The model which will compute the embeddings. <a href="https://docs.mistral.ai/platform/endpoints/">Learn more</a>.
     * Default: "mistral-embed"
     * Type options: {"loadOptions":{"routing":{"request":{"method":"GET","url":"/models"},"output":{"postReceive":[{"type":"rootProperty","properties":{"property":"data"}},{"type":"filter","properties":{"pass":"={{ $responseItem.id.includes('embed') }}"}},{"type":"setKeyValue","properties":{"name":"={{ $responseItem.id }}","value":"={{ $responseItem.id }}"}},{"type":"sort","properties":{"key":"name"}}]}}}}
     */
    readonly model?: string;

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { "batchSize"?: number, "stripNewLines"?: boolean };

}
