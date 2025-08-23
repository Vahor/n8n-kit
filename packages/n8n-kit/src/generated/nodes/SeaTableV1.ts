// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/SeaTable/v1/SeaTableV1.node.ts' node

export const name = "seaTable" as const;
export const description = "Consume the SeaTable API" as const;
export const version = 1 as const;
export const credentials = [{"name":"seaTableApi","required":true}] as const;

/**
 * Consume the SeaTable API
 */
export interface SeaTableV1NodeParameters {

    /**
     * Default: "row"
     */
    readonly resource?: "row";

    /**
     * The operation being performed
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     * The name of SeaTable table to access. Choose from the list, or specify the name using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getTableNames"}
     */
    readonly tableName: string;

    /**
     * The name of SeaTable table to access. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getTableIds"}
     */
    readonly tableId?: string;

    readonly rowId?: string;

    /**
     * Whether to insert the input data this node receives in the new row
     * Default: "defineBelow"
     */
    readonly fieldsToSend?: "autoMapInputData" | "defineBelow";

    /**
     * List of input properties to avoid sending, separated by commas. Leave empty to send all properties.
     */
    readonly inputsToIgnore?: string;

    /**
     * Add destination column with its value
     * Default: {}
     * Type options: {"multipleValueButtonText":"Add Column to Send","multipleValues":true}
     */
    readonly columnsUi?: { "columnValues": any };

    /**
     * Whether to return all results or only up to a given limit
     * Default: true
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly filters?: { "view_name"?: string };

    /**
     * Default: {}
     */
    readonly options?: { "convert_link_id"?: boolean, "direction"?: "asc" | "desc", "order_by"?: string };


}

