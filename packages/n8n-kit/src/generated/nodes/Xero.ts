// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Xero/Xero.node.ts' node

export const description = "Consume Xero API" as const;
export const type = "n8n-nodes-base.xero" as const;
export const version = 1 as const;
export const credentials = [{"name":"xeroOAuth2Api","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface XeroNodeParameters {
    /** Default: "invoice" */
    readonly resource?: "contact" | "invoice";

    /** Default: "create" */
    readonly operation?: "create" | "get" | "getAll" | "update";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getTenants"}
     */
    readonly organizationId?: string;

    /** Full name of contact/organisation */
    readonly name?: string;

    /** Default: {} */
    readonly additionalFields?: { accountNumber?: string, addressesUi?: { addressesValues: { type?: "POBOX" | "STREET", line1?: string, line2?: string, city?: string, region?: string, postalCode?: string, country?: string, attentionTo?: string } }, bankAccountDetails?: string, contactNumber?: string, contactStatus?: "ACTIVE" | "ARCHIVED" | "GDPRREQUEST", defaultCurrency?: string, emailAddress?: string, firstName?: string, lastName?: string, phonesUi?: { phonesValues: { phoneType?: "DEFAULT" | "DDI" | "MOBILE" | "FAX", phoneNumber?: string, phoneAreaCode?: string, phoneCountryCode?: string } }, purchasesDefaultAccountCode?: string, salesDefaultAccountCode?: string, skypeUserName?: string, taxNumber?: string, xeroNetworkKey?: string } | { brandingThemeId?: string, currency?: string, currencyRate?: string, date?: string, dueDate?: string, expectedPaymentDate?: string, invoiceNumber?: string, lineAmountType?: "Exclusive" | "Inclusive" | "NoTax", plannedPaymentDate?: string, reference?: string, sendToContact?: boolean, status?: "DRAFT" | "SUBMITTED" | "AUTHORISED", url?: string };

    readonly contactId?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly options?: { includeArchived?: boolean, orderBy?: string, sortOrder?: "ASC" | "DESC", where?: string } | { createdByMyApp?: boolean, orderBy?: string, sortOrder?: "ASC" | "DESC", statuses?: ("DRAFT" | "SUBMITTED" | "AUTHORISED")[], where?: string };

    /** Default: {} */
    readonly updateFields?: { accountNumber?: string, addressesUi?: { addressesValues: { type?: "POBOX" | "STREET", line1?: string, line2?: string, city?: string, region?: string, postalCode?: string, country?: string, attentionTo?: string } }, bankAccountDetails?: string, contactNumber?: string, contactStatus?: "ACTIVE" | "ARCHIVED" | "GDPRREQUEST", defaultCurrency?: string, emailAddress?: string, firstName?: string, lastName?: string, name?: string, phonesUi?: { phonesValues: { phoneType?: "DEFAULT" | "DDI" | "MOBILE" | "FAX", phoneNumber?: string, phoneAreaCode?: string, phoneCountryCode?: string } }, purchasesDefaultAccountCode?: string, salesDefaultAccountCode?: string, skypeUserName?: string, taxNumber?: string, xeroNetworkKey?: string } | { brandingThemeId?: string, contactId?: string, currency?: string, currencyRate?: string, date?: string, dueDate?: string, expectedPaymentDate?: string, invoiceNumber?: string, lineAmountType?: "Exclusive" | "Inclusive" | "NoTax", lineItemsUi?: { lineItemsValues: { lineItemId?: string, description?: string, quantity?: number, unitAmount?: string, itemCode?: string, accountCode?: string, taxType: "INPUT" | "NONE" | "OUTPUT" | "GSTONIMPORTS", taxAmount?: string, lineAmount?: string, discountRate?: string } }, plannedPaymentDate?: string, reference?: string, sendToContact?: boolean, status?: "DRAFT" | "SUBMITTED" | "AUTHORISED", url?: string };

    /** Invoice Type */
    readonly type?: "ACCPAY" | "ACCREC";

    /**
     * Line item data
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly lineItemsUi?: { lineItemsValues: { description?: string, quantity?: number, unitAmount?: string, itemCode?: string, accountCode?: string, taxType: "INPUT" | "NONE" | "OUTPUT" | "GSTONIMPORTS", taxAmount?: string, lineAmount?: string, discountRate?: string } };

    readonly invoiceId?: string;

}
