// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Filter/Filter.node.js' node

export const name = "filter" as const;
export const description = "Filter out incoming items based on given conditions" as const;
export const version = 1 as const;
export const defaults = {"name":"Filter","color":"#229eff"} as const;

/**
 * Filter out incoming items based on given conditions
 */
export interface FilterNodeParameters {

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

