// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/PostHog/PostHog.node.ts' node

export const name = "postHog" as const;
export const description = "Consume PostHog API" as const;
export const version = 1 as const;
export const defaults = {"name":"PostHog"} as const;
export const credentials = [{"name":"postHogApi","required":true}] as const

/**
 * Consume PostHog API
 */
export interface PostHogNodeParameters {

    /**
     * Default: "event"
     */
    readonly resource?: "alias" | "event" | "identity" | "track";


}

