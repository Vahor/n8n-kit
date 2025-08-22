// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/JinaAI/JinaAi.node.ts' node

export const name = "jinaAi" as const;
export const description = "Interact with Jina AI API" as const;
export const version = 1 as const;

/**
 * Interact with Jina AI API
 */
export interface JinaAiNodeParameters {

    /**
     * Default: "reader"
     */
    readonly resource?: "reader" | "research";

    /**
     * Default: "read"
     */
    readonly operation?: "read" | "search" | "deepResearch";

    /**
     * The URL to fetch content from
     */
    readonly url?: string;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simplify?: boolean;

    /**
     * Default: {}
     */
    readonly options?: { "outputFormat"?: "html" | "" | "markdown" | "screenshot" | "text", "targetSelector"?: string, "excludeSelector"?: string, "enableImageCaptioning"?: boolean, "waitForSelector"?: string } | { "outputFormat"?: "html" | "" | "markdown" | "screenshot" | "text", "siteFilter"?: string, "pageNumber"?: number } | { "maxReturnedSources"?: number, "prioritizeSources"?: string, "excludeSources"?: string, "siteFilter"?: string };

    /**
     */
    readonly searchQuery?: string;

    /**
     * The topic or question for the AI to research
     * Type options: {"rows":2}
     */
    readonly researchQuery?: string;


}

