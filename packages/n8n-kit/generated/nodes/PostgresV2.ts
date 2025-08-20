// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Postgres/v2/PostgresV2.node.ts' node

export const name = "postgres" as const;
export const description = "Get, add and update data in Postgres" as const;
export const version = 2.6 as const;
export const defaults = {"name":"Postgres"} as const;
export const credentials = [{"name":"postgres","required":true,"testedBy":"postgresConnectionTest"}] as const

/**
 * Get, add and update data in Postgres
 */
export interface PostgresV2NodeParameters {

    /**
     * Default: "database"
     */
    readonly resource?: any;

    /**
     * Default: "insert"
     */
    readonly operation?: "deleteTable" | "executeQuery" | "insert" | "upsert" | "select" | "update";


}

