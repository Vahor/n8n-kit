// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Files/ConvertToFile/ConvertToFile.node.ts' node

export const name = "convertToFile" as const;
export const description = "Convert JSON data to binary data" as const;
export const version = 1.1 as const;
export const defaults = {"name":"Convert to File"} as const;

/**
 * Convert JSON data to binary data
 */
export interface ConvertToFileNodeParameters {

    /**
     * Default: "csv"
     */
    readonly operation?: "csv" | "html" | "iCal" | "toJson" | "ods" | "rtf" | "toText" | "xls" | "xlsx" | "toBinary";

    /**
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * Default: {}
     */
    readonly options?: { "compression"?: boolean, "delimiter"?: string, "fileName"?: string, "headerRow"?: boolean, "sheetName"?: string, "addBOM"?: boolean, "dataIsBase64"?: boolean, "encoding"?: "armscii8" | "ascii" | "base64" | "big5hkscs" | "binary" | "cesu8" | "cp1046" | "cp1124" | "cp1125" | "cp1129" | "cp1133" | "cp1161" | "cp1162" | "cp1163" | "cp437" | "cp720" | "cp737" | "cp775" | "cp808" | "cp850" | "cp852" | "cp855" | "cp856" | "cp857" | "cp858" | "cp860" | "cp861" | "cp862" | "cp863" | "cp864" | "cp865" | "cp866" | "cp869" | "cp922" | "cp936" | "cp949" | "cp950" | "eucjp" | "gb18030" | "gbk" | "georgianacademy" | "georgianps" | "hex" | "hproman8" | "iso646cn" | "iso646jp" | "iso88591" | "iso885910" | "iso885911" | "iso885913" | "iso885914" | "iso885915" | "iso885916" | "iso88592" | "iso88593" | "iso88594" | "iso88595" | "iso88596" | "iso88597" | "iso88598" | "iso88599" | "koi8r" | "koi8ru" | "koi8t" | "koi8u" | "maccenteuro" | "maccroatian" | "maccyrillic" | "macgreek" | "maciceland" | "macintosh" | "macroman" | "macromania" | "macthai" | "macturkish" | "macukraine" | "mik" | "pt154" | "rk1048" | "shiftjis" | "tcvn" | "tis620" | "ucs2" | "utf16" | "utf16be" | "utf32" | "utf32be" | "utf32le" | "utf7" | "utf7imap" | "utf8" | "viscii" | "windows1250" | "windows1251" | "windows1252" | "windows1253" | "windows1254" | "windows1255" | "windows1256" | "windows1257" | "windows1258" | "windows874", "mimeType"?: string, "format"?: boolean };

    /**
     * The name of the input field that contains the base64 string to convert to a file. Use dot-notation for deep fields (e.g. 'level1.level2.currentKey').
     */
    readonly sourceProperty?: string;

    /**
     * Default: "once"
     */
    readonly mode?: "once" | "each";

    /**
     */
    readonly title?: string;

    /**
     * Date and time at which the event begins. (For all-day events, the time will be ignored.).
     */
    readonly start?: string;

    /**
     * Date and time at which the event ends. (For all-day events, the time will be ignored.).
     */
    readonly end?: string;

    /**
     * Whether the event lasts all day or not
     */
    readonly allDay?: boolean;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "attendeesUi"?: { "attendeeValues": any }, "busyStatus"?: "BUSY" | "TENTATIVE", "calName"?: string, "description"?: string, "fileName"?: string, "geolocationUi"?: { "geolocationValues": any }, "location"?: string, "recurrenceRule"?: string, "organizerUi"?: { "organizerValues": any }, "sequence"?: number, "status"?: "CONFIRMED" | "CANCELLED" | "TENTATIVE", "uid"?: string, "url"?: string, "useWorkflowTimezone"?: boolean };


}

