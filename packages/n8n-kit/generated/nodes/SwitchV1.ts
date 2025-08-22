// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Switch/V1/SwitchV1.node.ts' node

export const name = "undefined" as const;
export const description = "undefined" as const;
export const version = 1 as const;

/**
 * undefined
 */
export interface SwitchV1NodeParameters {

    /**
     * How data should be routed
     * Default: "rules"
     */
    readonly mode?: "expression" | "rules";

    /**
     * The index of output to which to send data to
     * Type options: {"minValue":0,"maxValue":3}
     */
    readonly output?: number;

    /**
     * The type of data to route on
     * Default: "number"
     */
    readonly dataType?: "boolean" | "dateTime" | "number" | "string";

    /**
     * The value to compare with the first one
     */
    readonly value1?: boolean | string | number | string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly rules?: { "rules": any } | { "rules": any } | { "rules": any } | { "rules": any };

    /**
     * The output to which to route all items which do not match any of the rules
     * Default: -1
     */
    readonly fallbackOutput?: "-1" | "0" | "1" | "2" | "3";


}

