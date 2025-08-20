// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Xml/Xml.node.ts' node

export const name = "xml" as const;
export const description = "Convert data from and to XML" as const;
export const version = 1 as const;
export const defaults = {"name":"XML","color":"#333377"} as const;

/**
 * Convert data from and to XML
 */
export interface XmlNodeParameters {

    /**
     * From and to what format the data should be converted
     * Default: "xmlToJson"
     */
    readonly mode?: "jsonToxml" | "xmlToJson";

    /**
     */
    readonly xmlNotice?: string;

    /**
     * Name of the property to which to contains the converted XML data
     * Default: "data"
     */
    readonly dataPropertyName?: string;

    /**
     * Default: {}
     */
    readonly options?: { "allowSurrogateChars"?: boolean, "attrkey"?: string, "cdata"?: boolean, "charkey"?: string, "headless"?: boolean, "rootName"?: string, "explicitArray"?: boolean, "explicitRoot"?: boolean, "ignoreAttrs"?: boolean, "mergeAttrs"?: boolean, "normalize"?: boolean, "normalizeTags"?: boolean, "trim"?: boolean };


}

