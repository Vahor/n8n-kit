// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Set/v2/SetV2.node.js' node

export const name = "set" as const;
export const description = "Change the structure of your items" as const;
export const version = 3.2 as const;
export const defaults = {"name":"Edit Fields","color":"#0000FF"} as const;

/**
 * Change the structure of your items
 */
export interface SetV2NodeParameters {

    /**
     * Default: "manual"
     */
    readonly mode?: "manual" | "raw";

    /**
     */
    readonly duplicateItem?: boolean;

    /**
     * How many times the item should be duplicated, mainly used for testing and debugging
     * Type options: {"minValue":0}
     */
    readonly duplicateCount?: number;

    /**
     */
    readonly duplicateWarning?: string;

    /**
     * Default: "{\n  \"my_field_1\": \"value\",\n  \"my_field_2\": 1\n}"
     * Type options: {"editor":"json","editorLanguage":"json","rows":5}
     */
    readonly jsonOutput?: string;

    /**
     * Edit existing fields or add new ones to modify the output data
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly fields?: { "values": any };

    /**
     * How to select the fields you want to include in your output items
     * Default: "all"
     */
    readonly include?: "all" | "none" | "selected" | "except";

    /**
     * Comma-separated list of the field names you want to include in the output. You can drag the selected fields from the input panel.
     */
    readonly includeFields?: string;

    /**
     * Comma-separated list of the field names you want to exclude from the output. You can drag the selected fields from the input panel.
     */
    readonly excludeFields?: string;

    /**
     * Default: {}
     */
    readonly options?: { "includeBinary"?: boolean, "ignoreConversionErrors"?: boolean, "dotNotation"?: boolean };


}

