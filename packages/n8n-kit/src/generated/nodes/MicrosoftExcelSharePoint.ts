// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Microsoft/ExcelSharePoint/MicrosoftExcelSharePoint.node.ts' node

export const description = "Read and write Excel workbooks stored in SharePoint document libraries" as const;
export const type = "n8n-nodes-base.microsoftExcelSharePoint" as const;
export const version = 1 as const;
export const credentials = [{"name":"microsoftOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["microsoftOAuth2Api"]}}},{"name":"microsoftEntraServicePrincipalApi","required":true,"displayOptions":{"show":{"authentication":["microsoftEntraServicePrincipalApi"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface MicrosoftExcelSharePointNodeParameters {
    /** Default: "microsoftOAuth2Api" */
    readonly authentication?: "microsoftOAuth2Api" | "microsoftEntraServicePrincipalApi";

    /** Default: "worksheet" */
    readonly resource?: "worksheet" | "table" | "workbook";

    /** Default: "readRows" */
    readonly operation?: "append" | "upsert" | "clear" | "deleteWorksheet" | "getAll" | "readRows" | "update" | "append" | "convertToRange" | "create" | "deleteTable" | "getColumns" | "getAll" | "getRows" | "lookup" | "addWorksheet" | "deleteWorkbook" | "getAll";

    /**
     * Pick the workbook by URL (no site or library needed), from the list, or by ID
     * Default: {"mode":"url","value":""}
     * Type options: {"loadOptionsDependsOn":["site.value","library.value"]}
     */
    readonly workbook?: {
	value: string,
	mode: "url" | "list" | "id",
};

    /**
     * The SharePoint site the workbook lives in. Only needed when the workbook is chosen from the list or by ID.
     * Default: {"mode":"list","value":""}
     */
    readonly site?: {
	value: string,
	mode: "list" | "url" | "id",
};

    /**
     * The document library the workbook lives in. Only needed when the workbook is chosen from the list or by ID.
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["site.value"]}
     */
    readonly library?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["workbook.value"]}
     */
    readonly worksheet?: {
	value: string,
	mode: "list" | "id",
};

    /** Default: "autoMap" */
    readonly dataMode?: "autoMap" | "define" | "raw" | "autoMap" | "define";

    /** Raw values for the specified range as array of string arrays in JSON format */
    readonly data?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly fieldsUi?: { values: Array<{ column?: string, fieldValue?: string }> };

    /** Default: {} */
    readonly options?: { rawData?: boolean, dataProperty: string } | { rawData?: boolean, dataProperty: string, fields?: string } | { fields?: string } | { rawData?: boolean, dataProperty: string, fields?: string, updateAll?: boolean } | { appendAfterSelectedRange?: boolean, rawData?: boolean, dataProperty: string, updateAll?: boolean } | { returnAllMatches?: boolean } | { index?: number, rawData?: boolean, dataProperty: string } | { name?: string };

    /** Default: "All" */
    readonly applyTo?: "All" | "Formats" | "Contents";

    readonly useRange?: boolean;

    /** The sheet range that would be cleared, specified using A1-style notation */
    readonly range?: string;

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

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsDependsOn":["worksheet.value","workbook.value","range"],"loadOptionsMethod":"getWorksheetColumnRow"}
     */
    readonly columnToMatchOn?: string;

    readonly valueToMatchOn?: string;

    /**
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["worksheet.value"]}
     */
    readonly table?: {
	value: string,
	mode: "list" | "id",
};

    /** Whether the data should be returned RAW instead of parsed into keys according to their header */
    readonly rawData?: boolean;

    /**
     * The name of the property into which to write the RAW data
     * Default: "data"
     */
    readonly dataProperty?: string;

    /** The name of the column in which to look for value */
    readonly lookupColumn?: string;

    /** The value to look for in column */
    readonly lookupValue?: string;

    /** Default: "auto" */
    readonly selectRange?: "auto" | "manual";

    /**
     * Whether the range has column labels. When this property set to false Excel will automatically generate header shifting the data down by one row.
     * Default: true
     */
    readonly hasHeaders?: boolean;

    /** Text to search the library for. Leave empty to list every workbook. */
    readonly filter?: string;

}
