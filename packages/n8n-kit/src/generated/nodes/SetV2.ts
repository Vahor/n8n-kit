// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Set/v2/SetV2.node.ts' node

export const description = "Modify, add, or remove item fields" as const;
export const type = "n8n-nodes-base.set" as const;
export const version = 3.4 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface SetV2NodeParameters {
    /** Default: "manual" */
    readonly mode?: "manual" | "raw";

    readonly duplicateItem?: boolean;

    /**
     * How many times the item should be duplicated, mainly used for testing and debugging
     * Type options: {"minValue":0}
     */
    readonly duplicateCount?: number;

    /**
     * Default: "{\n  \"my_field_1\": \"value\",\n  \"my_field_2\": 1\n}\n"
     * Type options: {"rows":5}
     */
    readonly jsonOutput?: string;

    /**
     * Edit existing fields or add new ones to modify the output data
     * Default: {}
     * Type options: {"multipleValues":true,"sortable":true}
     */
    readonly fields?: { values: Array<{ name?: string, type?: "stringValue" | "numberValue" | "booleanValue" | "arrayValue" | "objectValue", stringValue?: string, numberValue?: string, booleanValue?: "true" | "false", arrayValue?: string, objectValue?: string }> };

    /** Default: {} */
    readonly assignments?: any;

    /**
     * How to select the fields you want to include in your output items
     * Default: "all"
     */
    readonly include?: "all" | "none" | "selected" | "except" | "all" | "selected" | "except";

    /** Whether to pass to the output all the input fields (along with the fields set in 'Fields to Set') */
    readonly includeOtherFields?: boolean;

    /** Comma-separated list of the field names you want to include in the output. You can drag the selected fields from the input panel. */
    readonly includeFields?: string;

    /** Comma-separated list of the field names you want to exclude from the output. You can drag the selected fields from the input panel. */
    readonly excludeFields?: string;

    /** Default: {} */
    readonly options?: { includeBinary?: boolean, stripBinary?: boolean, ignoreConversionErrors?: boolean, dotNotation?: boolean };

}
