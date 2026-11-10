// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Perplexity/v3/PerplexityV3.node.ts' node

export const description = "AI-powered answer engine that provides accurate, trusted, and real-time answers to any question. Supports agent responses, web search, and embeddings." as const;
export const type = "n8n-nodes-base.perplexity" as const;
export const version = 3 as const;
export const credentials = [{"name":"perplexityApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface PerplexityV3NodeParameters {
    /** Default: "agent" */
    readonly resource?: "agent" | "embedding" | "search";

    /** Default: "createResponse" */
    readonly operation?: "createResponse" | "createEmbedding" | "createContextualized" | "search";

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
} | "pplx-embed-v1-0.6b" | "pplx-embed-v1-4b" | "pplx-embed-context-v1-4b";

    /** Preset name to use. Use preset OR model, not both. */
    readonly preset?: string;

    /** Whether to return only essential fields (ID, model, output text, citations) */
    readonly simplify?: boolean;

    /** Default: {} */
    readonly options?: { instructions?: string, languagePreference?: string, maxOutputTokens?: number, maxSteps?: number, modelsFallback?: string, reasoning?: string, responseFormat?: string, tools?: string } | { dimensions?: number, encoding_format?: "base64_int8" | "base64_binary" } | { country?: string, lastUpdatedAfter?: string, lastUpdatedBefore?: string, maxResults?: number, maxTokens?: number, maxTokensPerPage?: number, searchAfterDate?: string, searchBeforeDate?: string, searchDomainFilter?: string, searchLanguageFilter?: string, searchRecencyFilter?: "day" | "hour" | "month" | "week" | "year" };

    /** The search query string */
    readonly query?: string;

}
