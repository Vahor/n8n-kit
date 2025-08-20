// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Microsoft/Sql/MicrosoftSql.node.js' node

export const name = "microsoftSql" as const;
export const description = "Get, add and update data in Microsoft SQL" as const;
export const version = 1 as const;
export const defaults = {"name":"Microsoft SQL"} as const;
export const credentials = [{"name":"microsoftSql","required":true,"testedBy":"microsoftSqlConnectionTest"}] as const

/**
 * Get, add and update data in Microsoft SQL
 */
export interface MicrosoftSqlNodeParameters {

    /**
     * Default: "insert"
     */
    readonly operation?: "executeQuery" | "insert" | "update" | "delete";

    /**
     * The SQL query to execute
     * Type options: {"editor":"sqlEditor","rows":5,"sqlDialect":"MSSQL"}
     */
    readonly query?: string;

    /**
     * Name of the table in which to insert data to
     */
    readonly table?: string;

    /**
     * Comma-separated list of the properties which should used as columns for the new rows
     */
    readonly columns?: string;

    /**
     * Name of the property which decides which rows in the database should be updated. Normally that would be "id".
     * Default: "id"
     */
    readonly updateKey?: string;

    /**
     * Name of the property which decides which rows in the database should be deleted. Normally that would be "id".
     * Default: "id"
     */
    readonly deleteKey?: string;


}

