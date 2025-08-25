// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/ItemLists/V2/ItemListsV2.node.ts' node

export const description = "Helper for working with lists of items and transforming arrays" as const;
export const type = "n8n-nodes-base.itemLists" as const;
export const version = 2.2 as const;
export const credentials = [] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface ItemListsV2NodeParameters {
    /** Default: "splitOutItems" */
    readonly operation?: "aggregateItems" | "limit" | "removeDuplicates" | "sort" | "splitOutItems" | "summarize";

    /** The name of the input fields to break out into separate items */
    readonly fieldToSplitOut?: string;

    /**
     * Whether to copy any other fields into the new items
     * Default: "noOtherFields"
     */
    readonly include?: "noOtherFields" | "allOtherFields" | "selectedOtherFields" | "allFields" | "specifiedFields" | "allFieldsExcept";

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly fieldsToInclude?: { fields: Array<{ fieldName?: string }> };

    /** Default: "aggregateIndividualFields" */
    readonly aggregate?: "aggregateIndividualFields" | "aggregateAllItemData";

    /**
     * Default: {"fieldToAggregate":[{"fieldToAggregate":"","renameField":false}]}
     * Type options: {"multipleValues":true}
     */
    readonly fieldsToAggregate?: { fieldToAggregate: Array<{ fieldToAggregate?: string, renameField?: boolean, outputFieldName?: string }> };

    /**
     * The name of the output field to put the data in
     * Default: "data"
     */
    readonly destinationFieldName?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly fieldsToExclude?: { fields: Array<{ fieldName?: string }> };

    /**
     * The fields of the input items to compare to see if they are the same
     * Default: "allFields"
     */
    readonly compare?: "allFields" | "allFieldsExcept" | "selectedFields";

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly fieldsToCompare?: { fields: Array<{ fieldName?: string }> };

    /**
     * The fields of the input items to compare to see if they are the same
     * Default: "simple"
     */
    readonly type?: "simple" | "random" | "code";

    /**
     * The fields of the input items to compare to see if they are the same
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly sortFieldsUi?: { sortField: Array<{ fieldName: string, order?: "ascending" | "descending" }> };

    /**
     * Javascript code to determine the order of any two items
     * Default: "// The two items to compare are in the variables a and b\n// Access the fields in a.json and b.json\n// Return -1 if a should go before b\n// Return 1 if b should go before a\n// Return 0 if there's no difference\n\nfieldName = 'myField';\n\nif (a.json[fieldName] < b.json[fieldName]) {\n\t\treturn -1;\n}\nif (a.json[fieldName] > b.json[fieldName]) {\n\t\treturn 1;\n}\nreturn 0;"
     * Type options: {"alwaysOpenEditWindow":true,"editor":"jsEditor","rows":10}
     */
    readonly code?: string;

    /**
     * If there are more items than this number, some are removed
     * Default: 1
     * Type options: {"minValue":1}
     */
    readonly maxItems?: number;

    /**
     * When removing items, whether to keep the ones at the start or the ending
     * Default: "firstItems"
     */
    readonly keep?: "firstItems" | "lastItems";

    /** Default: {} */
    readonly options?: { removeOtherFields?: boolean, disableDotNotation?: boolean } | { disableDotNotation?: boolean } | { disableDotNotation?: boolean, destinationFieldName?: string, mergeLists?: boolean, keepMissing?: boolean } | { disableDotNotation?: boolean, outputFormat?: "separateItems" | "singleItem", skipEmptySplitFields?: boolean };

    /**
     * Default: {"values":[{"aggregation":"count","field":""}]}
     * Type options: {"multipleValues":true}
     */
    readonly fieldsToSummarize?: { values: Array<{ aggregation?: "append" | "average" | "concatenate" | "count" | "countUnique" | "max" | "min" | "sum", field?: string, includeEmpty?: boolean, separateBy?: "," | ", " | "\n" | "" | " " | "other", customSeparator?: string }> };

    /** The name of the input fields that you want to split the summary by */
    readonly fieldsToSplitBy?: string;

}
