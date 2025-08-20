// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Metabase/Metabase.node.ts' node

export const name = "metabase" as const;
export const description = "Use the Metabase API" as const;
export const version = 1 as const;
export const defaults = {"name":"Metabase"} as const;
export const credentials = [{"name":"metabaseApi","required":true}] as const

/**
 * Use the Metabase API
 */
export interface MetabaseNodeParameters {

    /**
     * Default: "questions"
     */
    readonly resource?: "alerts" | "databases" | "metrics" | "questions";

    /**
     * Default: "getAll"
     */
    readonly operation?: "get" | "getAll" | "resultData" | "addNewDatasource" | "getFields";

    /**
     */
    readonly questionId?: string;

    /**
     * Default: "csv"
     */
    readonly format?: "csv" | "json" | "xlsx";

    /**
     */
    readonly metricId?: string;

    /**
     */
    readonly databaseId?: string;

    /**
     * Default: "postgres"
     */
    readonly engine?: "h2" | "mongo" | "mysql" | "postgres" | "redshift" | "sqlite";

    /**
     */
    readonly host?: string;

    /**
     */
    readonly name?: string;

    /**
     * Default: 5432
     */
    readonly port?: number;

    /**
     */
    readonly user?: string;

    /**
     * Type options: {"password":true}
     */
    readonly password?: string;

    /**
     */
    readonly dbName?: string;

    /**
     */
    readonly filePath?: string;

    /**
     * Default: true
     */
    readonly fullSync?: boolean;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;

    /**
     */
    readonly alertId?: string;


}

