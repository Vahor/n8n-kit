// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Transform/RemoveDuplicates/v1/RemoveDuplicatesV1.node.ts' node

export const description = "Delete items with matching field values" as const;
export const type = "n8n-nodes-base.removeDuplicates" as const;
export const version = 1.1 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface RemoveDuplicatesV1NodeParameters {
    /**
     * The fields of the input items to compare to see if they are the same
     * Default: "allFields"
     */
    readonly compare?: "allFields" | "allFieldsExcept" | "selectedFields";

    /**
     * Fields in the input to exclude from the comparison
     */
    readonly fieldsToExclude?: string;

    /**
     * Fields in the input to add to the comparison
     */
    readonly fieldsToCompare?: string;

    /**
     * Default: {}
     */
    readonly options?: { "disableDotNotation"?: boolean, "removeOtherFields"?: boolean };

}
