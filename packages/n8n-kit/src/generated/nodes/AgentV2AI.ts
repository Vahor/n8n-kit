// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/agents/Agent/V2/AgentV2.node.ts' node

export const name = "undefined" as const;
export const description = "undefined" as const;
export const version = 2.2 as const;

/**
 * undefined
 */
export interface AgentV2AINodeParameters {

    /**
     */
    readonly aiAgentStarterCallout?: any;

    /**
     * Type options: {"calloutAction":{"label":"pre-built agents","icon":"bot","type":"openPreBuiltAgentsCollection"}}
     */
    readonly preBuiltAgentsCallout?: any;

    /**
     * Default: "auto"
     */
    readonly promptType?: "auto" | "define";

    /**
     * Default: "={{ $json.chatInput }}"
     * Type options: {"rows":2}
     */
    readonly text?: string;

    /**
     */
    readonly hasOutputParser?: boolean;

    /**
     */
    readonly notice?: string;

    /**
     */
    readonly needsFallback?: boolean;

    /**
     */
    readonly fallbackNotice?: string;

    /**
     * Default: {}
     */
    readonly options?: { "systemMessage"?: string, "maxIterations"?: number, "returnIntermediateSteps"?: boolean, "passthroughBinaryImages"?: boolean, "batching"?: { "batchSize"?: number, "delayBetweenBatches"?: number }, "enableStreaming"?: boolean } | { "systemMessage"?: string, "maxIterations"?: number, "returnIntermediateSteps"?: boolean, "passthroughBinaryImages"?: boolean, "batching"?: { "batchSize"?: number, "delayBetweenBatches"?: number } };


}

