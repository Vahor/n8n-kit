// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Salesmate/Salesmate.node.ts' node

export const name = "salesmate" as const;
export const description = "Consume Salesmate API" as const;
export const version = 1 as const;
export const defaults = {"name":"Salesmate"} as const;
export const credentials = [{"name":"salesmateApi","required":true}] as const

/**
 * Consume Salesmate API
 */
export interface SalesmateNodeParameters {

    /**
     * Default: "activity"
     */
    readonly resource?: "activity" | "company" | "deal";


}

