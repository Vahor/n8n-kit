// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/If/V1/IfV1.node.ts' node

export const name = "undefined" as const;
export const description = "undefined" as const;
export const version = 1 as const;
export const defaults = {"name":"If","color":"#408000"} as const;

/**
 * undefined
 */
export interface IfV1NodeParameters {

    /**
     * The type of values to compare
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly conditions?: { "boolean": any, "dateTime": any, "number": any, "string": any };

    /**
     * If multiple rules got set this settings decides if it is true as soon as ANY condition matches or only if ALL get meet
     * Default: "all"
     */
    readonly combineOperation?: "all" | "any";


}

