// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/MySql/v2/MySqlV2.node.ts' node

export const name = "mySql" as const;
export const description = "Get, add and update data in MySQL" as const;
export const version = 2.5 as const;

/**
 * Get, add and update data in MySQL
 */
export interface MySqlV2NodeParameters {

    /**
     * Default: "database"
     */
    readonly resource?: any;

    /**
     * Default: "insert"
     */
    readonly operation?: "deleteTable" | "executeQuery" | "insert" | "upsert" | "select" | "update";

    /**
     * The table you want to work on
     * Default: {"mode":"list","value":""}
     */
    readonly table: any;

    /**
     * Default: "truncate"
     */
    readonly deleteCommand?: "truncate" | "delete" | "drop";

    /**
     * If not set, all rows will be selected
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly where?: { "values": any } | { "values": any };

    /**
     * How to combine the conditions defined in "Select Rows": AND requires all conditions to be true, OR requires at least one condition to be true
     * Default: "AND"
     */
    readonly combineConditions?: "AND" | "OR" | "AND" | "OR";

    /**
     * Default: {}
     */
    readonly options?: { "connectionTimeoutMillis"?: number, "connectionLimit"?: number, "queryBatching"?: "single" | "independently" | "transaction", "queryReplacement"?: string, "outputColumns"?: string[], "largeNumbersOutput"?: "numbers" | "text", "decimalNumbers"?: boolean, "priority"?: "LOW_PRIORITY" | "HIGH_PRIORITY", "replaceEmptyStrings"?: boolean, "selectDistinct"?: boolean, "detailedOutput"?: boolean, "skipOnConflict"?: boolean } | { "connectionTimeoutMillis"?: number, "connectionLimit"?: number, "queryBatching"?: "single" | "independently" | "transaction", "queryReplacement"?: string, "outputColumns"?: string[], "largeNumbersOutput"?: "numbers" | "text", "decimalNumbers"?: boolean, "priority"?: "LOW_PRIORITY" | "HIGH_PRIORITY", "replaceEmptyStrings"?: boolean, "selectDistinct"?: boolean, "detailedOutput"?: boolean, "skipOnConflict"?: boolean } | { "connectionTimeoutMillis"?: number, "connectionLimit"?: number, "queryBatching"?: "single" | "independently" | "transaction", "queryReplacement"?: string, "outputColumns"?: string[], "largeNumbersOutput"?: "numbers" | "text", "decimalNumbers"?: boolean, "priority"?: "LOW_PRIORITY" | "HIGH_PRIORITY", "replaceEmptyStrings"?: boolean, "selectDistinct"?: boolean, "detailedOutput"?: boolean, "skipOnConflict"?: boolean } | { "connectionTimeoutMillis"?: number, "connectionLimit"?: number, "queryBatching"?: "single" | "independently" | "transaction", "queryReplacement"?: string, "outputColumns"?: string[], "largeNumbersOutput"?: "numbers" | "text", "decimalNumbers"?: boolean, "priority"?: "LOW_PRIORITY" | "HIGH_PRIORITY", "replaceEmptyStrings"?: boolean, "selectDistinct"?: boolean, "detailedOutput"?: boolean, "skipOnConflict"?: boolean } | { "connectionTimeoutMillis"?: number, "connectionLimit"?: number, "queryBatching"?: "single" | "independently" | "transaction", "queryReplacement"?: string, "outputColumns"?: string[], "largeNumbersOutput"?: "numbers" | "text", "decimalNumbers"?: boolean, "priority"?: "LOW_PRIORITY" | "HIGH_PRIORITY", "replaceEmptyStrings"?: boolean, "selectDistinct"?: boolean, "detailedOutput"?: boolean, "skipOnConflict"?: boolean } | { "connectionTimeoutMillis"?: number, "connectionLimit"?: number, "queryBatching"?: "single" | "independently" | "transaction", "queryReplacement"?: string, "outputColumns"?: string[], "largeNumbersOutput"?: "numbers" | "text", "decimalNumbers"?: boolean, "priority"?: "LOW_PRIORITY" | "HIGH_PRIORITY", "replaceEmptyStrings"?: boolean, "selectDistinct"?: boolean, "detailedOutput"?: boolean, "skipOnConflict"?: boolean };

    /**
     * The SQL query to execute. You can use n8n expressions and $1, $2, $3, etc to refer to the 'Query Parameters' set in options below.
     * Type options: {"editor":"sqlEditor","sqlDialect":"MySQL"}
     */
    readonly query?: string;

    /**
     * Whether to map node input properties and the table data automatically or manually
     * Default: "autoMapInputData"
     */
    readonly dataMode?: "autoMapInputData" | "defineBelow" | "autoMapInputData" | "defineBelow" | "autoMapInputData" | "defineBelow";

    /**
     */
    readonly notice?: string | string | string;

    /**
     * Default: {}
     * Type options: {"multipleValueButtonText":"Add Value","multipleValues":true}
     */
    readonly valuesToSend?: { "values": any } | { "values": any } | { "values": any };

    /**
     * Whether to return all results or only up to a given limit
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
     * Type options: {"multipleValues":true}
     */
    readonly sort?: { "values": any };

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/" target="_blank">expression</a>
     * Type options: {"loadOptionsMethod":"getColumns","loadOptionsDependsOn":["schema.value","table.value"]}
     */
    readonly columnToMatchOn?: string | string;

    /**
     * Rows with a value in the specified "Column to Match On" that corresponds to the value in this field will be updated
     */
    readonly valueToMatchOn?: string | string;


}

