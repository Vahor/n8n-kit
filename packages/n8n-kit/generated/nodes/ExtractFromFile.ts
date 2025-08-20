// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Files/ExtractFromFile/ExtractFromFile.node.ts' node

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


}

