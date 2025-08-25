// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Postgres/v2/PostgresV2.node.ts' node

export const description = "Get, add and update data in Postgres" as const;
export const type = "n8n-nodes-base.postgres" as const;
export const version = 2.6 as const;
export const credentials = [{"name":"postgres","required":true,"testedBy":"postgresConnectionTest"}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface PostgresV2NodeParameters {
    /** Default: "insert" */
    readonly operation?: "deleteTable" | "executeQuery" | "insert" | "upsert" | "select" | "update";

    /**
     * The schema that contains the table you want to work on
     * Default: {"mode":"list","value":"public"}
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

    /** Whether to reset identity (auto-increment) columns to their initial values */
    readonly restartSequences?: boolean;

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
    readonly options?: { cascade?: boolean, connectionTimeout?: number, delayClosingIdleConnection?: number, queryBatching?: "single" | "independently" | "transaction", queryReplacement?: string, treatQueryParametersInSingleQuotesAsText?: boolean, outputColumns?: any[], largeNumbersOutput?: "numbers" | "text", skipOnConflict?: boolean, replaceEmptyStrings?: boolean };

    /**
     * The SQL query to execute. You can use n8n expressions and $1, $2, $3, etc to refer to the 'Query Parameters' set in options below.
     * Type options: {"editor":"sqlEditor","sqlDialect":"PostgreSQL"}
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
     * The column to compare when finding the rows to update. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/" target="_blank">expression</a>.
     * Type options: {"loadOptionsMethod":"getColumns","loadOptionsDependsOn":["schema.value","table.value"]}
     */
    readonly columnToMatchOn?: string;

    /** Rows with a value in the specified "Column to Match On" that corresponds to the value in this field will be updated */
    readonly valueToMatchOn?: string;

}
