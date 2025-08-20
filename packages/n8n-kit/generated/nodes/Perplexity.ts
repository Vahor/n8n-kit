// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Perplexity/Perplexity.node.ts' node

export const name = "perplexity" as const;
export const description = "Interact with the Perplexity API to generate AI responses with citations" as const;
export const version = 1 as const;
export const defaults = {"name":"Perplexity"} as const;
export const credentials = [{"name":"perplexityApi","required":true}] as const

/**
 * Interact with the Perplexity API to generate AI responses with citations
 */
export interface PerplexityNodeParameters {

    /**
     * Default: "chat"
     */
    readonly resource?: any;


}

