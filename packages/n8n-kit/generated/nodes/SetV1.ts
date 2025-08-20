// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Set/v1/SetV1.node.js' node

export const name = "set" as const;
export const description = "Sets values on items and optionally remove other values" as const;
export const version = 2 as const;
export const defaults = {"name":"Set","color":"#0000FF"} as const;

/**
 * Sets values on items and optionally remove other values
 */
export interface SetV1NodeParameters {

    /**
     * Whether only the values set on this node should be kept and all others removed
     */
    readonly keepOnlySet?: boolean;

    /**
     * The value to set
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly values?: { "boolean": any, "number": any, "string": any };

    /**
     * Default: {}
     */
    readonly options?: { "dotNotation"?: boolean };


}

