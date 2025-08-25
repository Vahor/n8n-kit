// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/DataTable/DataTable.node.ts' node

export const description = "Save data across workflow executions in a table" as const;
export const type = "n8n-nodes-base.dataTable" as const;
export const version = 1 as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface DataTableNodeParameters {
    /** Default: "row" */
    readonly resource?: "row";

    /** Default: "insert" */
    readonly operation?: "get" | "insert";

    /** Default: {"mode":"list","value":""} */
    readonly dataTableId?: {
	value: string,
	mode: "list" | "id",
};

    /** Default: "anyFilter" */
    readonly matchType?: "anyFilter" | "allFilters";

    /**
     * Filter to decide which rows get
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly filters?: { conditions: { keyName?: string, condition?: "eq" | "neq", keyValue?: string } };

}
