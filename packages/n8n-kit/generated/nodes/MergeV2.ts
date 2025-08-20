// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Merge/v2/MergeV2.node.js' node

export const name = "merge" as const;
export const description = "Merges data of multiple streams once data from both is available" as const;
export const version = 2.2 as const;
export const defaults = {"name":"Merge","color":"#00bbcc"} as const;

/**
 * Merges data of multiple streams once data from both is available
 */
export interface MergeV2NodeParameters {

    /**
     * How data of branches should be merged
     * Default: "append"
     */
    readonly mode?: "append" | "combine" | "chooseBranch";

    /**
     * Default: "mergeByFields"
     */
    readonly combinationMode?: "mergeByFields" | "mergeByPosition" | "multiplex";

    /**
     * Default: {"values":[{"field1":"","field2":""}]}
     * Type options: {"multipleValues":true}
     */
    readonly mergeByFields?: { "values": any };

    /**
     * Default: "keepMatches"
     */
    readonly joinMode?: "keepMatches" | "keepNonMatches" | "keepEverything" | "enrichInput1" | "enrichInput2";

    /**
     * Default: "both"
     */
    readonly outputDataFrom?: "both" | "input1" | "input2" | "both";

    /**
     * Default: "waitForBoth"
     */
    readonly chooseBranchMode?: "waitForBoth";

    /**
     * Default: "input1"
     */
    readonly output?: "input1" | "input2" | "empty";

    /**
     * Default: {}
     */
    readonly options?: { "clashHandling"?: { "values": any }, "clashHandling"?: { "values": any }, "clashHandling"?: { "values": any }, "disableDotNotation"?: boolean, "fuzzyCompare"?: boolean, "includeUnpaired"?: boolean, "multipleMatches"?: "all" | "first", "multipleMatches"?: "all" | "first" };


}

