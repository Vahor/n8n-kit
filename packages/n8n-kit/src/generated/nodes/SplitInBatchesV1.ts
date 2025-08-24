// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/SplitInBatches/v1/SplitInBatchesV1.node.ts' node

export const description = "Split data into batches and iterate over each batch" as const;
export const type = "n8n-nodes-base.splitInBatches" as const;
export const version = 1 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface SplitInBatchesV1NodeParameters {
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
