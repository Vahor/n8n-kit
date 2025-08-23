// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Postgres/v1/PostgresV1.node.ts' node

export const description = "Get, add and update data in Postgres" as const;
export const type = "n8n-nodes-base.postgres" as const;
export const version = 1 as const;
export const credentials = [{"name":"postgres","required":true,"testedBy":"postgresConnectionTest"}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface PostgresV1NodeParameters {
    readonly oldVersionNotice?: string;

    /**
     * Default: "insert"
     */
    readonly operation?: "executeQuery" | "insert" | "update";

    /**
     * The SQL query to execute. You can use n8n expressions or $1 and $2 in conjunction with query parameters.
     * Type options: {"editor":"sqlEditor","sqlDialect":"PostgreSQL"}
     */
    readonly query?: string;

    /**
     * Name of the schema the table belongs to
     * Default: "public"
     */
    readonly schema?: string;

    /**
     * Name of the table in which to insert data to
     */
    readonly table?: string;

    /**
     * Comma-separated list of the properties which should used as columns for the new rows. You can use type casting with colons (:) like id:int.
     */
    readonly columns?: string;

    /**
     * Comma-separated list of the properties which decides which rows in the database should be updated. Normally that would be "id".
     * Default: "id"
     */
    readonly updateKey?: string;

    /**
     * Comma-separated list of the fields that the operation will return
     * Default: "*"
     */
    readonly returnFields?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "mode"?: "independently" | "multiple" | "transaction", "largeNumbersOutput"?: "numbers" | "text", "queryParams"?: string };

}
