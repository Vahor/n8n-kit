// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Set/v2/SetV2.node.ts' node

export const description = "Sets values on items and optionally remove other values" as const;
export const type = "n8n-nodes-base.set" as const;
export const version = 2 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface SetV2NodeParameters {
    /** Whether only the values set on this node should be kept and all others removed */
    readonly keepOnlySet?: boolean;

    /**
     * The value to set
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly values?: { boolean: Array<{ name?: string, value?: boolean }>, number: Array<{ name?: string, value?: number }>, string: Array<{ name?: string, value?: string }> };

    /** Default: {} */
    readonly options?: { dotNotation?: boolean };

}
