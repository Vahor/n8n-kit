// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Keap/Keap.node.ts' node

export const name = "keap" as const;
export const description = "Consume Keap API" as const;
export const version = 1 as const;
export const defaults = {"name":"Keap"} as const;
export const credentials = [{"name":"keapOAuth2Api","required":true}] as const

/**
 * Consume Keap API
 */
export interface KeapNodeParameters {

    /**
     * Default: "company"
     */
    readonly resource?: "company" | "contact" | "contactNote" | "contactTag" | "ecommerceOrder" | "ecommerceProduct" | "email" | "file";


}

