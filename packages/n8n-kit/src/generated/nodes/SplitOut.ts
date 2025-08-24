// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Transform/SplitOut/SplitOut.node.ts' node

export const description = "Turn a list inside item(s) into separate items" as const;
export const type = "n8n-nodes-base.splitOut" as const;
export const version = 1 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface SplitOutNodeParameters {
    /** The name of the input fields to break out into separate items. Separate multiple field names by commas. For binary data, use $binary. */
    readonly fieldToSplitOut?: string;

    /**
     * Whether to copy any other fields into the new items
     * Default: "noOtherFields"
     */
    readonly include?: "noOtherFields" | "allOtherFields" | "selectedOtherFields";

    /** Fields in the input items to aggregate together */
    readonly fieldsToInclude?: string;

    /** Default: {} */
    readonly options?: { "disableDotNotation"?: boolean, "destinationFieldName"?: string, "includeBinary"?: boolean };

}
