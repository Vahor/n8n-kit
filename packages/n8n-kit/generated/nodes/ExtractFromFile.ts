// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Files/ExtractFromFile/ExtractFromFile.node.ts' node

export const name = "extractFromFile" as const;
export const description = "Convert binary data to JSON" as const;
export const version = 1 as const;
export const defaults = {"name":"Extract from File"} as const;

/**
 * Convert binary data to JSON
 */
export interface ExtractFromFileNodeParameters {

    /**
     * Default: "csv"
     */
    readonly operation?: "csv" | "html" | "fromIcs" | "fromJson" | "ods" | "pdf" | "rtf" | "text" | "xml" | "xls" | "xlsx" | "binaryToPropery";

    /**
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * Default: {}
     */
    readonly options?: { "delimiter"?: string, "encoding"?: "ascii" | "latin1" | "ucs-2" | "ucs2" | "utf-8" | "utf16le" | "utf8", "enableBOM"?: boolean, "relaxQuotes"?: boolean, "headerRow"?: boolean, "includeEmptyCells"?: boolean, "maxRowCount"?: number, "range"?: string, "rawData"?: boolean, "readAsString"?: boolean, "sheetName"?: string, "fromLine"?: number, "compression"?: boolean, "fileName"?: string, "stripBOM"?: boolean, "keepSource"?: "json" | "binary" | "both", "joinPages"?: boolean, "maxPages"?: number, "password"?: string };

    /**
     * The name of the output field that will contain the extracted data
     * Default: "data"
     */
    readonly destinationKey?: string;


}

