// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/InvoiceNinja/InvoiceNinja.node.ts' node

export const name = "invoiceNinja" as const;
export const description = "Consume Invoice Ninja API" as const;
export const version = 2 as const;

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
    readonly operation?: "create" | "delete" | "get" | "getAll" | "create" | "delete" | "email" | "get" | "getAll" | "create" | "delete" | "get" | "getAll" | "matchPayment";

    /**
     * Default: {}
     */
    readonly additionalFields?: { "clientName"?: string, "idNumber"?: string, "privateNotes"?: string, "vatNumber"?: string, "workPhone"?: string, "website"?: string } | { "client"?: string, "autoBill"?: boolean, "customValue1"?: number, "customValue2"?: number, "discount"?: string, "dueDate"?: string, "email"?: string, "emailInvoice"?: boolean, "invoiceDate"?: string, "invoiceNumber"?: string, "invoiceStatus"?: "1" | "2", "isAmountDiscount"?: boolean, "markSent"?: boolean, "paid"?: number, "partial"?: number, "partialDueDate"?: string, "poNumber"?: string, "privateNotes"?: string, "publicNotes"?: string, "taxName1"?: string, "taxName2"?: string, "taxRate1"?: number, "taxRate2"?: number } | { "client"?: string, "customValue1"?: string, "customValue2"?: string, "description"?: string, "project"?: string } | { "paymentType"?: "5" | "28" | "8" | "1" | "2" | "32" | "17" | "3" | "16" | "13" | "4" | "10" | "9" | "11" | "31" | "15" | "24" | "19" | "20" | "21" | "7" | "27" | "12" | "14" | "30" | "29" | "22" | "23" | "25" | "18" | "26" | "6", "transferReference"?: string, "privateNotes"?: string } | { "paymentType"?: "1" | "2" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "24" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52", "transferReference"?: string, "privateNotes"?: string } | { "amount"?: number, "billable"?: boolean, "client"?: string, "customValue1"?: string, "customValue2"?: string, "category"?: string, "expenseDate"?: string, "paymentDate"?: string, "paymentType"?: "5" | "28" | "8" | "1" | "2" | "32" | "17" | "3" | "16" | "13" | "4" | "10" | "9" | "11" | "31" | "15" | "24" | "19" | "20" | "21" | "7" | "27" | "12" | "14" | "30" | "29" | "22" | "23" | "25" | "18" | "26" | "6", "privateNotes"?: string, "publicNotes"?: string, "taxName1"?: string, "taxName2"?: string, "taxRate1"?: number, "taxRate2"?: number, "transactionReference"?: string, "vendor"?: string } | { "amount"?: number, "billable"?: boolean, "client"?: string, "customValue1"?: string, "customValue2"?: string, "category"?: string, "expenseDate"?: string, "paymentDate"?: string, "paymentType"?: "1" | "2" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "24" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52", "privateNotes"?: string, "publicNotes"?: string, "taxName1"?: string, "taxName2"?: string, "taxRate1"?: number, "taxRate2"?: number, "transactionReference"?: string, "vendor"?: string } | { "client"?: string, "autoBill"?: boolean, "customValue1"?: number, "customValue2"?: number, "discount"?: string, "dueDate"?: string, "email"?: string, "emailQuote"?: boolean, "quoteDate"?: string, "quoteNumber"?: string, "quoteStatus"?: "1" | "2", "isAmountDiscount"?: boolean, "paid"?: number, "partial"?: number, "partialDueDate"?: string, "poNumber"?: string, "privateNotes"?: string, "publicNotes"?: string, "taxName1"?: string, "taxName2"?: string, "taxRate1"?: number, "taxRate2"?: number } | { "amount"?: number, "bankIntegrationId"?: string, "baseType"?: "CREDIT" | "DEBIT", "currencyId"?: string, "date"?: string, "description"?: string };

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
    readonly options?: { "include"?: "invoices" } | { "include"?: "invoices", "status"?: "active" | "archived" | "deleted", "createdAt"?: string, "updatedAt"?: string, "isDeleted"?: boolean } | { "include"?: "client" } | { "invoiceNumber"?: string, "include"?: "client", "status"?: "active" | "archived" | "deleted", "createdAt"?: string, "updatedAt"?: string, "isDeleted"?: boolean, "clientStatus"?: "all" | "paid" | "unpaid" | "overdue" } | { "include"?: "client", "status"?: "active" | "archived" | "deleted", "createdAt"?: string, "updatedAt"?: string, "isDeleted"?: boolean } | { "quoteNumber"?: string, "include"?: "client", "status"?: "active" | "archived" | "deleted", "createdAt"?: string, "updatedAt"?: string, "isDeleted"?: boolean };

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

