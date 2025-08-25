// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Microsoft/Excel/v2/MicrosoftExcelV2.node.ts' node

export const description = "Consume Microsoft Excel API" as const;
export const type = "n8n-nodes-base.microsoftExcel" as const;
export const version = 2.1 as const;
export const credentials = [{"name":"microsoftExcelOAuth2Api","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface MicrosoftExcelV2NodeParameters {
    /** Default: "workbook" */
    readonly resource?: "table" | "workbook" | "worksheet";

    /** Default: "append" */
    readonly operation?: "append" | "convertToRange" | "addTable" | "deleteTable" | "getColumns" | "getRows" | "lookup" | "addWorksheet" | "deleteWorkbook" | "getAll" | "append" | "upsert" | "clear" | "deleteWorksheet" | "getAll" | "readRows" | "update";

    /** Default: {"mode":"list","value":""} */
    readonly workbook?: {
	value: string,
	mode: "list" | "id",
};

    /** Default: {"mode":"list","value":""} */
    readonly worksheet?: {
	value: string,
	mode: "list" | "id",
};

    /** Default: {"mode":"list","value":""} */
    readonly table?: {
	value: string,
	mode: "list" | "id",
};

    /** Default: "define" */
    readonly dataMode?: "autoMap" | "define" | "raw" | "autoMap" | "define";

    /** Raw values for the specified range as array of string arrays in JSON format */
    readonly data?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly fieldsUi?: { values: { column?: string, fieldValue?: string } };

    /** Default: {} */
    readonly options?: { index?: number, rawData?: boolean, dataProperty: string } | { returnAllMatches?: boolean } | { rawData?: boolean, dataProperty: string } | { rawData?: boolean, dataProperty: string, fields?: string } | { rawData?: boolean, dataProperty: string, fields?: string, updateAll?: boolean } | { appendAfterSelectedRange?: boolean, rawData?: boolean, dataProperty: string, updateAll?: boolean };

    /** Default: "auto" */
    readonly selectRange?: "auto" | "manual";

    /** The range of cells that will be converted to a table */
    readonly range?: string;

    /**
     * Whether the range has column labels. When this property set to false Excel will automatically generate header shifting the data down by one row.
     * Default: true
     */
    readonly hasHeaders?: boolean;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /** Whether the data should be returned RAW instead of parsed into keys according to their header */
    readonly rawData?: boolean;

    /**
     * The name of the property into which to write the RAW data
     * Default: "data"
     */
    readonly dataProperty?: string;

    /** Default: {} */
    readonly filters?: { fields?: string } | { fields?: string, column?: any[] };

    /** The name of the column in which to look for value */
    readonly lookupColumn?: string;

    /** The value to look for in column */
    readonly lookupValue?: string;

    /** Default: {} */
    readonly additionalFields?: { name?: string };

    /** Default: "All" */
    readonly applyTo?: "All" | "Formats" | "Contents";

    readonly useRange?: boolean;

    /**
     * Relative to selected 'Range', first row index is 0
     * Type options: {"minValue":0}
     */
    readonly keyRow?: number;

    /**
     * Relative to selected 'Range', first row index is 0
     * Default: 1
     * Type options: {"minValue":0}
     */
    readonly dataStartRow?: number;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsDependsOn":["worksheet.value","workbook.value","range"],"loadOptionsMethod":"getWorksheetColumnRow"}
     */
    readonly columnToMatchOn?: string;

    readonly valueToMatchOn?: string;

}
