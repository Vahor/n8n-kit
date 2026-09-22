// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/llms/LmChatDatabricks/LmChatDatabricks.node.ts' node

export const description = "For advanced usage with an AI chain" as const;
export const type = "@n8n/n8n-nodes-langchain.lmChatDatabricks" as const;
export const version = 1 as const;
export const credentials = [{"name":"databricksOAuth2Api","required":true}] as const;
export const inputs = {} as const;
export const outputs = {"ai_languageModel":"ai_languageModel"} as const;

export interface LmChatDatabricksNodeParameters {
    /**
     * The Unity AI Gateway model service. Choose from the list, or enter its full name (catalog.schema.service).
     * Default: {"mode":"list","value":""}
     */
    readonly model?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Additional options to add
     * Default: {}
     */
    readonly options?: { frequencyPenalty?: number, maxTokens?: number, responseFormat?: "text" | "json_object", presencePenalty?: number, temperature?: number, timeout?: number, maxRetries?: number, topP?: number };

}
