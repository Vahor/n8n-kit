// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Switch/V1/SwitchV1.node.ts' node

export const description = "Route items depending on defined expression or rules" as const;
export const type = "n8n-nodes-base.switch" as const;
export const version = 1 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

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

    /** The value to compare with the first one */
    readonly value1?: boolean | string | number;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly rules?: { rules: { operation?: "equal" | "notEqual", value2?: boolean, output?: number } } | { rules: { operation?: "after" | "before", value2?: string, output?: number } } | { rules: { operation?: "smaller" | "smallerEqual" | "equal" | "notEqual" | "larger" | "largerEqual", value2?: number, output?: number } } | { rules: { operation?: "contains" | "notContains" | "endsWith" | "notEndsWith" | "equal" | "notEqual" | "regex" | "notRegex" | "startsWith" | "notStartsWith", value2?: string, output?: number } };

    /**
     * The output to which to route all items which do not match any of the rules
     * Default: -1
     */
    readonly fallbackOutput?: -1 | 0 | 1 | 2 | 3;

}
