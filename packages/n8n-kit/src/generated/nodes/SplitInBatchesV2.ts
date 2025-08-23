// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/SplitInBatches/v2/SplitInBatchesV2.node.ts' node

export const name = "splitInBatches" as const;
export const description = "Split data into batches and iterate over each batch" as const;
export const version = 2 as const;

/**
 * Split data into batches and iterate over each batch
 */
export interface SplitInBatchesV2NodeParameters {

    readonly splitInBatchesNotice?: string;

    /**
     * The number of items to return with each call
     * Default: 10
     * Type options: {"minValue":1}
     */
    readonly batchSize?: number;

    /**
     * Default: {}
     */
    readonly options?: { "reset"?: boolean };


}

