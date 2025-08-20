// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Copper/Copper.node.ts' node

export const name = "copper" as const;
export const description = "Consume the Copper API" as const;
export const version = 1 as const;
export const defaults = {"name":"Copper"} as const;
export const credentials = [{"name":"copperApi","required":true}] as const

/**
 * Consume the Copper API
 */
export interface CopperNodeParameters {

    /**
     * Default: "company"
     */
    readonly resource?: "company" | "customerSource" | "lead" | "opportunity" | "person" | "project" | "task" | "user";


}

