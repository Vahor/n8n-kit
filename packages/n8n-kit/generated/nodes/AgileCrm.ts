// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/AgileCrm/AgileCrm.node.ts' node

export const name = "agileCrm" as const;
export const description = "Consume Agile CRM API" as const;
export const version = 1 as const;
export const defaults = {"name":"Agile CRM"} as const;
export const credentials = [{"name":"agileCrmApi","required":true}] as const

/**
 * Consume Agile CRM API
 */
export interface AgileCrmNodeParameters {

    /**
     * Default: "contact"
     */
    readonly resource?: "company" | "contact" | "deal";


}

