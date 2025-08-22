// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/HtmlExtract/HtmlExtract.node.ts' node

export const name = "htmlExtract" as const;
export const description = "Extracts data from HTML" as const;
export const version = 1 as const;

/**
 * Extracts data from HTML
 */
export interface HtmlExtractNodeParameters {

    /**
     * If HTML should be read from binary or JSON data
     * Default: "json"
     */
    readonly sourceData?: "binary" | "json";

    /**
     * Default: "data"
     */
    readonly dataPropertyName?: string | string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly extractionValues?: { "values": any };

    /**
     * Default: {}
     */
    readonly options?: { "trimValues"?: boolean };


}

