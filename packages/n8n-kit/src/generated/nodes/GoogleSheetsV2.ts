// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Google/Sheet/v2/GoogleSheetsV2.node.ts' node

export const description = "Read, update and write data to Google Sheets" as const;
export const type = "n8n-nodes-base.googleSheets" as const;
export const version = 4.7 as const;
export const credentials = [{"name":"googleApi","required":true,"displayOptions":{"show":{"authentication":["serviceAccount"]}},"testedBy":"googleApiCredentialTest"},{"name":"googleSheetsOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface GoogleSheetsV2NodeParameters {
    /** Default: "oAuth2" */
    readonly authentication?: "serviceAccount" | "oAuth2";

    /** Default: "sheet" */
    readonly resource?: "spreadsheet" | "sheet";

    /** Default: "read" */
    readonly operation?: "appendOrUpdate" | "append" | "clear" | "create" | "remove" | "delete" | "read" | "update" | "create" | "deleteSpreadsheet";

    /** Default: {"mode":"list","value":""} */
    readonly documentId?: {
	value: string,
	mode: "list" | "url" | "id",
};

    /**
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["documentId.value"]}
     */
    readonly sheetName?: {
	value: string,
	mode: "list" | "url" | "id" | "name",
};

    /**
     * Whether to insert the input data this node receives in the new row
     * Default: "defineBelow"
     */
    readonly dataMode?: "autoMapInputData" | "defineBelow" | "nothing";

    /**
     * Default: {}
     * Type options: {"multipleValueButtonText":"Add Field to Send","multipleValues":true}
     */
    readonly fieldsUi?: { fieldValues: { fieldId?: string, fieldValue?: string } } | { values: { column?: string, columnName?: string, fieldValue?: string } };

    /** Default: {} */
    readonly options?: { cellFormat?: "USER_ENTERED" | "RAW", locationDefine?: { values: { headerRow?: number } }, handlingExtraData?: "insertInNewColumn" | "ignoreIt" | "error", useAppend?: boolean } | { hidden?: boolean, rightToLeft?: boolean, sheetId?: number, index?: number, tabColor?: string } | { dataLocationOnSheet?: { values: { rangeDefinition?: "detectAutomatically" | "specifyRangeA1" | "specifyRange", readRowsUntil?: "firstEmptyRow" | "lastRowInSheet", headerRow?: number, firstDataRow?: number, range?: string } }, outputFormatting?: { values: { general?: "UNFORMATTED_VALUE" | "FORMATTED_VALUE" | "FORMULA", date?: "FORMATTED_STRING" | "SERIAL_NUMBER" } }, returnFirstMatch?: boolean, returnAllMatches?: "returnFirstMatch" | "returnAllMatches" } | { cellFormat?: "USER_ENTERED" | "RAW", locationDefine?: { values: { headerRow?: number, firstDataRow?: number } }, handlingExtraData?: "insertInNewColumn" | "ignoreIt" | "error" } | { cellFormat?: "USER_ENTERED" | "RAW", locationDefine?: { values: { headerRow?: number, firstDataRow?: number } }, handlingExtraData?: "insertInNewColumn" | "ignoreIt" | "error", useAppend?: boolean } | { locale?: string, autoRecalc?: "" | "ON_CHANGE" | "MINUTE" | "HOUR" };

    /**
     * What to clear
     * Default: "wholeSheet"
     */
    readonly clear?: "wholeSheet" | "specificRows" | "specificColumns" | "specificRange";

    readonly keepFirstRow?: boolean;

    /**
     * The row number to delete from, The first row is 1
     * Default: 1
     * Type options: {"minValue":1}
     */
    readonly startIndex?: number | string;

    /**
     * Default: 1
     * Type options: {"minValue":1}
     */
    readonly rowsToDelete?: number;

    /**
     * Default: 1
     * Type options: {"minValue":1}
     */
    readonly columnsToDelete?: number;

    /**
     * The table range to read from or to append data to. See the Google <a href="https://developers.google.com/sheets/api/guides/values#writing">documentation</a> for the details. If it contains multiple sheets it can also be added like this: "MySheet!A:F"
     * Default: "A:F"
     */
    readonly range?: string;

    /**
     * The name of the sheet
     * Default: "n8n-sheet"
     */
    readonly title?: string;

    /**
     * What to delete
     * Default: "rows"
     */
    readonly toDelete?: "rows" | "columns";

    /**
     * Default: 1
     * Type options: {"minValue":1}
     */
    readonly numberToDelete?: number;

    /**
     * Default: {}
     * Type options: {"multipleValueButtonText":"Add Filter","multipleValues":true}
     */
    readonly filtersUI?: { values: { lookupColumn?: string, lookupValue?: string } };

    /**
     * How to combine the conditions defined in "Filters": AND requires all conditions to be true, OR requires at least one condition to be true
     * Default: "OR"
     */
    readonly combineFilters?: "AND" | "OR";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsDependsOn":["sheetName.value"],"loadOptionsMethod":"getSheetHeaderRowAndSkipEmpty"}
     */
    readonly columnToMatchOn?: string;

    readonly valueToMatchOn?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly sheetsUi?: { sheetValues: { title?: string, hidden?: boolean } };

}
