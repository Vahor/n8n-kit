// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/MySql/v2/MySqlV2.node.ts' node

export const description = "Get, add and update data in MySQL" as const;
export const type = "n8n-nodes-base.mySql" as const;
export const version = 2.5 as const;
export const credentials = [{"name":"mySql","required":true,"testedBy":"mysqlConnectionTest"}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface MySqlV2NodeParameters {
    /** Default: "insert" */
    readonly operation?: "deleteTable" | "executeQuery" | "insert" | "upsert" | "select" | "update";

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
    readonly options?: { connectionTimeoutMillis?: number, connectionLimit?: number, queryBatching?: "single" | "independently" | "transaction", queryReplacement?: string, outputColumns?: any[], largeNumbersOutput?: "numbers" | "text", decimalNumbers?: boolean, priority?: "LOW_PRIORITY" | "HIGH_PRIORITY", replaceEmptyStrings?: boolean, selectDistinct?: boolean, detailedOutput?: boolean, skipOnConflict?: boolean };

    /**
     * The SQL query to execute. You can use n8n expressions and $1, $2, $3, etc to refer to the 'Query Parameters' set in options below.
     * Type options: {"editor":"sqlEditor","sqlDialect":"MySQL"}
     */
    readonly query?: string;

    /**
     * Whether to map node input properties and the table data automatically or manually
     * Default: "autoMapInputData"
     */
    readonly dataMode?: "autoMapInputData" | "defineBelow";

    /**
     * Default: {}
     * Type options: {"multipleValueButtonText":"Add Value","multipleValues":true}
     */
    readonly valuesToSend?: { values: Array<{ column?: string, value?: string }> };

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

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/" target="_blank">expression</a>
     * Type options: {"loadOptionsMethod":"getColumns","loadOptionsDependsOn":["schema.value","table.value"]}
     */
    readonly columnToMatchOn?: string;

    /** Rows with a value in the specified "Column to Match On" that corresponds to the value in this field will be updated */
    readonly valueToMatchOn?: string;

}
