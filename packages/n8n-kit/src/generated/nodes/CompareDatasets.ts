// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/CompareDatasets/CompareDatasets.node.ts' node

export const description = "Compare two inputs for changes" as const;
export const type = "n8n-nodes-base.compareDatasets" as const;
export const version = 2.3 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface CompareDatasetsNodeParameters {
    readonly infoBox?: string;

    /**
     * Default: {"values":[{"field1":"","field2":""}]}
     * Type options: {"multipleValues":true}
     */
    readonly mergeByFields?: { "values": any };

    /**
     * Default: "preferInput2"
     */
    readonly resolve?: "preferInput1" | "preferInput2" | "mix" | "includeBoth";

    /**
     * Whether to tolerate small type differences when comparing fields. E.g. the number 3 and the string '3' are treated as the same.
     */
    readonly fuzzyCompare?: boolean;

    /**
     * Default: "input1"
     */
    readonly preferWhenMix?: "input1" | "input2";

    readonly exceptWhenMix?: string;

    /**
     * Default: {}
     */
    readonly options?: { "skipFields"?: string, "fuzzyCompare"?: boolean, "disableDotNotation"?: boolean, "multipleMatches"?: "first" | "all" };

}
