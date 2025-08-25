// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Transform/Summarize/Summarize.node.ts' node

export const description = "Sum, count, max, etc. across items" as const;
export const type = "n8n-nodes-base.summarize" as const;
export const version = 1.1 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface SummarizeNodeParameters {
    /**
     * Default: {"values":[{"aggregation":"count","field":""}]}
     * Type options: {"multipleValues":true}
     */
    readonly fieldsToSummarize?: { values: { aggregation?: "append" | "average" | "concatenate" | "count" | "countUnique" | "max" | "min" | "sum", field?: string, includeEmpty?: boolean, separateBy?: "," | ", " | "\n" | "" | " " | "other", customSeparator?: string } };

    /** The name of the input fields that you want to split the summary by */
    readonly fieldsToSplitBy?: string;

    /** Default: {} */
    readonly options?: { continueIfFieldNotFound?: boolean, disableDotNotation?: boolean, outputFormat?: "separateItems" | "singleItem", skipEmptySplitFields?: boolean };

}
