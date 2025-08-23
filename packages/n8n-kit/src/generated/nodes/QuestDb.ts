// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/QuestDb/QuestDb.node.ts' node

export const description = "Get, add and update data in QuestDB" as const;
export const type = "n8n-nodes-base.questDb" as const;
export const version = 1 as const;
export const credentials = [{"name":"questDb","required":true}] as const;

/**
 * Get, add and update data in QuestDB
 */
export interface QuestDbNodeParameters {

    /**
     * Default: "insert"
     */
    readonly operation?: "executeQuery" | "insert";

    /**
     * The SQL query to execute. You can use n8n expressions or $1 and $2 in conjunction with query parameters.
     * Type options: {"editor":"sqlEditor","sqlDialect":"PostgreSQL"}
     */
    readonly query?: string;

    /**
     * Name of the schema the table belongs to
     */
    readonly schema?: any;

    /**
     * Name of the table in which to insert data to
     */
    readonly table?: string;

    /**
     * Comma-separated list of the properties which should used as columns for the new rows
     */
    readonly columns?: string;

    /**
     * Comma-separated list of the fields that the operation will return
     * Default: "*"
     */
    readonly returnFields?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "mode"?: "independently" | "transaction", "queryParams"?: string } | any;


}

