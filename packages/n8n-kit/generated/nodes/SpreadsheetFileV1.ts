// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/SpreadsheetFile/v1/SpreadsheetFileV1.node.js' node

export const name = "undefined" as const;
export const description = "undefined" as const;
export const version = 1 as const;
export const defaults = {"name":"Spreadsheet File","color":"#2244FF"} as const;

/**
 * undefined
 */
export interface SpreadsheetFileV1NodeParameters {

    /**
     */
    readonly oldVersionNotice?: string;

    /**
     * Default: "fromFile"
     */
    readonly operation?: "fromFile" | "toFile";

    /**
     * Name of the binary property from which to read the binary data of the spreadsheet file
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * The format of the file to save the data as
     * Default: "xls"
     */
    readonly fileFormat?: "csv" | "html" | "ods" | "rtf" | "xls" | "xlsx";

    /**
     * Default: {}
     */
    readonly options?: { "compression"?: boolean, "fileName"?: string, "headerRow"?: boolean, "delimiter"?: string, "fromLine"?: number, "maxRowCount"?: number, "enableBOM"?: boolean, "includeEmptyCells"?: boolean, "rawData"?: boolean, "readAsString"?: boolean, "range"?: string, "sheetName"?: string, "sheetName"?: string };


}

