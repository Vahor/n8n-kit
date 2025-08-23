// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/@n8n/nodes-langchain/nodes/chains/ChainSummarization/V2/ChainSummarizationV2.node.ts' node

export const description = "Transforms text into a concise summary" as const;
export const type = "@n8n/n8n-nodes-langchain.chainSummarization" as const;
export const version = 2.1 as const;
export const credentials = [] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface ChainSummarizationV2NodeParameters {
    readonly notice?: string;

    /**
     * How to pass data into the summarization chain
     * Default: "nodeInputJson"
     */
    readonly operationMode?: "nodeInputJson" | "nodeInputBinary" | "documentLoader";

    /**
     * Chunk splitting strategy
     * Default: "simple"
     */
    readonly chunkingMode?: "simple" | "advanced";

    /**
     * Controls the max size (in terms of number of characters) of the final document chunk
     * Default: 1000
     */
    readonly chunkSize?: number;

    /**
     * Specifies how much characters overlap there should be between chunks
     * Default: 200
     */
    readonly chunkOverlap?: number;

    /**
     * Default: {}
     */
    readonly options?: { "binaryDataKey"?: string, "summarizationMethodAndPrompts"?: { "values": any }, "batching"?: { "batchSize"?: number, "delayBetweenBatches"?: number } };

}
