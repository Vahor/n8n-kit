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


}

