// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Clearbit/Clearbit.node.ts' node

export const name = "clearbit" as const;
export const description = "Consume Clearbit API" as const;
export const version = 1 as const;
export const defaults = {"name":"Clearbit"} as const;
export const credentials = [{"name":"clearbitApi","required":true}] as const

/**
 * Consume Clearbit API
 */
export interface ClearbitNodeParameters {

    /**
     * Default: "company"
     */
    readonly resource?: "company" | "person";


}

