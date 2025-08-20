// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/TravisCi/TravisCi.node.ts' node

export const name = "travisCi" as const;
export const description = "Consume TravisCI API" as const;
export const version = 1 as const;
export const defaults = {"name":"TravisCI"} as const;
export const credentials = [{"name":"travisCiApi","required":true}] as const

/**
 * Consume TravisCI API
 */
export interface TravisCiNodeParameters {

    /**
     * Default: "build"
     */
    readonly resource?: "build";


}

