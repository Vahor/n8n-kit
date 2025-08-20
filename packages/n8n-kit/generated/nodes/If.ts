// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/If/If.node.js' node

export const name = "if" as const;
export const description = "Route items to different branches (true/false)" as const;
export const version = 1 as const;
export const defaults = {"name":"IF","color":"#408000"} as const;

/**
 * Route items to different branches (true/false)
 */
export interface IfNodeParameters {

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

