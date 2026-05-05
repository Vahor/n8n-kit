// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Oracle/Sql/OracleSql.node.ts' node

export const description = "Get, add and update data in Oracle database" as const;
export const type = "n8n-nodes-base.oracleDatabase" as const;
export const version = 1 as const;
export const credentials = [{"name":"oracleDBApi","required":true,"testedBy":"oracleDBConnectionTest"}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface OracleSqlNodeParameters {
    /** Default: "insert" */
    readonly operation?: "deleteTable" | "execute" | "insert" | "upsert" | "select" | "update";

    /**
     * The schema that contains the table you want to work on
     * Default: {"mode":"list","value":""}
     */
    readonly schema?: {
	value: string,
	mode: "list" | "name",
};

    /**
     * The table you want to work on
     * Default: {"mode":"list","value":""}
     */
    readonly table?: {
	value: string,
	mode: "list" | "name",
};

    /** Default: "truncate" */
    readonly deleteCommand?: "truncate" | "delete" | "drop";

    /**
     * If not set, all rows will be selected
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly where?: { values: Array<{ column?: string, condition?: "equal" | "!=" | "LIKE" | ">" | "<" | ">=" | "<=" | "IS NULL" | "IS NOT NULL", value?: string }> };

    /**
     * How to combine the conditions defined in "Select Rows": AND requires all conditions to be true, OR requires at least one condition to be true
     * Default: "AND"
     */
    readonly combineConditions?: "AND" | "OR";

    /** Default: {} */
    readonly options?: { autoCommit?: boolean, params?: { values: Array<{ name: string, bindDirection: "in" | "out" | "inout", datatype: "blob" | "boolean" | "date" | "json" | "number" | "sparse" | "string" | "vector", valueString?: string, valueNumber?: number, valueDate?: string, valueBoolean?: boolean, valueJson?: string, valueVector?: string, valueBlob?: string, valueSparse?: { dimensions?: number, indices?: string, values?: string }, parseInStatement: false | true }> }, fetchArraySize?: number, prefetchRows?: number, outputColumns?: unknown[], largeNumbersOutputAsString?: boolean, stmtBatching?: "single" | "independently" | "transaction" };

    /**
     * The SQL statement to execute. You can use n8n expressions and positional parameters like :1, :2, :3, or named parameters like :name, :ID, etc to refer to the 'Bind Variable Placeholder Values' set in options below.
     * Type options: {"editor":"sqlEditor","sqlDialect":"OracleDB"}
     */
    readonly query?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly sort?: { values: Array<{ column?: string, direction?: "ASC" | "DESC" }> };

}
