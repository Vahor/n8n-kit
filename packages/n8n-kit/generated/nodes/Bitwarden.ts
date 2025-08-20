// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Bitwarden/Bitwarden.node.ts' node

export const name = "bitwarden" as const;
export const description = "Consume the Bitwarden API" as const;
export const version = 1 as const;
export const defaults = {"name":"Bitwarden"} as const;
export const credentials = [{"name":"bitwardenApi","required":true}] as const

/**
 * Consume the Bitwarden API
 */
export interface BitwardenNodeParameters {

    /**
     * Default: "collection"
     */
    readonly resource?: "collection" | "event" | "group" | "member";


}

