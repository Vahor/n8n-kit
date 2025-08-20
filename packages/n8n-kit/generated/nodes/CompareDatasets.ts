// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/CompareDatasets/CompareDatasets.node.js' node

export const name = "compareDatasets" as const;
export const description = "Compare two inputs for changes" as const;
export const version = 2.3 as const;
export const defaults = {"name":"Compare Datasets"} as const;

/**
 * Compare two inputs for changes
 */
export interface CompareDatasetsNodeParameters {

    /**
     */
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

    /**
     */
    readonly exceptWhenMix?: string;

    /**
     * Default: {}
     */
    readonly options?: { "skipFields"?: string, "fuzzyCompare"?: boolean, "disableDotNotation"?: boolean, "multipleMatches"?: "first" | "all" };


}

