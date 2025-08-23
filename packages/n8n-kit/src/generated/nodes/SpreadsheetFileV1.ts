// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/SpreadsheetFile/v1/SpreadsheetFileV1.node.ts' node

export const name = "undefined" as const;
export const description = "undefined" as const;
export const version = 1 as const;

/**
 * undefined
 */
export interface SpreadsheetFileV1NodeParameters {

    readonly oldVersionNotice?: string;

    /**
     * Default: "fromFile"
     */
    readonly operation?: "fromFile" | "toFile";

    /**
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
    readonly options?: { "delimiter"?: string, "encoding"?: "ascii" | "latin1" | "ucs-2" | "ucs2" | "utf-8" | "utf16le" | "utf8", "enableBOM"?: boolean, "relaxQuotes"?: boolean, "headerRow"?: boolean, "includeEmptyCells"?: boolean, "maxRowCount"?: number, "range"?: string, "rawData"?: boolean, "readAsString"?: boolean, "sheetName"?: string, "fromLine"?: number } | { "compression"?: boolean, "fileName"?: string, "headerRow"?: boolean, "sheetName"?: string };


}

