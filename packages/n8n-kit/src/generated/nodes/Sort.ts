// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Transform/Sort/Sort.node.ts' node

export const description = "Change items order" as const;
export const type = "n8n-nodes-base.sort" as const;
export const version = 1 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface SortNodeParameters {
    /**
     * The type of sorting to perform
     * Default: "simple"
     */
    readonly type?: "simple" | "random" | "code";

    /**
     * The fields of the input items to sort by
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly sortFieldsUi?: { sortField: Array<{ fieldName: string, order?: "ascending" | "descending" }> };

    /**
     * Javascript code to determine the order of any two items
     * Default: "// The two items to compare are in the variables a and b\n\t// Access the fields in a.json and b.json\n\t// Return -1 if a should go before b\n\t// Return 1 if b should go before a\n\t// Return 0 if there's no difference\n\n\tfieldName = 'myField';\n\n\tif (a.json[fieldName] < b.json[fieldName]) {\n\treturn -1;\n\t}\n\tif (a.json[fieldName] > b.json[fieldName]) {\n\treturn 1;\n\t}\n\treturn 0;"
     * Type options: {"alwaysOpenEditWindow":true,"editor":"jsEditor","rows":10}
     */
    readonly code?: string;

    /** Default: {} */
    readonly options?: { disableDotNotation?: boolean };

}
