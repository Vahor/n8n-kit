// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/llms/LmChatGoogleVertex/LmChatGoogleVertex.node.ts' node

export const description = "Chat Model Google Vertex" as const;
export const type = "@n8n/n8n-nodes-langchain.lmChatGoogleVertex" as const;
export const version = 1 as const;
export const credentials = [{"name":"googleApi","required":true}] as const;

/**
 * Chat Model Google Vertex
 */
export interface LmChatGoogleVertexNodeParameters {

    /**
     * Type options: {"containerClass":"ndv-connection-hint-notice"}
     */
    readonly notice?: string;

    /**
     * Select or enter your Google Cloud project ID
     * Default: {"mode":"list","value":""}
     */
    readonly projectId?: any;

    /**
     * The model which will generate the completion. <a href="https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models">Learn more</a>.
     * Default: "gemini-1.5-flash"
     */
    readonly modelName?: string;

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { "maxOutputTokens"?: number, "temperature"?: number, "topK"?: number, "topP"?: number, "safetySettings"?: { "values": any } };


}

