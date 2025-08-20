// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Snowflake/Snowflake.node.ts' node

export const name = "snowflake" as const;
export const description = "Get, add and update data in Snowflake" as const;
export const version = 1 as const;
export const defaults = {"name":"Snowflake"} as const;
export const credentials = [{"name":"snowflake","required":true}] as const

/**
 * Get, add and update data in Snowflake
 */
export interface SnowflakeNodeParameters {

    /**
     * Default: "insert"
     */
    readonly operation?: "executeQuery" | "insert" | "update";

    /**
     * The SQL query to execute
     * Type options: {"editor":"sqlEditor"}
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


}

