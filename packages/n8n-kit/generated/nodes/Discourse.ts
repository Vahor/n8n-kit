// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Discourse/Discourse.node.ts' node

export const name = "discourse" as const;
export const description = "Consume Discourse API" as const;
export const version = 1 as const;
export const defaults = {"name":"Discourse"} as const;
export const credentials = [{"name":"discourseApi","required":true}] as const

/**
 * Consume Discourse API
 */
export interface DiscourseNodeParameters {

    /**
     * Default: "post"
     */
    readonly resource?: "category" | "group" | "post" | "user" | "userGroup";


}

