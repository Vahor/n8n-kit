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
    readonly conditions?: { boolean: { value1?: boolean, operation?: "equal" | "notEqual", value2?: boolean }, dateTime: { value1?: string, operation?: "after" | "before", value2?: string }, number: { value1?: number, operation?: "smaller" | "smallerEqual" | "equal" | "notEqual" | "larger" | "largerEqual" | "isEmpty" | "isNotEmpty", value2?: number }, string: { value1?: string, operation?: "contains" | "notContains" | "endsWith" | "notEndsWith" | "equal" | "notEqual" | "regex" | "notRegex" | "startsWith" | "notStartsWith" | "isEmpty" | "isNotEmpty", value2?: string } };

    /**
     * How to combine the conditions: AND requires all conditions to be true, OR requires at least one condition to be true
     * Default: "AND"
     */
    readonly combineConditions?: "AND" | "OR";

}
