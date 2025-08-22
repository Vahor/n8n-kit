// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/MySql/v1/MySqlV1.node.ts' node

export const name = "mySql" as const;
export const description = "Get, add and update data in MySQL" as const;
export const version = 1 as const;

/**
 * Get, add and update data in MySQL
 */
export interface MySqlV1NodeParameters {

    /**
     */
    readonly oldVersionNotice?: string;

    /**
     * Default: "insert"
     */
    readonly operation?: "executeQuery" | "insert" | "update";

    /**
     * The SQL query to execute
     * Type options: {"editor":"sqlEditor","sqlDialect":"MySQL"}
     */
    readonly query?: string;

    /**
     * Name of the table in which to insert data to
     * Default: {"mode":"list","value":""}
     */
    readonly table?: any | any;

    /**
     * Comma-separated list of the properties which should used as columns for the new rows
     */
    readonly columns?: string | string;

    /**
     * Modifiers for INSERT statement
     * Default: {}
     */
    readonly options?: { "ignore"?: boolean, "priority"?: "LOW_PRIORITY" | "HIGH_PRIORITY" };

    /**
     * Name of the property which decides which rows in the database should be updated. Normally that would be "id".
     * Default: "id"
     */
    readonly updateKey?: string;


}

