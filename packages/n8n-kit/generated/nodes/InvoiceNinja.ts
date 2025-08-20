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

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "email" | "matchPayment";

    /**
     * Default: {}
     */
    readonly additionalFields?: { "clientName"?: string, "idNumber"?: string, "privateNotes"?: string, "vatNumber"?: string, "workPhone"?: string, "website"?: string, "client"?: string, "autoBill"?: boolean, "customValue1"?: number, "customValue2"?: number, "discount"?: string, "dueDate"?: string, "email"?: string, "emailInvoice"?: boolean, "invoiceDate"?: string, "invoiceNumber"?: string, "invoiceStatus"?: "1" | "2", "isAmountDiscount"?: boolean, "markSent"?: boolean, "paid"?: number, "partial"?: number, "partialDueDate"?: string, "poNumber"?: string, "publicNotes"?: string, "taxName1"?: string, "taxName2"?: string, "taxRate1"?: number, "taxRate2"?: number, "description"?: string, "project"?: string, "paymentType"?: "5" | "28" | "8" | "1" | "2" | "32" | "17" | "3" | "16" | "13" | "4" | "10" | "9" | "11" | "31" | "15" | "24" | "19" | "20" | "21" | "7" | "27" | "12" | "14" | "30" | "29" | "22" | "23" | "25" | "18" | "26" | "6", "transferReference"?: string, "amount"?: number, "billable"?: boolean, "category"?: string, "expenseDate"?: string, "paymentDate"?: string, "transactionReference"?: string, "vendor"?: string, "emailQuote"?: boolean, "quoteDate"?: string, "quoteNumber"?: string, "quoteStatus"?: "1" | "2", "bankIntegrationId"?: string, "baseType"?: "CREDIT" | "DEBIT", "currencyId"?: string, "date"?: string };

    /**
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly billingAddressUi?: { "billingAddressValue": any };

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly contactsUi?: { "contacstValues": any };

    /**
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly shippingAddressUi?: { "shippingAddressValue": any };

    /**
     */
    readonly clientId?: string;

    /**
     * Default: {}
     */
    readonly options?: { "include"?: "invoices", "status"?: "active" | "archived" | "deleted", "createdAt"?: string, "updatedAt"?: string, "isDeleted"?: boolean, "invoiceNumber"?: string, "clientStatus"?: "all" | "paid" | "unpaid" | "overdue", "quoteNumber"?: string };

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":60}
     */
    readonly limit?: number;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly invoiceItemsUi?: { "invoiceItemsValues": any };

    /**
     */
    readonly invoiceId?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly timeLogsUi?: { "timeLogsValues": any };

    /**
     */
    readonly taskId?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getInvoices"}
     */
    readonly invoice?: string;

    /**
     * Type options: {"minValue":0}
     */
    readonly amount?: number;

    /**
     */
    readonly paymentId?: string;

    /**
     */
    readonly expenseId?: string;

    /**
     */
    readonly quoteId?: string;

    /**
     */
    readonly bankTransactionId?: string;


}

