// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Merge/v3/MergeV3.node.ts' node

export const description = "Merges data of multiple streams once data from both is available" as const;
export const type = "n8n-nodes-base.merge" as const;
export const version = 3.2 as const;
export const inputs = {"custom":"custom"} as const;
export const outputs = {"main":"main"} as const;

export interface MergeV3NodeParameters {
    /**
     * How input data should be merged
     * Default: "append"
     */
    readonly mode?: "append" | "combine" | "combineBySql" | "chooseBranch";

    /**
     * How input data should be merged
     * Default: "combineByFields"
     */
    readonly combineBy?: "combineByFields" | "combineByPosition" | "combineAll";

    /**
     * The number of data inputs you want to merge. The node waits for all connected inputs to be executed.
     * Default: 2
     */
    readonly numberInputs?: "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";

    /**
     * Default: {}
     */
    readonly options?: { "clashHandling"?: { "values": any }, "fuzzyCompare"?: boolean } | { "clashHandling"?: { "values": any }, "disableDotNotation"?: boolean, "fuzzyCompare"?: boolean, "multipleMatches"?: "all" | "first" } | { "emptyQueryResult"?: "success" | "empty" } | { "clashHandling"?: { "values": any }, "includeUnpaired"?: boolean };

    /**
     * Whether name(s) of field to match are different in input 1 and input 2
     */
    readonly advanced?: boolean;

    /**
     * Specify the fields to use for matching input items
     */
    readonly fieldsToMatchString?: string;

    /**
     * Specify the fields to use for matching input items
     * Default: {"values":[{"field1":"","field2":""}]}
     * Type options: {"multipleValues":true}
     */
    readonly mergeByFields?: { "values": any };

    /**
     * How to select the items to send to output
     * Default: "keepMatches"
     */
    readonly joinMode?: "keepMatches" | "keepNonMatches" | "keepEverything" | "enrichInput1" | "enrichInput2";

    /**
     * Default: "both"
     */
    readonly outputDataFrom?: "both" | "input1" | "input2";

    /**
     * Input data available as tables with corresponding number, e.g. input1, input2
     * Default: "SELECT * FROM input1 LEFT JOIN input2 ON input1.name = input2.id"
     * Type options: {"rows":5,"editor":"sqlEditor"}
     */
    readonly query?: string;

    /**
     * Default: "waitForAll"
     */
    readonly chooseBranchMode?: "waitForAll";

    /**
     * Default: "specifiedInput"
     */
    readonly output?: "specifiedInput" | "empty";

    /**
     * The number of the input to use data of
     * Default: 1
     * Type options: {"minValue":1,"loadOptionsMethod":"getInputs","loadOptionsDependsOn":["numberInputs"]}
     */
    readonly useDataOfInput?: string;

}
