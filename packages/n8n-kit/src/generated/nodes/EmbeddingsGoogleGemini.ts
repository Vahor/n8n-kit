// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/embeddings/EmbeddingsGoogleGemini/EmbeddingsGoogleGemini.node.ts' node

export const description = "Use Google Gemini Embeddings" as const;
export const type = "@n8n/n8n-nodes-langchain.embeddingsGoogleGemini" as const;
export const version = 1 as const;
export const credentials = [{"name":"googlePalmApi","required":true}] as const;

/**
 * Use Google Gemini Embeddings
 */
export interface EmbeddingsGoogleGeminiNodeParameters {

    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    /**
     * The model which will generate the embeddings. <a href="https://developers.generativeai.google/api/rest/generativelanguage/models/list">Learn more</a>.
     * Default: "models/text-embedding-004"
     * Type options: {"loadOptions":{"routing":{"request":{"method":"GET","url":"/v1beta/models"},"output":{"postReceive":[{"type":"rootProperty","properties":{"property":"models"}},{"type":"filter","properties":{"pass":"={{ $responseItem.name.includes('embedding') }}"}},{"type":"setKeyValue","properties":{"name":"={{$responseItem.name}}","value":"={{$responseItem.name}}","description":"={{$responseItem.description}}"}},{"type":"sort","properties":{"key":"name"}}]}}}}
     */
    readonly modelName?: string;


}

