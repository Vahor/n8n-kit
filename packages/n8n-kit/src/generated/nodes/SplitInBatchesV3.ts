// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/SplitInBatches/v3/SplitInBatchesV3.node.ts' node

export const description = "Split data into batches and iterate over each batch" as const;
export const type = "n8n-nodes-base.splitInBatches" as const;
export const version = 3 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface SplitInBatchesV3NodeParameters {
    readonly splitInBatchesNotice?: string;

    /**
     * The number of items to return with each call
     * Default: 1
     * Type options: {"minValue":1}
     */
    readonly batchSize?: number;

    /**
     * Default: {}
     */
    readonly options?: { "reset"?: boolean };

}
