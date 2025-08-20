// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Google/Sheet/v2/GoogleSheetsV2.node.ts' node

export const name = "googleSheets" as const;
export const description = "Read, update and write data to Google Sheets" as const;
export const version = 4.7 as const;
export const defaults = {"name":"Google Sheets"} as const;
export const credentials = [{"name":"googleApi","required":true,"displayOptions":{"show":{"authentication":["serviceAccount"]}},"testedBy":"googleApiCredentialTest"},{"name":"googleSheetsOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const

/**
 * Read, update and write data to Google Sheets
 */
export interface GoogleSheetsV2NodeParameters {

    /**
     * Default: "sheet"
     */
    readonly resource?: "spreadsheet" | "sheet";

    /**
     * Default: "read"
     */
    readonly operation?: "appendOrUpdate" | "append" | "clear" | "create" | "remove" | "delete" | "read" | "update";

    /**
     * Default: {"mode":"list","value":""}
     */
    readonly documentId?: any;

    /**
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["documentId.value"]}
     */
    readonly sheetName?: any;

    /**
     * Whether to insert the input data this node receives in the new row
     * Default: "defineBelow"
     */
    readonly dataMode?: "autoMapInputData" | "defineBelow" | "nothing";

    /**
     */
    readonly autoMapNotice?: string;

    /**
     * Default: {}
     * Type options: {"multipleValueButtonText":"Add Field to Send","multipleValues":true}
     */
    readonly fieldsUi?: { "fieldValues": any, "values": any };

    /**
     * Default: {"mappingMode":"defineBelow","value":"null"}
     * Type options: {"loadOptionsDependsOn":["sheetName.value"],"resourceMapper":{"resourceMapperMethod":"getMappingColumns","mode":"add","fieldWords":{"singular":"column","plural":"columns"},"addAllFields":true,"multiKeyMatch":false}}
     */
    readonly columns?: any;

    /**
     * Default: {}
     */
    readonly options?: { "undefined"?: any, "locationDefine"?: { "values": any }, "undefined"?: any, "undefined"?: any, "undefined"?: any, "hidden"?: boolean, "rightToLeft"?: boolean, "sheetId"?: number, "index"?: number, "tabColor"?: any, "returnFirstMatch"?: boolean, "returnAllMatches"?: "returnFirstMatch" | "returnAllMatches", "locale"?: string, "autoRecalc"?: "" | "ON_CHANGE" | "MINUTE" | "HOUR" };

    /**
     * What to clear
     * Default: "wholeSheet"
     */
    readonly clear?: "wholeSheet" | "specificRows" | "specificColumns" | "specificRange";

    /**
     */
    readonly keepFirstRow?: boolean;

    /**
     * The row number to delete from, The first row is 1
     * Default: 1
     * Type options: {"minValue":1}
     */
    readonly startIndex?: number;

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
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsDependsOn":["sheetName.value"],"loadOptionsMethod":"getSheetHeaderRowAndSkipEmpty"}
     */
    readonly columnToMatchOn?: string;

    /**
     */
    readonly valueToMatchOn?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly sheetsUi?: { "sheetValues": any };


}

