// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Xero/Xero.node.ts' node

export const name = "xero" as const;
export const description = "Consume Xero API" as const;
export const version = 1 as const;
export const defaults = {"name":"Xero"} as const;
export const credentials = [{"name":"xeroOAuth2Api","required":true}] as const

/**
 * Consume Xero API
 */
export interface XeroNodeParameters {

    /**
     * Default: "invoice"
     */
    readonly resource?: "contact" | "invoice";


}

