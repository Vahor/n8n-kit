// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Taiga/Taiga.node.ts' node

export const name = "taiga" as const;
export const description = "Consume Taiga API" as const;
export const version = 1 as const;
export const defaults = {"name":"Taiga"} as const;
export const credentials = [{"name":"taigaApi","required":true}] as const

/**
 * Consume Taiga API
 */
export interface TaigaNodeParameters {

    /**
     * Default: "issue"
     */
    readonly resource?: "epic" | "issue" | "task" | "userStory";


}

