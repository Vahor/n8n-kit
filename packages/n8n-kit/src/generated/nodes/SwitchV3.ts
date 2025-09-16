// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Switch/V3/SwitchV3.node.ts' node

export const description = "Route items depending on defined expression or rules" as const;
export const type = "n8n-nodes-base.switch" as const;
export const version = 3.3 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"custom":"custom"} as const;

export interface SwitchV3NodeParameters {
    /**
     * How data should be routed
     * Default: "rules"
     */
    readonly mode?: "rules" | "expression";

    /**
     * How many outputs to create
     * Default: 4
     */
    readonly numberOutputs?: number;

    /**
     * The output index to send the input item to. Use an expression to calculate which input item should be routed to which output. The expression must return a number.
     * Default: "={{}}"
     */
    readonly output?: number;

    /**
     * Default: {"values":[{"conditions":{"options":{"caseSensitive":true,"leftValue":"","typeValidation":"strict"},"conditions":[{"leftValue":"","rightValue":"","operator":{"type":"string","operation":"equals"}}],"combinator":"and"}}]}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly rules?: { values: Array<{ conditions?: unknown, renameOutput?: boolean, outputKey?: string }> };

    /** If the type of an expression doesn't match the type of the comparison, n8n will try to cast the expression to the required type. E.g. for booleans <code>"false"</code> or <code>0</code> will be cast to <code>false</code> */
    readonly looseTypeValidation?: boolean;

    /** Default: {} */
    readonly options?: { fallbackOutput?: string, ignoreCase?: boolean, looseTypeValidation?: boolean, renameFallbackOutput?: string, allMatchingOutputs?: boolean };

}
