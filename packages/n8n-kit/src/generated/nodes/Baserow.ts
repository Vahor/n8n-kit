// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Baserow/Baserow.node.ts' node

export const description = "Consume the Baserow API" as const;
export const type = "n8n-nodes-base.baserow" as const;
export const version = 1.1 as const;
export const credentials = [{"name":"baserowApi","required":true,"displayOptions":{"show":{"authentication":["usernamePassword"]}}},{"name":"baserowTokenApi","required":true,"displayOptions":{"show":{"authentication":["databaseToken"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface BaserowNodeParameters {
    /** Default: "usernamePassword" */
    readonly authentication?: "usernamePassword" | "databaseToken";

    /** Default: "row" */
    readonly resource?: "row";

    /** Default: "getAll" */
    readonly operation?: "batchCreate" | "batchDelete" | "batchUpdate" | "create" | "delete" | "get" | "getAll" | "update";

    /**
     * Database to operate on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: "0"
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

    /**
     * Default: []
     * Type options: {"multipleValues":true}
     */
    readonly rowsUi?: { rowValues: Array<{ id: string, fieldsUi?: { fieldValues: Array<{ fieldId?: string, fieldValue?: string }> } }> };

    /**
     * IDs of the rows to delete
     * Default: []
     * Type options: {"multipleValues":true}
     */
    readonly rowIds?: string;

    /**
     * Name of the property in each input item that contains the row ID
     * Default: "id"
     */
    readonly rowIdProperty?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly additionalOptions?: { filters?: { fields: Array<{ field?: string, operator?: "equal" | "not_equal" | "contains" | "contains_not" | "contains_word" | "doesnt_contain_word" | "length_is_lower_than" | "higher_than" | "higher_than_or_equal" | "lower_than" | "lower_than_or_equal" | "is_even_and_whole" | "date_is" | "date_is_not" | "date_is_before" | "date_is_on_or_before" | "date_is_after" | "date_is_on_or_after" | "date_is_within" | "date_equals_today" | "date_equals_month" | "date_equals_year" | "date_equals_day_of_month" | "date_equal" | "date_not_equal" | "date_before" | "date_before_or_equal" | "date_after" | "date_after_or_equal" | "date_after_days_ago" | "date_within_days" | "date_within_weeks" | "date_within_months" | "date_equals_days_ago" | "date_equals_months_ago" | "date_equals_years_ago" | "date_before_today" | "date_after_today" | "date_equals_week" | "filename_contains" | "has_file_type" | "files_lower_than" | "single_select_equal" | "single_select_not_equal" | "single_select_is_any_of" | "single_select_is_none_of" | "multiple_select_has" | "multiple_select_has_not" | "multiple_collaborators_has" | "multiple_collaborators_has_not" | "user_is" | "user_is_not" | "link_row_has" | "link_row_has_not" | "link_row_contains" | "link_row_not_contains" | "boolean" | "empty" | "not_empty", timezone?: string, value?: string }> }, filterType?: "AND" | "OR", search?: string, order?: { fields: Array<{ field?: string, direction?: "" | "-" }> } };

}
