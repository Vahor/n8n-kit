// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/QuickBooks/QuickBooks.node.ts' node

export const name = "quickbooks" as const;
export const description = "Consume the QuickBooks Online API" as const;
export const version = 1 as const;
export const defaults = {"name":"QuickBooks Online"} as const;
export const credentials = [{"name":"quickBooksOAuth2Api","required":true}] as const

/**
 * Consume the QuickBooks Online API
 */
export interface QuickBooksNodeParameters {

    /**
     * Default: "customer"
     */
    readonly resource?: "bill" | "customer" | "employee" | "estimate" | "invoice" | "item" | "payment" | "purchase" | "transaction" | "vendor";


}

