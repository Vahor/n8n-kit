// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Switch/V2/SwitchV2.node.ts' node

export const name = "undefined" as const;
export const description = "undefined" as const;
export const version = 2 as const;
export const defaults = {"name":"Switch","color":"#506000"} as const;

/**
 * undefined
 */
export interface SwitchV2NodeParameters {

    /**
     * How data should be routed
     * Default: "rules"
     */
    readonly mode?: "expression" | "rules";

    /**
     * The index of output to which to send data to
     */
    readonly output?: string;

    /**
     * Amount of outputs to create
     * Default: 4
     */
    readonly outputsAmount?: number;

    /**
     * The type of data to route on
     * Default: "number"
     */
    readonly dataType?: "boolean" | "dateTime" | "number" | "string";

    /**
     * The value to compare with the first one
     */
    readonly value1?: boolean;

    /**
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly rules?: { "rules": any };

    /**
     * The output to which to route all items which do not match any of the rules. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: -1
     * Type options: {"loadOptionsDependsOn":["rules.rules"],"loadOptionsMethod":"getFallbackOutputOptions"}
     */
    readonly fallbackOutput?: string;


}

