// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Files/ExtractFromFile/ExtractFromFile.node.ts' node

export const name = "extractFromFile" as const;
export const description = "Convert binary data to JSON" as const;
export const version = 1 as const;

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
    readonly binaryPropertyName?: string | string | string;

    /**
     * Default: {}
     */
    readonly options?: { "delimiter"?: string, "encoding"?: "ascii" | "latin1" | "ucs-2" | "ucs2" | "utf-8" | "utf16le" | "utf8", "enableBOM"?: boolean, "relaxQuotes"?: boolean, "headerRow"?: boolean, "includeEmptyCells"?: boolean, "maxRowCount"?: number, "range"?: string, "rawData"?: boolean, "readAsString"?: boolean, "sheetName"?: string, "fromLine"?: number } | { "encoding"?: "armscii8" | "ascii" | "base64" | "big5hkscs" | "binary" | "cesu8" | "cp1046" | "cp1124" | "cp1125" | "cp1129" | "cp1133" | "cp1161" | "cp1162" | "cp1163" | "cp437" | "cp720" | "cp737" | "cp775" | "cp808" | "cp850" | "cp852" | "cp855" | "cp856" | "cp857" | "cp858" | "cp860" | "cp861" | "cp862" | "cp863" | "cp864" | "cp865" | "cp866" | "cp869" | "cp922" | "cp936" | "cp949" | "cp950" | "eucjp" | "gb18030" | "gbk" | "georgianacademy" | "georgianps" | "hex" | "hproman8" | "iso646cn" | "iso646jp" | "iso88591" | "iso885910" | "iso885911" | "iso885913" | "iso885914" | "iso885915" | "iso885916" | "iso88592" | "iso88593" | "iso88594" | "iso88595" | "iso88596" | "iso88597" | "iso88598" | "iso88599" | "koi8r" | "koi8ru" | "koi8t" | "koi8u" | "maccenteuro" | "maccroatian" | "maccyrillic" | "macgreek" | "maciceland" | "macintosh" | "macroman" | "macromania" | "macthai" | "macturkish" | "macukraine" | "mik" | "pt154" | "rk1048" | "shiftjis" | "tcvn" | "tis620" | "ucs2" | "utf16" | "utf16be" | "utf32" | "utf32be" | "utf32le" | "utf7" | "utf7imap" | "utf8" | "viscii" | "windows1250" | "windows1251" | "windows1252" | "windows1253" | "windows1254" | "windows1255" | "windows1256" | "windows1257" | "windows1258" | "windows874", "stripBOM"?: boolean, "keepSource"?: "json" | "binary" | "both" } | { "joinPages"?: boolean, "keepSource"?: "json" | "binary" | "both", "maxPages"?: number, "password"?: string };

    /**
     * The name of the output field that will contain the extracted data
     * Default: "data"
     */
    readonly destinationKey?: string;


}

