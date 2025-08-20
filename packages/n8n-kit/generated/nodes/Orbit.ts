// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Orbit/Orbit.node.ts' node

export const name = "orbit" as const;
export const description = "Consume Orbit API" as const;
export const version = 1 as const;
export const defaults = {"name":"Orbit"} as const;
export const credentials = [{"name":"orbitApi","required":true}] as const

/**
 * Consume Orbit API
 */
export interface OrbitNodeParameters {

    /**
     */
    readonly deprecated?: string;

    /**
     * Default: "member"
     */
    readonly resource?: "activity" | "member" | "note" | "post";


}

