// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/CircleCi/CircleCi.node.ts' node

export const name = "circleCi" as const;
export const description = "Consume CircleCI API" as const;
export const version = 1 as const;
export const defaults = {"name":"CircleCI"} as const;
export const credentials = [{"name":"circleCiApi","required":true}] as const

/**
 * Consume CircleCI API
 */
export interface CircleCiNodeParameters {

    /**
     * Default: "pipeline"
     */
    readonly resource?: "pipeline";


}

