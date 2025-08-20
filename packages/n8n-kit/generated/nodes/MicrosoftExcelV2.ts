// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Microsoft/Excel/v2/MicrosoftExcelV2.node.ts' node

export const name = "microsoftExcel" as const;
export const description = "Consume Microsoft Excel API" as const;
export const version = 2.1 as const;
export const defaults = {"name":"Microsoft Excel 365"} as const;
export const credentials = [{"name":"microsoftExcelOAuth2Api","required":true}] as const

/**
 * Consume Microsoft Excel API
 */
export interface MicrosoftExcelV2NodeParameters {

    /**
     */
    readonly notice?: string;

    /**
     * Default: "workbook"
     */
    readonly resource?: "table" | "workbook" | "worksheet";

    /**
     * Default: "append"
     */
    readonly operation?: "append" | "convertToRange" | "addTable" | "deleteTable" | "getColumns" | "getRows" | "lookup" | "addWorksheet" | "getAll" | "upsert" | "clear" | "update";


}

