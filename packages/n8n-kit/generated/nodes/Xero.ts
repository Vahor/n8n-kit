// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Xero/Xero.node.ts' node

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

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "get" | "getAll" | "update";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getTenants"}
     */
    readonly organizationId?: string;

    /**
     * Full name of contact/organisation
     */
    readonly name?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "accountNumber"?: string, "addressesUi"?: { "addressesValues": any }, "bankAccountDetails"?: string, "contactNumber"?: string, "contactStatus"?: "ACTIVE" | "ARCHIVED" | "GDPRREQUEST", "defaultCurrency"?: string, "emailAddress"?: string, "firstName"?: string, "lastName"?: string, "phonesUi"?: { "phonesValues": any }, "purchasesDefaultAccountCode"?: string, "salesDefaultAccountCode"?: string, "skypeUserName"?: string, "taxNumber"?: string, "xeroNetworkKey"?: string, "brandingThemeId"?: string, "currency"?: string, "currencyRate"?: string, "date"?: string, "dueDate"?: string, "expectedPaymentDate"?: string, "invoiceNumber"?: string, "lineAmountType"?: "Exclusive" | "Inclusive" | "NoTax", "plannedPaymentDate"?: string, "reference"?: string, "sendToContact"?: boolean, "status"?: "DRAFT" | "SUBMITTED" | "AUTHORISED", "url"?: string };

    /**
     */
    readonly contactId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly options?: { "includeArchived"?: boolean, "orderBy"?: string, "sortOrder"?: "ASC" | "DESC", "where"?: string, "createdByMyApp"?: boolean, "statuses"?: ("DRAFT" | "SUBMITTED" | "AUTHORISED")[] };

    /**
     * Default: {}
     */
    readonly updateFields?: { "accountNumber"?: string, "addressesUi"?: { "addressesValues": any }, "bankAccountDetails"?: string, "contactNumber"?: string, "contactStatus"?: "ACTIVE" | "ARCHIVED" | "GDPRREQUEST", "defaultCurrency"?: string, "emailAddress"?: string, "firstName"?: string, "lastName"?: string, "name"?: string, "phonesUi"?: { "phonesValues": any }, "purchasesDefaultAccountCode"?: string, "salesDefaultAccountCode"?: string, "skypeUserName"?: string, "taxNumber"?: string, "xeroNetworkKey"?: string, "brandingThemeId"?: string, "contactId"?: string, "currency"?: string, "currencyRate"?: string, "date"?: string, "dueDate"?: string, "expectedPaymentDate"?: string, "invoiceNumber"?: string, "lineAmountType"?: "Exclusive" | "Inclusive" | "NoTax", "lineItemsUi"?: { "lineItemsValues": any }, "plannedPaymentDate"?: string, "reference"?: string, "sendToContact"?: boolean, "status"?: "DRAFT" | "SUBMITTED" | "AUTHORISED", "url"?: string };

    /**
     * Invoice Type
     */
    readonly type?: "ACCPAY" | "ACCREC";

    /**
     * Line item data
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly lineItemsUi?: { "lineItemsValues": any };

    /**
     */
    readonly invoiceId?: string;


}

