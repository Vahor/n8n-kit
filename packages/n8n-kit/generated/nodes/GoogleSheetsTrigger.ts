// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Google/Sheet/GoogleSheetsTrigger.node.js' node

export const name = "googleSheetsTrigger" as const;
export const description = "Starts the workflow when Google Sheets events occur" as const;
export const version = 1 as const;
export const defaults = {"name":"Google Sheets Trigger"} as const;
export const credentials = [{"name":"googleSheetsTriggerOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["triggerOAuth2"]}}}] as const

/**
 * Starts the workflow when Google Sheets events occur
 */
export interface GoogleSheetsTriggerNodeParameters {

    /**
     * Default: "triggerOAuth2"
     */
    readonly authentication?: any;

    /**
     * Default: {"mode":"list","value":""}
     */
    readonly documentId: any;

    /**
     * Default: {"mode":"list","value":""}
     */
    readonly sheetName: any;

    /**
     * It will be triggered also by newly created columns (if the 'Columns to Watch' option is not set)
     * Default: "anyUpdate"
     */
    readonly event: "rowAdded" | "rowUpdate" | "anyUpdate";

    /**
     * This option will be effective only when automatically executing the workflow
     * Default: "new"
     */
    readonly includeInOutput?: "new" | "old" | "both";

    /**
     * Default: {}
     */
    readonly options?: { "columnsToWatch"?: string[], "dataLocationOnSheet"?: { "values": any }, "valueRender"?: "UNFORMATTED_VALUE" | "FORMATTED_VALUE" | "FORMULA", "dateTimeRenderOption"?: "SERIAL_NUMBER" | "FORMATTED_STRING" };


}

