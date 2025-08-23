// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/FunctionItem/FunctionItem.node.ts' node

export const description = "Run custom function code which gets executed once per item" as const;
export const type = "n8n-nodes-base.functionItem" as const;
export const version = 1 as const;

/**
 * Run custom function code which gets executed once per item
 */
export interface FunctionItemNodeParameters {

    readonly notice?: string;

    /**
     * The JavaScript code to execute for each item
     * Default: "// Code here will run once per input item.\n// More info and help: https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.functionitem/\n// Tip: You can use luxon for dates and $jmespath for querying JSON structures\n\n// Add a new field called 'myNewField' to the JSON of the item\nitem.myNewField = 1;\n\n// You can write logs to the browser console\nconsole.log('Done!');\n\nreturn item;"
     * Type options: {"alwaysOpenEditWindow":true,"codeAutocomplete":"functionItem","editor":"jsEditor","rows":10}
     */
    readonly functionCode?: string;


}

