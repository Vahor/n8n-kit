// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Function/Function.node.ts' node

export const name = "function" as const;
export const description = "Run custom function code which gets executed once and allows you to add, remove, change and replace items" as const;
export const version = 1 as const;

/**
 * Run custom function code which gets executed once and allows you to add, remove, change and replace items
 */
export interface FunctionNodeParameters {

    /**
     */
    readonly notice?: string;

    /**
     * The JavaScript code to execute
     * Default: "// Code here will run only once, no matter how many input items there are.\n// More info and help:https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.function/\n// Tip: You can use luxon for dates and $jmespath for querying JSON structures\n\n// Loop over inputs and add a new field called 'myNewField' to the JSON of each one\nfor (item of items) {\n  item.json.myNewField = 1;\n}\n\n// You can write logs to the browser console\nconsole.log('Done!');\n\nreturn items;"
     * Type options: {"alwaysOpenEditWindow":true,"codeAutocomplete":"function","editor":"jsEditor","rows":10}
     */
    readonly functionCode?: string;


}

