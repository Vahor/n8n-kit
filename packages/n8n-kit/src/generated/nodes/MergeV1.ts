// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Merge/v1/MergeV1.node.ts' node

export const name = "undefined" as const;
export const description = "undefined" as const;
export const version = 1 as const;

/**
 * undefined
 */
export interface MergeV1NodeParameters {

    readonly oldVersionNotice?: string;

    /**
     * How data of branches should be merged
     * Default: "append"
     */
    readonly mode?: "append" | "keepKeyMatches" | "mergeByIndex" | "mergeByKey" | "multiplex" | "passThrough" | "removeKeyMatches" | "wait";

    /**
     * How many items the output will contain if inputs contain different amount of items
     * Default: "left"
     */
    readonly join?: "inner" | "left" | "outer";

    /**
     * Name of property which decides which items to merge of input 1
     */
    readonly propertyName1?: string;

    /**
     * Name of property which decides which items to merge of input 2
     */
    readonly propertyName2?: string;

    /**
     * Defines of which input the data should be used as output of node
     * Default: "input1"
     */
    readonly output?: "input1" | "input2";

    /**
     * Select when to overwrite the values from Input1 with values from Input 2
     * Default: "always"
     */
    readonly overwrite?: "always" | "blank" | "undefined";


}

