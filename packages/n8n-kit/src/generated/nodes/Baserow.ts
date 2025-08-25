// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Baserow/Baserow.node.ts' node

export const description = "Consume the Baserow API" as const;
export const type = "n8n-nodes-base.baserow" as const;
export const version = 1 as const;
export const credentials = [{"name":"baserowApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface BaserowNodeParameters {
    /** Default: "row" */
    readonly resource?: "row";

    /** Default: "getAll" */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     * Database to operate on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getDatabaseIds"}
     */
    readonly databaseId?: string;

    /**
     * Table to operate on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsDependsOn":["databaseId"],"loadOptionsMethod":"getTableIds"}
     */
    readonly tableId?: string;

    /** ID of the row to return */
    readonly rowId?: string;

    /**
     * Whether to insert the input data this node receives in the new row
     * Default: "defineBelow"
     */
    readonly dataToSend?: "autoMapInputData" | "defineBelow";

    /** List of input properties to avoid sending, separated by commas. Leave empty to send all properties. */
    readonly inputsToIgnore?: string;

    /**
     * Default: {}
     * Type options: {"multipleValueButtonText":"Add Field to Send","multipleValues":true}
     */
    readonly fieldsUi?: { fieldValues: Array<{ fieldId?: string, fieldValue?: string }> };

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly additionalOptions?: { filters?: { fields: Array<{ field?: string, operator?: "contains" | "contains_not" | "date_after" | "date_before" | "date_equal" | "date_equals_month" | "date_equals_today" | "date_equals_year" | "date_not_equal" | "equal" | "filename_contains" | "higher_than" | "empty" | "not_empty" | "boolean" | "link_row_has_not" | "link_row_has" | "lower_than" | "not_equal" | "single_select_equal" | "single_select_not_equal", value?: string }> }, filterType?: "AND" | "OR", search?: string, order?: { fields: Array<{ field?: string, direction?: "" | "-" }> } };

}
