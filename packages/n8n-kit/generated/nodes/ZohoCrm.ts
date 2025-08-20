// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Zoho/ZohoCrm.node.ts' node

export const name = "zohoCrm" as const;
export const description = "Consume Zoho CRM API" as const;
export const version = 1 as const;
export const defaults = {"name":"Zoho CRM"} as const;
export const credentials = [{"name":"zohoOAuth2Api","required":true}] as const

/**
 * Consume Zoho CRM API
 */
export interface ZohoCrmNodeParameters {

    /**
     * Default: "account"
     */
    readonly resource?: "account" | "contact" | "deal" | "invoice" | "lead" | "product" | "purchaseOrder" | "quote" | "salesOrder" | "vendor";


}

