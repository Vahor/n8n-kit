// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/InvoiceNinja/InvoiceNinja.node.ts' node

export const name = "invoiceNinja" as const;
export const description = "Consume Invoice Ninja API" as const;
export const version = 2 as const;
export const defaults = {"name":"Invoice Ninja"} as const;
export const credentials = [{"name":"invoiceNinjaApi","required":true}] as const

/**
 * Consume Invoice Ninja API
 */
export interface InvoiceNinjaNodeParameters {

    /**
     * Default: "v4"
     */
    readonly apiVersion?: "v4" | "v5";

    /**
     * Default: "client"
     */
    readonly resource?: "bank_transaction" | "client" | "expense" | "invoice" | "payment" | "quote" | "task";


}

