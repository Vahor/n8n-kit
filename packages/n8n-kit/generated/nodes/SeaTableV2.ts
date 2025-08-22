// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/SeaTable/v2/SeaTableV2.node.ts' node

export const name = "seaTable" as const;
export const description = "Consume the SeaTable API" as const;
export const version = 2 as const;

/**
 * Consume the SeaTable API
 */
export interface SeaTableV2NodeParameters {

    /**
     * Default: "row"
     */
    readonly resource?: "row" | "base" | "link" | "asset";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "remove" | "get" | "list" | "lock" | "search" | "unlock" | "update" | "snapshot" | "metadata" | "collaborator" | "add" | "list" | "remove" | "getPublicURL" | "upload";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getTableNames"}
     */
    readonly tableName?: string | string | string | string | string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsDependsOn":["tableName"],"loadOptionsMethod":"getRowIds"}
     */
    readonly rowId?: string | string | string;

    /**
     * Whether to insert the input data this node receives in the new row
     * Default: "defineBelow"
     */
    readonly fieldsToSend?: "autoMapInputData" | "defineBelow" | "autoMapInputData" | "defineBelow";

    /**
     * Whether to use the column default values to populate new rows during creation (only available for normal backend)
     */
    readonly apply_default?: boolean;

    /**
     */
    readonly notice?: string | string | string;

    /**
     * List of input properties to avoid sending, separated by commas. Leave empty to send all properties.
     */
    readonly inputsToIgnore?: string | string;

    /**
     * Add destination column with its value. Provide the value in this way. Date: YYYY-MM-DD or YYYY-MM-DD hh:mm. Duration: time in seconds. Checkbox: true, on or 1. Multi-Select: comma-separated list.
     * Default: {}
     * Type options: {"multipleValueButtonText":"Add Column to Send","multipleValues":true}
     */
    readonly columnsUi?: { "columnValues": any } | { "columnValues": any };

    /**
     * Whether write to Big Data backend (true) or not (false). True requires the activation of the Big Data backend in the base.
     */
    readonly bigdata?: boolean;

    /**
     * Default: {}
     */
    readonly options?: { "simple"?: boolean, "convert"?: boolean } | { "simple"?: boolean, "convert"?: boolean } | { "insensitive"?: boolean, "wildcard"?: boolean, "simple"?: boolean, "convert"?: boolean } | { "replace"?: boolean, "append"?: boolean };

    /**
     * The name of SeaTable view to access, or specify by using an expression. Provide it in the way "col.name:::col.type".
     * Type options: {"loadOptionsDependsOn":["tableName"],"loadOptionsMethod":"getTableViews"}
     */
    readonly viewName?: string;

    /**
     * Select the column to be searched. Not all column types are supported for search. Choose from the list, or specify a name using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsDependsOn":["tableName"],"loadOptionsMethod":"getSearchableColumns"}
     */
    readonly searchColumn?: string;

    /**
     * What to look for?
     */
    readonly searchTerm?: string;

    /**
     * SeaTable identifies users with a unique username like 244b43hr6fy54bb4afa2c2cb7369d244@auth.local. Get this username from an email or the name of a collaborator.
     */
    readonly searchString?: string;

    /**
     * Choose from the list of specify the Link Column by using an expression. You have to provide it in the way "column_name:::link_id:::other_table_id".
     * Type options: {"loadOptionsDependsOn":["tableName"],"loadOptionsMethod":"getLinkColumns"}
     */
    readonly linkColumn?: string | string | string;

    /**
     * Provide the row ID of table you selected
     */
    readonly linkColumnSourceId?: string | string;

    /**
     * Provide the row ID of table you want to link
     */
    readonly linkColumnTargetId?: string | string;

    /**
     * Choose from the list, or specify the name using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsDependsOn":["tableName"],"loadOptionsMethod":"getAssetColumns"}
     */
    readonly uploadColumn?: string;

    /**
     * Name of the binary property which contains the data for the file to be written
     * Default: "data"
     */
    readonly dataPropertyName?: string;

    /**
     */
    readonly assetPath?: string;


}

