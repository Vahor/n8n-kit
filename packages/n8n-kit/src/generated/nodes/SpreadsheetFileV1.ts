// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/SpreadsheetFile/v1/SpreadsheetFileV1.node.ts' node

export const description = "Reads and writes data from a spreadsheet file like CSV, XLS, ODS, etc" as const;
export const type = "n8n-nodes-base.spreadsheetFile" as const;
export const version = 1 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface SpreadsheetFileV1NodeParameters {
    /** Default: "fromFile" */
    readonly operation?: "fromFile" | "toFile";

    /** Default: "data" */
    readonly binaryPropertyName?: string;

    /**
     * The format of the file to save the data as
     * Default: "xls"
     */
    readonly fileFormat?: "csv" | "html" | "ods" | "rtf" | "xls" | "xlsx";

    /** Default: {} */
    readonly options?: { "delimiter"?: string, "encoding"?: "ascii" | "latin1" | "ucs-2" | "ucs2" | "utf-8" | "utf16le" | "utf8", "enableBOM"?: boolean, "relaxQuotes"?: boolean, "headerRow"?: boolean, "includeEmptyCells"?: boolean, "maxRowCount"?: number, "range"?: string, "rawData"?: boolean, "readAsString"?: boolean, "sheetName"?: string, "fromLine"?: number } | { "compression"?: boolean, "fileName"?: string, "headerRow"?: boolean, "sheetName"?: string };

}
