// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Transform/Aggregate/Aggregate.node.ts' node

export const description = "Combine a field from many items into a list in a single item" as const;
export const type = "n8n-nodes-base.aggregate" as const;
export const version = 1 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface AggregateNodeParameters {
    /**
     * Default: "aggregateIndividualFields"
     */
    readonly aggregate?: "aggregateIndividualFields" | "aggregateAllItemData";

    /**
     * Default: {"fieldToAggregate":[{"fieldToAggregate":"","renameField":false}]}
     * Type options: {"multipleValues":true}
     */
    readonly fieldsToAggregate?: { "fieldToAggregate": any };

    /**
     * The name of the output field to put the data in
     * Default: "data"
     */
    readonly destinationFieldName?: string;

    /**
     * Default: "allFields"
     */
    readonly include?: "allFields" | "specifiedFields" | "allFieldsExcept";

    readonly fieldsToExclude?: string;

    readonly fieldsToInclude?: string;

    /**
     * Default: {}
     */
    readonly options?: { "disableDotNotation"?: boolean, "mergeLists"?: boolean, "includeBinaries"?: boolean, "keepOnlyUnique"?: boolean, "keepMissing"?: boolean };

}
