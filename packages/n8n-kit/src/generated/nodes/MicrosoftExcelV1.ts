// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Microsoft/Excel/v1/MicrosoftExcelV1.node.ts' node

export const name = "microsoftExcel" as const;
export const description = "Consume Microsoft Excel API" as const;
export const version = 1 as const;
export const credentials = [{"name":"microsoftExcelOAuth2Api","required":true}] as const;

/**
 * Consume Microsoft Excel API
 */
export interface MicrosoftExcelV1NodeParameters {

    /**
     */
    readonly oldVersionNotice?: string;

    /**
     * Default: "workbook"
     */
    readonly resource?: "table" | "workbook" | "worksheet";

    /**
     * Default: "create"
     */
    readonly operation?: "addWorksheet" | "getAll" | "getAll" | "getContent" | "addRow" | "getColumns" | "getRows" | "lookup";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getWorkbooks"}
     */
    readonly workbook?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "name"?: string } | { "index"?: number };

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly filters?: { "fields"?: string };

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getworksheets","loadOptionsDependsOn":["workbook"]}
     */
    readonly worksheet?: string;

    /**
     * The address or the name of the range. If not specified, the entire worksheet range is returned.
     * Default: "A1:C3"
     */
    readonly range?: string;

    /**
     * Whether the data should be returned RAW instead of parsed into keys according to their header
     */
    readonly rawData?: boolean;

    /**
     * The name of the property into which to write the RAW data
     * Default: "data"
     */
    readonly dataProperty?: string;

    /**
     * Index of the first row which contains the actual data and not the keys. Starts with 0.
     * Default: 1
     * Type options: {"minValue":1}
     */
    readonly dataStartRow?: number;

    /**
     * Index of the row which contains the keys. Starts at 0. The incoming node data is matched to the keys for assignment. The matching is case sensitve.
     * Type options: {"minValue":0}
     */
    readonly keyRow?: number;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getTables","loadOptionsDependsOn":["worksheet"]}
     */
    readonly table?: string;

    /**
     * The name of the column in which to look for value
     */
    readonly lookupColumn?: string;

    /**
     * The value to look for in column
     */
    readonly lookupValue?: string;

    /**
     * Default: {}
     */
    readonly options?: { "returnAllMatches"?: boolean };


}

