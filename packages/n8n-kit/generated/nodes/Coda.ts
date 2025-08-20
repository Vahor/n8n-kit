// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Coda/Coda.node.js' node

export const name = "coda" as const;
export const description = "Consume Coda API" as const;
export const version = 1 as const;
export const defaults = {"name":"Coda"} as const;
export const credentials = [{"name":"codaApi","required":true}] as const

/**
 * Consume Coda API
 */
export interface CodaNodeParameters {

    /**
     * Default: "table"
     */
    readonly resource?: "control" | "formula" | "table" | "view";

    /**
     * Default: "createRow"
     */
    readonly operation?: "createRow" | "deleteRow" | "getAllColumns" | "getAllRows" | "getColumn" | "getRow" | "pushButton" | "get" | "getAll" | "getAllViewColumns" | "getAllViewRows" | "updateViewRow";

    /**
     * ID of the doc. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getDocs"}
     */
    readonly docId?: string;

    /**
     * The table to create the row in. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsDependsOn":["docId"],"loadOptionsMethod":"getTables"}
     */
    readonly tableId?: string;

    /**
     * Default: {}
     */
    readonly options?: { "disableParsing"?: boolean, "keyColumns"?: string, "rawData"?: boolean, "useColumnNames"?: boolean, "valueFormat"?: "simple" | "simpleWithArrays" | "rich", "query"?: string, "sortBy"?: "createdAt" | "natural", "visibleOnly"?: boolean };

    /**
     * ID or name of the row. Names are discouraged because they're easily prone to being changed by users. If you're using a name, be sure to URI-encode it. If there are multiple rows with the same value in the identifying column, an arbitrary one will be selected
     */
    readonly rowId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getColumns","loadOptionsDependsOn":["docId","tableId"]}
     */
    readonly columnId?: string;

    /**
     * The formula to get the row from
     */
    readonly formulaId?: string;

    /**
     * The control to get the row from
     */
    readonly controlId?: string;

    /**
     * The view to get the row from
     */
    readonly viewId?: string;

    /**
     * The view to get the row from
     * Default: "columns"
     */
    readonly keyName?: string;


}

