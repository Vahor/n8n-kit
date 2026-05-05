// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Perplexity/Perplexity.node.ts' node

export const description = "AI-powered answer engine that provides accurate, trusted, and real-time answers to any question. Supports chat completions, agent responses, web search, and embeddings." as const;
export const type = "n8n-nodes-base.perplexity" as const;
export const version = 2 as const;
export const credentials = [{"name":"perplexityApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface PerplexityNodeParameters {
    /** Default: "chat" */
    readonly resource?: "agent" | "chat" | "embedding" | "search";

    /** Default: "createResponse" */
    readonly operation?: "createResponse" | "complete" | "createEmbedding" | "createContextualized" | "search";

    /**
     * The input text prompt to send to the agent
     * Type options: {"rows":3}
     */
    readonly input?: string;

    /**
     * The model to use. Uses provider/model format (e.g. openai/gpt-5.2). Leave empty when using a preset.
     * Default: {"mode":"list","value":""}
     */
    readonly model?: {
	value: string,
	mode: "list" | "id",
} | "sonar" | "sonar-deep-research" | "sonar-pro" | "sonar-reasoning-pro" | "pplx-embed-v1-0.6b" | "pplx-embed-v1-4b" | "pplx-embed-context-v1-4b";

    /** Preset name to use. Use preset OR model, not both. */
    readonly preset?: string;

    /** Whether to return only essential fields (ID, model, output text, citations) */
    readonly simplify?: boolean;

    /** Default: {} */
    readonly options?: { instructions?: string, languagePreference?: string, maxOutputTokens?: number, maxSteps?: number, modelsFallback?: string, reasoning?: string, responseFormat?: string, tools?: string } | { disableSearch?: boolean, enableSearchClassifier?: boolean, frequencyPenalty?: number, imageDomainFilter?: string, imageFormatFilter?: string, languagePreference?: string, lastUpdatedAfter?: string, lastUpdatedBefore?: string, maxTokens?: number, temperature?: number, presencePenalty?: number, reasoningEffort?: "minimal" | "low" | "medium" | "high", responseFormat?: string, returnImages?: boolean, returnRelatedQuestions?: boolean, searchAfterDate?: string, searchBeforeDate?: string, searchDomainFilter?: string, searchLanguageFilter?: string, searchMode?: "web" | "academic" | "sec", searchRecency?: "day" | "hour" | "month" | "week" | "year", stop?: string, topK?: number, topP?: number, webSearchOptions?: string } | { dimensions?: number, encoding_format?: "base64_int8" | "base64_binary" } | { country?: string, lastUpdatedAfter?: string, lastUpdatedBefore?: string, maxResults?: number, maxTokens?: number, maxTokensPerPage?: number, searchAfterDate?: string, searchBeforeDate?: string, searchDomainFilter?: string, searchLanguageFilter?: string, searchRecencyFilter?: "day" | "hour" | "month" | "week" | "year" };

    /**
     * Any optional system messages must be sent first, followed by alternating user and assistant messages
     * Default: {"message":[{"role":"user","content":""}]}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly messages?: { message: Array<{ content?: string, role: "assistant" | "system" | "user" }> };

    /** The search query string */
    readonly query?: string;

}
