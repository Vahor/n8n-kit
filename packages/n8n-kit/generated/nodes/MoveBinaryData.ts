// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/MoveBinaryData/MoveBinaryData.node.ts' node

export const name = "moveBinaryData" as const;
export const description = "Move data between binary and JSON properties" as const;
export const version = 1.1 as const;
export const defaults = {"name":"Convert to/from binary data","color":"#7722CC"} as const;

/**
 * Move data between binary and JSON properties
 */
export interface MoveBinaryDataNodeParameters {

    /**
     * From and to where data should be moved
     * Default: "binaryToJson"
     */
    readonly mode?: "binaryToJson" | "jsonToBinary";

    /**
     * Whether all JSON data should be replaced with the data retrieved from binary key. Else the data will be written to a single key.
     * Default: true
     */
    readonly setAllData?: boolean;

    /**
     * The name of the binary key to get data from. It is also possible to define deep keys by using dot-notation like for example: "level1.level2.currentKey".
     * Default: "data"
     */
    readonly sourceKey?: string;

    /**
     * The name the JSON key to copy data to. It is also possible to define deep keys by using dot-notation like for example: "level1.level2.newKey".
     * Default: "data"
     */
    readonly destinationKey?: string;

    /**
     * Whether all JSON data should be converted to binary. Else only the data of one key will be converted.
     * Default: true
     */
    readonly convertAllData?: boolean;

    /**
     * Default: {}
     */
    readonly options?: { "addBOM"?: boolean, "dataIsBase64"?: boolean, "encoding"?: "armscii8" | "ascii" | "base64" | "big5hkscs" | "binary" | "cesu8" | "cp1046" | "cp1124" | "cp1125" | "cp1129" | "cp1133" | "cp1161" | "cp1162" | "cp1163" | "cp437" | "cp720" | "cp737" | "cp775" | "cp808" | "cp850" | "cp852" | "cp855" | "cp856" | "cp857" | "cp858" | "cp860" | "cp861" | "cp862" | "cp863" | "cp864" | "cp865" | "cp866" | "cp869" | "cp922" | "cp936" | "cp949" | "cp950" | "eucjp" | "gb18030" | "gbk" | "georgianacademy" | "georgianps" | "hex" | "hproman8" | "iso646cn" | "iso646jp" | "iso88591" | "iso885910" | "iso885911" | "iso885913" | "iso885914" | "iso885915" | "iso885916" | "iso88592" | "iso88593" | "iso88594" | "iso88595" | "iso88596" | "iso88597" | "iso88598" | "iso88599" | "koi8r" | "koi8ru" | "koi8t" | "koi8u" | "maccenteuro" | "maccroatian" | "maccyrillic" | "macgreek" | "maciceland" | "macintosh" | "macroman" | "macromania" | "macthai" | "macturkish" | "macukraine" | "mik" | "pt154" | "rk1048" | "shiftjis" | "tcvn" | "tis620" | "ucs2" | "utf16" | "utf16be" | "utf32" | "utf32be" | "utf32le" | "utf7" | "utf7imap" | "utf8" | "viscii" | "windows1250" | "windows1251" | "windows1252" | "windows1253" | "windows1254" | "windows1255" | "windows1256" | "windows1257" | "windows1258" | "windows874", "stripBOM"?: boolean, "fileName"?: string, "jsonParse"?: boolean, "keepSource"?: boolean, "keepAsBase64"?: boolean, "mimeType"?: string, "useRawData"?: boolean };


}

