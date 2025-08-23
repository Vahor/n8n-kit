// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/chains/ChainLLM/ChainLlm.node.ts' node

export const description = "A simple chain to prompt a large language model" as const;
export const type = "@n8n/n8n-nodes-langchain.chainLlm" as const;
export const version = 1.7 as const;
export const credentials = [] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface ChainLlmNodeParameters {
    readonly notice?: string;

    /**
     * Default: "={{ $json.input }}"
     */
    readonly prompt?: string;

    /**
     * Default: "auto"
     */
    readonly promptType?: "auto" | "define";

    /**
     * Default: "={{ $json.chatInput }}"
     * Type options: {"rows":2}
     */
    readonly text?: string;

    readonly hasOutputParser?: boolean;

    readonly needsFallback?: boolean;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly messages?: { "messageValues": any };

    /**
     * Batch processing options for rate limiting
     * Default: {}
     */
    readonly batching?: { "batchSize"?: number, "delayBetweenBatches"?: number };

    readonly fallbackNotice?: string;

}
