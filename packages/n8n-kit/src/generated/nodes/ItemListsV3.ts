// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/ItemLists/V3/ItemListsV3.node.ts' node

export const description = "Helper for working with lists of items and transforming arrays" as const;
export const type = "n8n-nodes-base.itemLists" as const;
export const version = 3.1 as const;
export const credentials = [] as const;
export const outputs = {"main":"main"} as const;

export interface ItemListsV3NodeParameters {

    /**
     * Default: "itemList"
     */
    readonly resource?: any;

    /**
     * Default: "splitOutItems"
     */
    readonly operation?: "concatenateItems" | "limit" | "removeDuplicates" | "sort" | "splitOutItems" | "summarize";

    /**
     * Default: "aggregateIndividualFields"
     */
    readonly aggregate?: "aggregateIndividualFields" | "aggregateAllItemData";

    /**
     * Default: {"fieldToAggregate":[{"fieldToAggregate":"","renameField":false}]}
     * Type options: {"multipleValues":true}
     */
    readonly fieldsToAggregate?: { "fieldToAggregate": any };

    /**
     * The name of the output field to put the data in
     * Default: "data"
     */
    readonly destinationFieldName?: string;

    /**
     * Default: "allFields"
     */
    readonly include?: "allFields" | "specifiedFields" | "allFieldsExcept" | "noOtherFields" | "allOtherFields" | "selectedOtherFields";

    readonly fieldsToExclude?: string;

    readonly fieldsToInclude?: string;

    /**
     * Default: {}
     */
    readonly options?: { "disableDotNotation"?: boolean, "mergeLists"?: boolean, "includeBinaries"?: boolean, "keepOnlyUnique"?: boolean, "keepMissing"?: boolean } | { "disableDotNotation"?: boolean, "removeOtherFields"?: boolean } | { "disableDotNotation"?: boolean } | { "disableDotNotation"?: boolean, "destinationFieldName"?: string, "includeBinary"?: boolean } | { "disableDotNotation"?: boolean, "outputFormat"?: "separateItems" | "singleItem", "skipEmptySplitFields"?: boolean };

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

    /**
     * The fields of the input items to compare to see if they are the same
     * Default: "allFields"
     */
    readonly compare?: "allFields" | "allFieldsExcept" | "selectedFields";

    /**
     * Fields in the input to add to the comparison
     */
    readonly fieldsToCompare?: string;

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
    readonly sortFieldsUi?: { "sortField": any };

    /**
     * Javascript code to determine the order of any two items
     * Default: "// The two items to compare are in the variables a and b\n// Access the fields in a.json and b.json\n// Return -1 if a should go before b\n// Return 1 if b should go before a\n// Return 0 if there's no difference\n\nfieldName = 'myField';\n\nif (a.json[fieldName] < b.json[fieldName]) {\nreturn -1;\n}\nif (a.json[fieldName] > b.json[fieldName]) {\nreturn 1;\n}\nreturn 0;"
     * Type options: {"alwaysOpenEditWindow":true,"editor":"jsEditor","rows":10}
     */
    readonly code?: string;

    /**
     * The name of the input fields to break out into separate items. Separate multiple field names by commas. For binary data, use $binary.
     */
    readonly fieldToSplitOut?: string;

    /**
     * Default: {"values":[{"aggregation":"count","field":""}]}
     * Type options: {"multipleValues":true}
     */
    readonly fieldsToSummarize?: { "values": any };

    /**
     * The name of the input fields that you want to split the summary by
     */
    readonly fieldsToSplitBy?: string;


}

