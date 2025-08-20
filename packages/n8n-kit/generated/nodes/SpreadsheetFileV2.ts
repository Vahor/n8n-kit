// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/SpreadsheetFile/v2/SpreadsheetFileV2.node.ts' node

export const name = "undefined" as const;
export const description = "undefined" as const;
export const version = 2 as const;
export const defaults = {"name":"Spreadsheet File","color":"#2244FF"} as const;

/**
 * undefined
 */
export interface SpreadsheetFileV2NodeParameters {

    /**
     * Default: "fromFile"
     */
    readonly operation?: "fromFile" | "toFile";

    /**
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * The format of the binary data to read from
     * Default: "autodetect"
     */
    readonly fileFormat?: "autodetect" | "csv" | "html" | "ods" | "rtf" | "xls" | "xlsx";

    /**
     * Default: {}
     */
    readonly options?: { "delimiter"?: string, "encoding"?: "ascii" | "latin1" | "ucs-2" | "ucs2" | "utf-8" | "utf16le" | "utf8", "enableBOM"?: boolean, "relaxQuotes"?: boolean, "headerRow"?: boolean, "includeEmptyCells"?: boolean, "maxRowCount"?: number, "range"?: string, "rawData"?: boolean, "readAsString"?: boolean, "sheetName"?: string, "fromLine"?: number, "compression"?: boolean, "fileName"?: string };


}

