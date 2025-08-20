// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Merge/v3/MergeV3.node.ts' node

export const name = "merge" as const;
export const description = "Merges data of multiple streams once data from both is available" as const;
export const version = 3.2 as const;
export const defaults = {"name":"Merge"} as const;

/**
 * Merges data of multiple streams once data from both is available
 */
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


}

