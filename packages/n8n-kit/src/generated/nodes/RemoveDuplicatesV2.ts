// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Transform/RemoveDuplicates/v2/RemoveDuplicatesV2.node.ts' node

export const description = "Delete items with matching field values" as const;
export const type = "n8n-nodes-base.removeDuplicates" as const;
export const version = 2 as const;

/**
 * Delete items with matching field values
 */
export interface RemoveDuplicatesV2NodeParameters {

    /**
     * Default: "removeDuplicateInputItems"
     */
    readonly operation?: "removeDuplicateInputItems" | "removeItemsSeenInPreviousExecutions" | "clearDeduplicationHistory";

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
     * How to select input items to remove by comparing them with key values previously processed
     * Default: "removeItemsWithAlreadySeenKeyValues"
     */
    readonly logic?: "removeItemsWithAlreadySeenKeyValues" | "removeItemsUpToStoredIncrementalKey" | "removeItemsUpToStoredDate";

    /**
     * Use an input field (or a combination of fields) that has a unique ID value
     */
    readonly dedupeValue?: string;

    /**
     * Use an input field (or a combination of fields) that has an incremental value
     */
    readonly incrementalDedupeValue?: number;

    /**
     * Use an input field that has a date value in ISO format
     */
    readonly dateDedupeValue?: string;

    /**
     * How you want to modify the key values stored on the database. None of these modes removes input items.
     * Default: "cleanDatabase"
     */
    readonly mode?: "cleanDatabase";

    /**
     * Default: {}
     */
    readonly options?: { "disableDotNotation"?: boolean, "removeOtherFields"?: boolean, "scope"?: "workflow" | "node", "historySize"?: number };


}

