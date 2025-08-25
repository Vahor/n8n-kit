// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/llms/LmChatGoogleVertex/LmChatGoogleVertex.node.ts' node

export const description = "Chat Model Google Vertex" as const;
export const type = "@n8n/n8n-nodes-langchain.lmChatGoogleVertex" as const;
export const version = 1 as const;
export const credentials = [{"name":"googleApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"ai_languageModel":"ai_languageModel"} as const;

export interface LmChatGoogleVertexNodeParameters {
    /**
     * Select or enter your Google Cloud project ID
     * Default: {"mode":"list","value":""}
     */
    readonly projectId?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * The model which will generate the completion. <a href="https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models">Learn more</a>.
     * Default: "gemini-1.5-flash"
     */
    readonly modelName?: string;

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { maxOutputTokens?: number, temperature?: number, topK?: number, topP?: number, safetySettings?: { values: Array<{ category?: "HARM_CATEGORY_HARASSMENT" | "HARM_CATEGORY_HATE_SPEECH" | "HARM_CATEGORY_SEXUALLY_EXPLICIT" | "HARM_CATEGORY_DANGEROUS_CONTENT", threshold?: "HARM_BLOCK_THRESHOLD_UNSPECIFIED" | "BLOCK_LOW_AND_ABOVE" | "BLOCK_MEDIUM_AND_ABOVE" | "BLOCK_ONLY_HIGH" | "BLOCK_NONE" }> } };

}
