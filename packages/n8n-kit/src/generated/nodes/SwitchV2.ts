// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Switch/V2/SwitchV2.node.ts' node

export const description = "Route items depending on defined expression or rules" as const;
export const type = "n8n-nodes-base.switch" as const;
export const version = 2 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"custom":"custom"} as const;

export interface SwitchV2NodeParameters {
    /**
     * How data should be routed
     * Default: "rules"
     */
    readonly mode?: "expression" | "rules";

    /** The index of output to which to send data to */
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

    /** The value to compare with the first one */
    readonly value1?: boolean | string | number;

    /**
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly rules?: { rules: Array<{ operation?: "equal" | "notEqual", value2?: boolean, outputKey?: string }> } | { rules: Array<{ operation?: "after" | "before", value2?: string, outputKey?: string }> } | { rules: Array<{ operation?: "smaller" | "smallerEqual" | "equal" | "notEqual" | "larger" | "largerEqual", value2?: number, outputKey?: string }> } | { rules: Array<{ operation?: "contains" | "notContains" | "endsWith" | "notEndsWith" | "equal" | "notEqual" | "regex" | "notRegex" | "startsWith" | "notStartsWith", value2?: string, outputKey?: string }> };

    /**
     * The output to which to route all items which do not match any of the rules. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: -1
     * Type options: {"loadOptionsDependsOn":["rules.rules"],"loadOptionsMethod":"getFallbackOutputOptions"}
     */
    readonly fallbackOutput?: string;

}
