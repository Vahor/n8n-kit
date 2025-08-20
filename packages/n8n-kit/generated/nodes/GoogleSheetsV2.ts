// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Google/Sheet/v2/GoogleSheetsV2.node.ts' node

export const name = "googleSheets" as const;
export const description = "Read, update and write data to Google Sheets" as const;
export const version = 4.7 as const;
export const defaults = {"name":"Google Sheets"} as const;
export const credentials = [{"name":"googleApi","required":true,"displayOptions":{"show":{"authentication":["serviceAccount"]}},"testedBy":"googleApiCredentialTest"},{"name":"googleSheetsOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const

/**
 * Read, update and write data to Google Sheets
 */
export interface GoogleSheetsV2NodeParameters {

    /**
     * Default: "sheet"
     */
    readonly resource?: "spreadsheet" | "sheet";

    /**
     * Default: "read"
     */
    readonly operation?: "appendOrUpdate" | "append" | "clear" | "create" | "remove" | "delete" | "read" | "update";

    /**
     * Default: {"mode":"list","value":""}
     */
    readonly documentId?: any;

    /**
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["documentId.value"]}
     */
    readonly sheetName?: any;


}

