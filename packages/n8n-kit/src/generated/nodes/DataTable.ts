// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/DataTable/DataTable.node.ts' node

export const description = "Permanently save data across workflow executions in a table" as const;
export const type = "n8n-nodes-base.dataTable" as const;
export const version = 1.1 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface DataTableNodeParameters {
    /** Default: "row" */
    readonly resource?: "row" | "table";

    /** Default: "insert" */
    readonly operation?: "deleteRows" | "get" | "rowExists" | "rowNotExists" | "insert" | "update" | "upsert" | "create" | "delete" | "list" | "update";

    /** Default: {"mode":"list","value":""} */
    readonly dataTableId?: {
	value: string,
	mode: "list" | "name" | "id",
};

    /** Default: "anyCondition" */
    readonly matchType?: "anyCondition" | "allConditions";

    /**
     * Filter to decide which rows get
     * Default: {}
     * Type options: {"multipleValues":true,"minRequiredFields":0}
     */
    readonly filters?: { conditions: Array<{ keyName?: string, condition?: string, keyValue?: string }> };

    /** Default: {} */
    readonly options?: { dryRun?: boolean } | { optimizeBulk?: boolean } | { createIfNotExists?: boolean } | { filterName?: string, sortField?: "createdAt" | "name" | "updatedAt", sortDirection?: "asc" | "desc" };

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /** Whether to sort the results by a column */
    readonly orderBy?: boolean;

    /**
     * Choose from the list, or specify using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Default: "createdAt"
     * Type options: {"loadOptionsDependsOn":["dataTableId.value"],"loadOptionsMethod":"getDataTableColumns"}
     */
    readonly orderByColumn?: string;

    /**
     * Sort direction for the column
     * Default: "DESC"
     */
    readonly orderByDirection?: "ASC" | "DESC";

    /** The name of the data table to create */
    readonly tableName?: string;

    /**
     * The columns to create in the data table
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly columns?: { column: Array<{ name: string, type?: "boolean" | "date" | "number" | "string" }> };

    /** The new name for the data table */
    readonly newName?: string;

}
