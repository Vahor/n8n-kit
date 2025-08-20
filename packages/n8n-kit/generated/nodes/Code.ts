// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Code/Code.node.ts' node

export const name = "code" as const;
export const description = "Run custom JavaScript or Python code" as const;
export const version = 2 as const;
export const defaults = {"name":"Code"} as const;

/**
 * Run custom JavaScript or Python code
 */
export interface CodeNodeParameters {

    /**
     * Default: "runOnceForAllItems"
     */
    readonly mode?: "runOnceForAllItems" | "runOnceForEachItem";

    /**
     * Default: "javaScript"
     */
    readonly language?: any;

    /**
     */
    readonly notice?: string;


}

