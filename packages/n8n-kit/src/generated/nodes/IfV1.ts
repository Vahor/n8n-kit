// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/If/V1/IfV1.node.ts' node

export const description = "Route items to different branches (true/false)" as const;
export const type = "n8n-nodes-base.if" as const;
export const version = 1 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface IfV1NodeParameters {
    /**
     * The type of values to compare
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly conditions?: { boolean: { value1?: boolean, operation?: "equal" | "notEqual", value2?: boolean }, dateTime: { value1?: string, operation?: "after" | "before", value2?: string }, number: { value1?: number, operation?: "smaller" | "smallerEqual" | "equal" | "notEqual" | "larger" | "largerEqual" | "isEmpty" | "isNotEmpty", value2?: number }, string: { value1?: string, operation?: "contains" | "notContains" | "endsWith" | "notEndsWith" | "equal" | "notEqual" | "regex" | "notRegex" | "startsWith" | "notStartsWith" | "isEmpty" | "isNotEmpty", value2?: string } };

    /**
     * If multiple rules got set this settings decides if it is true as soon as ANY condition matches or only if ALL get meet
     * Default: "all"
     */
    readonly combineOperation?: "all" | "any";

}
