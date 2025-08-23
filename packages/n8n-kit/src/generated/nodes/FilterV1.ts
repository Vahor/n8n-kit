// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Filter/V1/FilterV1.node.ts' node

export const description = "Remove items matching a condition" as const;
export const type = "n8n-nodes-base.filter" as const;
export const version = 1 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface FilterV1NodeParameters {
    /**
     * The type of values to compare
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly conditions?: { "boolean": any, "dateTime": any, "number": any, "string": any };

    /**
     * How to combine the conditions: AND requires all conditions to be true, OR requires at least one condition to be true
     * Default: "AND"
     */
    readonly combineConditions?: "AND" | "OR";

}
