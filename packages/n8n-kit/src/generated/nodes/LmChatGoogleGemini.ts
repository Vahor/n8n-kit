// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/llms/LmChatGoogleGemini/LmChatGoogleGemini.node.ts' node

export const description = "Chat Model Google Gemini" as const;
export const type = "@n8n/n8n-nodes-langchain.lmChatGoogleGemini" as const;
export const version = 1 as const;
export const credentials = [{"name":"googlePalmApi","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"ai_languageModel":"ai_languageModel"} as const;

export interface LmChatGoogleGeminiNodeParameters {
    /**
     * The model which will generate the completion. <a href="https://developers.generativeai.google/api/rest/generativelanguage/models/list">Learn more</a>.
     * Default: "models/gemini-2.5-flash"
     * Type options: {"loadOptions":{"routing":{"request":{"method":"GET","url":"/v1beta/models"},"output":{"postReceive":[{"type":"rootProperty","properties":{"property":"models"}},{"type":"filter","properties":{"pass":"={{ !$responseItem.name.includes('embedding') }}"}},{"type":"setKeyValue","properties":{"name":"={{$responseItem.name}}","value":"={{$responseItem.name}}","description":"={{$responseItem.description}}"}},{"type":"sort","properties":{"key":"name"}}]}}}}
     */
    readonly modelName?: string;

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { maxOutputTokens?: number, temperature?: number, topK?: number, topP?: number, safetySettings?: { values: Array<{ category?: "HARM_CATEGORY_HARASSMENT" | "HARM_CATEGORY_HATE_SPEECH" | "HARM_CATEGORY_SEXUALLY_EXPLICIT" | "HARM_CATEGORY_DANGEROUS_CONTENT", threshold?: "HARM_BLOCK_THRESHOLD_UNSPECIFIED" | "BLOCK_LOW_AND_ABOVE" | "BLOCK_MEDIUM_AND_ABOVE" | "BLOCK_ONLY_HIGH" | "BLOCK_NONE" }> } };

}
