// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Google/Sheet/v1/GoogleSheetsV1.node.ts' node

export const name = "googleSheets" as const;
export const description = "Read, update and write data to Google Sheets" as const;
export const version = 2 as const;
export const defaults = {"name":"Google Sheets"} as const;
export const credentials = [{"name":"googleApi","required":true,"displayOptions":{"show":{"authentication":["serviceAccount"]}},"testedBy":"googleApiCredentialTest"},{"name":"googleSheetsOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const

/**
 * Read, update and write data to Google Sheets
 */
export interface GoogleSheetsV1NodeParameters {

    /**
     * Default: "serviceAccount"
     */
    readonly authentication?: "serviceAccount" | "oAuth2" | "oAuth2";

    /**
     * Default: "sheet"
     */
    readonly resource?: "spreadsheet" | "sheet";

    /**
     * Default: "read"
     */
    readonly operation?: "append" | "clear" | "create" | "upsert" | "delete" | "lookup" | "read" | "remove" | "update";

    /**
     * The ID of the Google Spreadsheet. Found as part of the sheet URL https://docs.google.com/spreadsheets/d/{ID}/.
     */
    readonly sheetId?: string;

    /**
     * The table range to read from or to append data to. See the Google <a href="https://developers.google.com/sheets/api/guides/values#writing">documentation</a> for the details. If it contains multiple sheets it can also be added like this: "MySheet!A:F"
     * Default: "A:F"
     */
    readonly range?: string;

    /**
     * Deletes columns and rows from a sheet
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly toDelete?: { "columns": any, "rows": any };

    /**
     * Whether the data should be returned RAW instead of parsed into keys according to their header
     */
    readonly rawData?: boolean;

    /**
     * The name of the property into which to write the RAW data
     * Default: "data"
     */
    readonly dataProperty?: string;

    /**
     * Index of the first row which contains the actual data and not the keys. Starts with 0.
     * Default: 1
     * Type options: {"minValue":1}
     */
    readonly dataStartRow?: number;

    /**
     * Index of the row which contains the keys. Starts at 0. The incoming node data is matched to the keys for assignment. The matching is case sensitive.
     * Type options: {"minValue":0}
     */
    readonly keyRow?: number;

    /**
     * The name of the column in which to look for value
     */
    readonly lookupColumn?: string;

    /**
     * The value to look for in column
     */
    readonly lookupValue?: string;

    /**
     * The name of the key to identify which data should be updated in the sheet
     * Default: "id"
     */
    readonly key?: string;

    /**
     * Default: {}
     */
    readonly options?: { "continue"?: boolean, "returnAllMatches"?: boolean, "usePathForKeyRow"?: boolean, "valueInputMode"?: "RAW" | "USER_ENTERED", "valueRenderMode"?: "FORMATTED_VALUE" | "FORMULA" | "UNFORMATTED_VALUE", "valueRenderMode"?: "FORMATTED_VALUE" | "FORMULA" | "UNFORMATTED_VALUE", "locale"?: string, "autoRecalc"?: "" | "ON_CHANGE" | "MINUTE" | "HOUR", "gridProperties"?: { "columnCount"?: number, "columnGroupControlAfter"?: boolean, "frozenColumnCount"?: number, "frozenRowCount"?: number, "hideGridlines"?: boolean, "rowCount"?: number, "rowGroupControlAfter"?: boolean }, "hidden"?: boolean, "rightToLeft"?: boolean, "sheetId"?: number, "index"?: number, "tabColor"?: any, "title"?: string };

    /**
     * The title of the spreadsheet
     */
    readonly title?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly sheetsUi?: { "sheetValues": any };

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;

    /**
     * The ID of the sheet to delete
     */
    readonly id?: string;


}

