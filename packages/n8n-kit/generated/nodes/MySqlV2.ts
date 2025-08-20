// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/MySql/v2/MySqlV2.node.ts' node

export const name = "mySql" as const;
export const description = "Get, add and update data in MySQL" as const;
export const version = 2.5 as const;
export const defaults = {"name":"MySQL"} as const;
export const credentials = [{"name":"mySql","required":true,"testedBy":"mysqlConnectionTest"}] as const

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


}

