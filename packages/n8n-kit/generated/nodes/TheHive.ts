// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/TheHive/TheHive.node.ts' node

export const name = "theHive" as const;
export const description = "Consume TheHive API" as const;
export const version = 1 as const;
export const defaults = {"name":"TheHive"} as const;
export const credentials = [{"name":"theHiveApi","required":true}] as const

/**
 * Consume TheHive API
 */
export interface TheHiveNodeParameters {

    /**
     * Default: "alert"
     */
    readonly resource: "alert" | "case" | "log" | "observable" | "task";


}

