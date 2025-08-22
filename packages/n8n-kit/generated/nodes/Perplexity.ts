// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Perplexity/Perplexity.node.ts' node

export const name = "perplexity" as const;
export const description = "Interact with the Perplexity API to generate AI responses with citations" as const;
export const version = 1 as const;

/**
 * Interact with the Perplexity API to generate AI responses with citations
 */
export interface PerplexityNodeParameters {

    /**
     * Default: "chat"
     */
    readonly resource?: any;

    /**
     * Default: "complete"
     */
    readonly operation?: "complete";

    /**
     * The model which will generate the completion
     * Default: "r1-1776"
     */
    readonly model?: "r1-1776" | "sonar" | "sonar-deep-research" | "sonar-pro" | "sonar-reasoning" | "sonar-reasoning-pro";

    /**
     * Any optional system messages must be sent first, followed by alternating user and assistant messages
     * Default: {"message":[{"role":"user","content":""}]}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly messages?: { "message": any };

    /**
     * Whether to return only essential fields (ID, citations, message)
     */
    readonly simplify?: boolean;

    /**
     * Default: {}
     */
    readonly options?: { "frequencyPenalty"?: number, "maxTokens"?: number, "temperature"?: number, "topK"?: number, "topP"?: number, "presencePenalty"?: number, "returnImages"?: boolean, "returnRelatedQuestions"?: boolean, "searchDomainFilter"?: string, "searchRecency"?: "day" | "hour" | "month" | "week" };


}

