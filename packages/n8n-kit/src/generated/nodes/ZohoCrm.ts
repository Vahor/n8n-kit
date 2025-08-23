// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Zoho/ZohoCrm.node.ts' node

export const name = "zohoCrm" as const;
export const description = "Consume Zoho CRM API" as const;
export const version = 1 as const;
export const credentials = [{"name":"zohoOAuth2Api","required":true}] as const;

/**
 * Consume Zoho CRM API
 */
export interface ZohoCrmNodeParameters {

    /**
     * Default: "account"
     */
    readonly resource?: "account" | "contact" | "deal" | "invoice" | "lead" | "product" | "purchaseOrder" | "quote" | "salesOrder" | "vendor";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "upsert" | "delete" | "get" | "getAll" | "update" | "create" | "upsert" | "delete" | "get" | "getFields" | "getAll" | "update";

    /**
     */
    readonly accountName?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "Account_Number"?: string, "Account_Site"?: string, "Account_Type"?: string, "Annual_Revenue"?: number, "Billing_Address"?: { "address_fields": any }, "Contact_Details"?: string, "Currency"?: "USD" | "EUR" | "AED" | "AFN" | "ALL" | "ARS" | "AUD" | "AZN" | "BBD" | "BDT" | "BGN" | "BMD" | "BND" | "BOB" | "BRL" | "BSD" | "BWP" | "BZD" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CRC" | "CZK" | "DKK" | "DOP" | "DZD" | "EGP" | "FJD" | "GBP" | "GTQ" | "HKD" | "HNL" | "HRK" | "HUF" | "IDR" | "ILS" | "INR" | "JMD" | "JPY" | "KES" | "KRW" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "MAD" | "MMK" | "MOP" | "MRO" | "MUR" | "MVR" | "MXN" | "MYR" | "NIO" | "NOK" | "NPR" | "NZD" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "QAR" | "RON" | "RUB" | "SAR" | "SBD" | "SCR" | "SEK" | "SGD" | "SYP" | "THB" | "TOP" | "TRY" | "TTD" | "TWD" | "UAH" | "VND" | "VUV" | "WST" | "XCD" | "XOF" | "YER" | "ZAR", "customFields"?: { "customFields": any }, "Description"?: string, "Employees"?: number, "Exchange_Rate"?: number, "Fax"?: string, "Industry"?: string, "Phone"?: string, "Shipping_Address"?: { "address_fields": any }, "Ticker_Symbol"?: string, "Website"?: string } | { "Assistant"?: string, "customFields"?: { "customFields": any }, "Date_of_Birth"?: string, "Department"?: string, "Description"?: string, "Email"?: string, "Secondary_Email"?: string, "Fax"?: string, "First_Name"?: string, "Full_Name"?: string, "Mailing_Address"?: { "address_fields": any }, "Mobile"?: string, "Other_Address"?: { "address_fields": any }, "Phone"?: string, "Asst_Phone"?: string, "Home_Phone"?: string, "Other_Phone"?: string, "Salutation"?: string, "Skype_ID"?: string, "Title"?: string, "Twitter"?: string } | { "Amount"?: number, "Closing_Date"?: string, "Currency"?: "USD" | "EUR" | "AED" | "AFN" | "ALL" | "ARS" | "AUD" | "AZN" | "BBD" | "BDT" | "BGN" | "BMD" | "BND" | "BOB" | "BRL" | "BSD" | "BWP" | "BZD" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CRC" | "CZK" | "DKK" | "DOP" | "DZD" | "EGP" | "FJD" | "GBP" | "GTQ" | "HKD" | "HNL" | "HRK" | "HUF" | "IDR" | "ILS" | "INR" | "JMD" | "JPY" | "KES" | "KRW" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "MAD" | "MMK" | "MOP" | "MRO" | "MUR" | "MVR" | "MXN" | "MYR" | "NIO" | "NOK" | "NPR" | "NZD" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "QAR" | "RON" | "RUB" | "SAR" | "SBD" | "SCR" | "SEK" | "SGD" | "SYP" | "THB" | "TOP" | "TRY" | "TTD" | "TWD" | "UAH" | "VND" | "VUV" | "WST" | "XCD" | "XOF" | "YER" | "ZAR", "customFields"?: { "customFields": any }, "Description"?: string, "Lead_Conversion_Time"?: number, "Next_Step"?: string, "Overall_Sales_Duration"?: number, "Probability"?: number, "Sales_Cycle_Duration"?: number } | { "accountId"?: string, "Adjustment"?: number, "Billing_Address"?: { "address_fields": any }, "Currency"?: "USD" | "EUR" | "AED" | "AFN" | "ALL" | "ARS" | "AUD" | "AZN" | "BBD" | "BDT" | "BGN" | "BMD" | "BND" | "BOB" | "BRL" | "BSD" | "BWP" | "BZD" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CRC" | "CZK" | "DKK" | "DOP" | "DZD" | "EGP" | "FJD" | "GBP" | "GTQ" | "HKD" | "HNL" | "HRK" | "HUF" | "IDR" | "ILS" | "INR" | "JMD" | "JPY" | "KES" | "KRW" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "MAD" | "MMK" | "MOP" | "MRO" | "MUR" | "MVR" | "MXN" | "MYR" | "NIO" | "NOK" | "NPR" | "NZD" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "QAR" | "RON" | "RUB" | "SAR" | "SBD" | "SCR" | "SEK" | "SGD" | "SYP" | "THB" | "TOP" | "TRY" | "TTD" | "TWD" | "UAH" | "VND" | "VUV" | "WST" | "XCD" | "XOF" | "YER" | "ZAR", "customFields"?: { "customFields": any }, "Description"?: string, "Due_Date"?: string, "Exchange_Rate"?: number, "Grand_Total"?: number, "Invoice_Date"?: string, "Invoice_Number"?: string, "Sales_Commission"?: number, "Shipping_Address"?: { "address_fields": any }, "Status"?: string, "Sub_Total"?: number, "Tax"?: number, "Terms_and_Conditions"?: string } | { "Address"?: { "address_fields": any }, "Annual_Revenue"?: number, "Currency"?: "USD" | "EUR" | "AED" | "AFN" | "ALL" | "ARS" | "AUD" | "AZN" | "BBD" | "BDT" | "BGN" | "BMD" | "BND" | "BOB" | "BRL" | "BSD" | "BWP" | "BZD" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CRC" | "CZK" | "DKK" | "DOP" | "DZD" | "EGP" | "FJD" | "GBP" | "GTQ" | "HKD" | "HNL" | "HRK" | "HUF" | "IDR" | "ILS" | "INR" | "JMD" | "JPY" | "KES" | "KRW" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "MAD" | "MMK" | "MOP" | "MRO" | "MUR" | "MVR" | "MXN" | "MYR" | "NIO" | "NOK" | "NPR" | "NZD" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "QAR" | "RON" | "RUB" | "SAR" | "SBD" | "SCR" | "SEK" | "SGD" | "SYP" | "THB" | "TOP" | "TRY" | "TTD" | "TWD" | "UAH" | "VND" | "VUV" | "WST" | "XCD" | "XOF" | "YER" | "ZAR", "customFields"?: { "customFields": any }, "Description"?: string, "Designation"?: string, "Email"?: string, "Email_Opt_Out"?: boolean, "Fax"?: string, "First_Name"?: string, "Full_Name"?: string, "Industry"?: string, "Industry_Type"?: string, "Lead_Source"?: string, "Lead_Status"?: string, "Mobile"?: string, "No_of_Employees"?: number, "Phone"?: string, "Salutation"?: string, "Secondary_Email"?: string, "Skype_ID"?: string, "Twitter"?: string, "Website"?: string } | { "Commission_Rate"?: number, "customFields"?: { "customFields": any }, "Description"?: string, "Manufacturer"?: string, "Product_Active"?: boolean, "Product_Category"?: string, "Qty_in_Demand"?: number, "Qty_in_Stock"?: number, "Taxable"?: boolean, "Unit_Price"?: number } | { "Adjustment"?: number, "Billing_Address"?: { "billing_address_fields": any }, "Carrier"?: string, "Currency"?: "USD" | "EUR" | "AED" | "AFN" | "ALL" | "ARS" | "AUD" | "AZN" | "BBD" | "BDT" | "BGN" | "BMD" | "BND" | "BOB" | "BRL" | "BSD" | "BWP" | "BZD" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CRC" | "CZK" | "DKK" | "DOP" | "DZD" | "EGP" | "FJD" | "GBP" | "GTQ" | "HKD" | "HNL" | "HRK" | "HUF" | "IDR" | "ILS" | "INR" | "JMD" | "JPY" | "KES" | "KRW" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "MAD" | "MMK" | "MOP" | "MRO" | "MUR" | "MVR" | "MXN" | "MYR" | "NIO" | "NOK" | "NPR" | "NZD" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "QAR" | "RON" | "RUB" | "SAR" | "SBD" | "SCR" | "SEK" | "SGD" | "SYP" | "THB" | "TOP" | "TRY" | "TTD" | "TWD" | "UAH" | "VND" | "VUV" | "WST" | "XCD" | "XOF" | "YER" | "ZAR", "customFields"?: { "customFields": any }, "Description"?: string, "Discount"?: number, "Due_Date"?: string, "Exchange_Rate"?: number, "Grand_Total"?: number, "PO_Date"?: string, "PO_Number"?: string, "Sales_Commission"?: number, "Shipping_Address"?: { "address_fields": any }, "Status"?: string, "Sub_Total"?: number, "Tax"?: number, "Terms_and_Conditions"?: string, "Tracking_Number"?: string } | { "Adjustment"?: number, "Billing_Address"?: { "address_fields": any }, "Carrier"?: string, "Currency"?: "USD" | "EUR" | "AED" | "AFN" | "ALL" | "ARS" | "AUD" | "AZN" | "BBD" | "BDT" | "BGN" | "BMD" | "BND" | "BOB" | "BRL" | "BSD" | "BWP" | "BZD" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CRC" | "CZK" | "DKK" | "DOP" | "DZD" | "EGP" | "FJD" | "GBP" | "GTQ" | "HKD" | "HNL" | "HRK" | "HUF" | "IDR" | "ILS" | "INR" | "JMD" | "JPY" | "KES" | "KRW" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "MAD" | "MMK" | "MOP" | "MRO" | "MUR" | "MVR" | "MXN" | "MYR" | "NIO" | "NOK" | "NPR" | "NZD" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "QAR" | "RON" | "RUB" | "SAR" | "SBD" | "SCR" | "SEK" | "SGD" | "SYP" | "THB" | "TOP" | "TRY" | "TTD" | "TWD" | "UAH" | "VND" | "VUV" | "WST" | "XCD" | "XOF" | "YER" | "ZAR", "customFields"?: { "customFields": any }, "Description"?: string, "Exchange_Rate"?: number, "Grand_Total"?: number, "Quote_Stage"?: string, "Shipping_Address"?: { "address_fields": any }, "Sub_Total"?: number, "Tax"?: number, "Team"?: string, "Terms_and_Conditions"?: string, "Valid_Till"?: string } | { "Adjustment"?: number, "Billing_Address"?: { "address_fields": any }, "Carrier"?: string, "contactId"?: string, "Currency"?: "USD" | "EUR" | "AED" | "AFN" | "ALL" | "ARS" | "AUD" | "AZN" | "BBD" | "BDT" | "BGN" | "BMD" | "BND" | "BOB" | "BRL" | "BSD" | "BWP" | "BZD" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CRC" | "CZK" | "DKK" | "DOP" | "DZD" | "EGP" | "FJD" | "GBP" | "GTQ" | "HKD" | "HNL" | "HRK" | "HUF" | "IDR" | "ILS" | "INR" | "JMD" | "JPY" | "KES" | "KRW" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "MAD" | "MMK" | "MOP" | "MRO" | "MUR" | "MVR" | "MXN" | "MYR" | "NIO" | "NOK" | "NPR" | "NZD" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "QAR" | "RON" | "RUB" | "SAR" | "SBD" | "SCR" | "SEK" | "SGD" | "SYP" | "THB" | "TOP" | "TRY" | "TTD" | "TWD" | "UAH" | "VND" | "VUV" | "WST" | "XCD" | "XOF" | "YER" | "ZAR", "customFields"?: { "customFields": any }, "dealId"?: string, "Description"?: string, "Discount"?: number, "Due_Date"?: string, "Exchange_Rate"?: number, "Grand_Total"?: number, "SO_Number"?: string, "Sales_Commission"?: number, "Shipping_Address"?: { "address_fields": any }, "Status"?: string, "Sub_Total"?: number, "Tax"?: number, "Terms_and_Conditions"?: string } | { "Address"?: { "address_fields": any }, "Category"?: string, "Currency"?: "USD" | "EUR" | "AED" | "AFN" | "ALL" | "ARS" | "AUD" | "AZN" | "BBD" | "BDT" | "BGN" | "BMD" | "BND" | "BOB" | "BRL" | "BSD" | "BWP" | "BZD" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CRC" | "CZK" | "DKK" | "DOP" | "DZD" | "EGP" | "FJD" | "GBP" | "GTQ" | "HKD" | "HNL" | "HRK" | "HUF" | "IDR" | "ILS" | "INR" | "JMD" | "JPY" | "KES" | "KRW" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "MAD" | "MMK" | "MOP" | "MRO" | "MUR" | "MVR" | "MXN" | "MYR" | "NIO" | "NOK" | "NPR" | "NZD" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "QAR" | "RON" | "RUB" | "SAR" | "SBD" | "SCR" | "SEK" | "SGD" | "SYP" | "THB" | "TOP" | "TRY" | "TTD" | "TWD" | "UAH" | "VND" | "VUV" | "WST" | "XCD" | "XOF" | "YER" | "ZAR", "customFields"?: { "customFields": any }, "Description"?: string, "Email"?: string, "Phone"?: string, "Website"?: string };

    /**
     * ID of the account to delete. Can be found at the end of the URL.
     */
    readonly accountId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 5
     * Type options: {"minValue":1,"maxValue":1000}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly options?: { "approved"?: boolean, "converted"?: boolean, "fields"?: any[], "include_child"?: boolean, "sort_by"?: string, "sort_order"?: "asc" | "desc", "territory_id"?: string };

    /**
     * Default: {}
     */
    readonly updateFields?: { "Account_Name"?: string, "Account_Number"?: string, "Account_Site"?: string, "Account_Type"?: string, "Annual_Revenue"?: number, "Billing_Address"?: { "address_fields": any }, "Contact_Details"?: string, "Currency"?: "USD" | "EUR" | "AED" | "AFN" | "ALL" | "ARS" | "AUD" | "AZN" | "BBD" | "BDT" | "BGN" | "BMD" | "BND" | "BOB" | "BRL" | "BSD" | "BWP" | "BZD" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CRC" | "CZK" | "DKK" | "DOP" | "DZD" | "EGP" | "FJD" | "GBP" | "GTQ" | "HKD" | "HNL" | "HRK" | "HUF" | "IDR" | "ILS" | "INR" | "JMD" | "JPY" | "KES" | "KRW" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "MAD" | "MMK" | "MOP" | "MRO" | "MUR" | "MVR" | "MXN" | "MYR" | "NIO" | "NOK" | "NPR" | "NZD" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "QAR" | "RON" | "RUB" | "SAR" | "SBD" | "SCR" | "SEK" | "SGD" | "SYP" | "THB" | "TOP" | "TRY" | "TTD" | "TWD" | "UAH" | "VND" | "VUV" | "WST" | "XCD" | "XOF" | "YER" | "ZAR", "customFields"?: { "customFields": any }, "Description"?: string, "Employees"?: number, "Exchange_Rate"?: number, "Fax"?: string, "Industry"?: string, "Phone"?: string, "Shipping_Address"?: { "address_fields": any }, "Ticker_Symbol"?: string, "Website"?: string } | { "Assistant"?: string, "Asst_Phone"?: string, "Currency"?: "USD" | "EUR" | "AED" | "AFN" | "ALL" | "ARS" | "AUD" | "AZN" | "BBD" | "BDT" | "BGN" | "BMD" | "BND" | "BOB" | "BRL" | "BSD" | "BWP" | "BZD" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CRC" | "CZK" | "DKK" | "DOP" | "DZD" | "EGP" | "FJD" | "GBP" | "GTQ" | "HKD" | "HNL" | "HRK" | "HUF" | "IDR" | "ILS" | "INR" | "JMD" | "JPY" | "KES" | "KRW" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "MAD" | "MMK" | "MOP" | "MRO" | "MUR" | "MVR" | "MXN" | "MYR" | "NIO" | "NOK" | "NPR" | "NZD" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "QAR" | "RON" | "RUB" | "SAR" | "SBD" | "SCR" | "SEK" | "SGD" | "SYP" | "THB" | "TOP" | "TRY" | "TTD" | "TWD" | "UAH" | "VND" | "VUV" | "WST" | "XCD" | "XOF" | "YER" | "ZAR", "customFields"?: { "customFields": any }, "Date_of_Birth"?: string, "Department"?: string, "Description"?: string, "Email"?: string, "Secondary_Email"?: string, "Fax"?: string, "First_Name"?: string, "Full_Name"?: string, "Home_Phone"?: string, "Last_Name"?: string, "Mailing_Address"?: { "address_fields": any }, "Mobile"?: string, "Other_Address"?: { "address_fields": any }, "Other_Phone"?: string, "Phone"?: string, "Salutation"?: string, "Skype_ID"?: string, "Title"?: string, "Twitter"?: string } | { "Amount"?: number, "Closing_Date"?: string, "Currency"?: string, "customFields"?: { "customFields": any }, "Deal_Name"?: string, "Description"?: string, "Lead_Conversion_Time"?: number, "Next_Step"?: string, "Overall_Sales_Duration"?: number, "Probability"?: number, "Sales_Cycle_Duration"?: number, "Stage"?: string } | { "accountId"?: string, "Adjustment"?: number, "Billing_Address"?: { "address_fields": any }, "Currency"?: "USD" | "EUR" | "AED" | "AFN" | "ALL" | "ARS" | "AUD" | "AZN" | "BBD" | "BDT" | "BGN" | "BMD" | "BND" | "BOB" | "BRL" | "BSD" | "BWP" | "BZD" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CRC" | "CZK" | "DKK" | "DOP" | "DZD" | "EGP" | "FJD" | "GBP" | "GTQ" | "HKD" | "HNL" | "HRK" | "HUF" | "IDR" | "ILS" | "INR" | "JMD" | "JPY" | "KES" | "KRW" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "MAD" | "MMK" | "MOP" | "MRO" | "MUR" | "MVR" | "MXN" | "MYR" | "NIO" | "NOK" | "NPR" | "NZD" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "QAR" | "RON" | "RUB" | "SAR" | "SBD" | "SCR" | "SEK" | "SGD" | "SYP" | "THB" | "TOP" | "TRY" | "TTD" | "TWD" | "UAH" | "VND" | "VUV" | "WST" | "XCD" | "XOF" | "YER" | "ZAR", "customFields"?: { "customFields": any }, "Description"?: string, "Due_Date"?: string, "Exchange_Rate"?: number, "Grand_Total"?: number, "Invoice_Date"?: string, "Invoice_Number"?: string, "Product_Details"?: { "list_price"?: number, "id"?: string, "product_description"?: string, "quantity"?: number, "quantity_in_stock"?: number, "Tax"?: number, "total"?: number, "total_after_discount"?: number, "net_total"?: number, "unit_price"?: number }, "Sales_Commission"?: number, "Shipping_Address"?: { "address_fields": any }, "Status"?: string, "Sub_Total"?: number, "Subject"?: string, "Tax"?: number, "Terms_and_Conditions"?: string } | { "Address"?: { "address_fields": any }, "Annual_Revenue"?: number, "Company"?: string, "Currency"?: "USD" | "EUR" | "AED" | "AFN" | "ALL" | "ARS" | "AUD" | "AZN" | "BBD" | "BDT" | "BGN" | "BMD" | "BND" | "BOB" | "BRL" | "BSD" | "BWP" | "BZD" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CRC" | "CZK" | "DKK" | "DOP" | "DZD" | "EGP" | "FJD" | "GBP" | "GTQ" | "HKD" | "HNL" | "HRK" | "HUF" | "IDR" | "ILS" | "INR" | "JMD" | "JPY" | "KES" | "KRW" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "MAD" | "MMK" | "MOP" | "MRO" | "MUR" | "MVR" | "MXN" | "MYR" | "NIO" | "NOK" | "NPR" | "NZD" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "QAR" | "RON" | "RUB" | "SAR" | "SBD" | "SCR" | "SEK" | "SGD" | "SYP" | "THB" | "TOP" | "TRY" | "TTD" | "TWD" | "UAH" | "VND" | "VUV" | "WST" | "XCD" | "XOF" | "YER" | "ZAR", "customFields"?: { "customFields": any }, "Description"?: string, "Designation"?: string, "Email"?: string, "Email_Opt_Out"?: boolean, "Fax"?: string, "First_Name"?: string, "Full_Name"?: string, "Industry"?: string, "Industry_Type"?: string, "Last_Name"?: string, "Lead_Source"?: string, "Lead_Status"?: string, "Mobile"?: string, "No_of_Employees"?: number, "Phone"?: string, "Salutation"?: string, "Secondary_Email"?: string, "Skype_ID"?: string, "Twitter"?: string, "Website"?: string } | { "Commission_Rate"?: number, "customFields"?: { "customFields": any }, "Description"?: string, "Manufacturer"?: string, "Product_Active"?: boolean, "Product_Category"?: string, "Qty_in_Demand"?: number, "Qty_in_Stock"?: number, "Taxable"?: boolean, "Unit_Price"?: number } | { "Adjustment"?: number, "Billing_Address"?: { "address_fields": any }, "Carrier"?: string, "Currency"?: "USD" | "EUR" | "AED" | "AFN" | "ALL" | "ARS" | "AUD" | "AZN" | "BBD" | "BDT" | "BGN" | "BMD" | "BND" | "BOB" | "BRL" | "BSD" | "BWP" | "BZD" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CRC" | "CZK" | "DKK" | "DOP" | "DZD" | "EGP" | "FJD" | "GBP" | "GTQ" | "HKD" | "HNL" | "HRK" | "HUF" | "IDR" | "ILS" | "INR" | "JMD" | "JPY" | "KES" | "KRW" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "MAD" | "MMK" | "MOP" | "MRO" | "MUR" | "MVR" | "MXN" | "MYR" | "NIO" | "NOK" | "NPR" | "NZD" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "QAR" | "RON" | "RUB" | "SAR" | "SBD" | "SCR" | "SEK" | "SGD" | "SYP" | "THB" | "TOP" | "TRY" | "TTD" | "TWD" | "UAH" | "VND" | "VUV" | "WST" | "XCD" | "XOF" | "YER" | "ZAR", "customFields"?: { "customFields": any }, "Description"?: string, "Discount"?: number, "Due_Date"?: string, "Exchange_Rate"?: number, "Grand_Total"?: number, "PO_Date"?: string, "PO_Number"?: string, "Sales_Commission"?: number, "Shipping_Address"?: { "address_fields": any }, "Status"?: string, "Sub_Total"?: number, "Subject"?: string, "Tax"?: number, "Terms_and_Conditions"?: string, "Tracking_Number"?: string } | { "Adjustment"?: number, "Billing_Address"?: { "address_fields": any }, "Carrier"?: string, "Currency"?: "USD" | "EUR" | "AED" | "AFN" | "ALL" | "ARS" | "AUD" | "AZN" | "BBD" | "BDT" | "BGN" | "BMD" | "BND" | "BOB" | "BRL" | "BSD" | "BWP" | "BZD" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CRC" | "CZK" | "DKK" | "DOP" | "DZD" | "EGP" | "FJD" | "GBP" | "GTQ" | "HKD" | "HNL" | "HRK" | "HUF" | "IDR" | "ILS" | "INR" | "JMD" | "JPY" | "KES" | "KRW" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "MAD" | "MMK" | "MOP" | "MRO" | "MUR" | "MVR" | "MXN" | "MYR" | "NIO" | "NOK" | "NPR" | "NZD" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "QAR" | "RON" | "RUB" | "SAR" | "SBD" | "SCR" | "SEK" | "SGD" | "SYP" | "THB" | "TOP" | "TRY" | "TTD" | "TWD" | "UAH" | "VND" | "VUV" | "WST" | "XCD" | "XOF" | "YER" | "ZAR", "customFields"?: { "customFields": any }, "Description"?: string, "Exchange_Rate"?: number, "Grand_Total"?: number, "Quote_Stage"?: string, "Shipping_Address"?: { "address_fields": any }, "Sub_Total"?: number, "Subject"?: string, "Tax"?: number, "Team"?: string, "Terms_and_Conditions"?: string, "Valid_Till"?: string } | { "accountId"?: string, "Adjustment"?: number, "Billing_Address"?: { "address_fields": any }, "Carrier"?: string, "contactId"?: string, "Currency"?: "USD" | "EUR" | "AED" | "AFN" | "ALL" | "ARS" | "AUD" | "AZN" | "BBD" | "BDT" | "BGN" | "BMD" | "BND" | "BOB" | "BRL" | "BSD" | "BWP" | "BZD" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CRC" | "CZK" | "DKK" | "DOP" | "DZD" | "EGP" | "FJD" | "GBP" | "GTQ" | "HKD" | "HNL" | "HRK" | "HUF" | "IDR" | "ILS" | "INR" | "JMD" | "JPY" | "KES" | "KRW" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "MAD" | "MMK" | "MOP" | "MRO" | "MUR" | "MVR" | "MXN" | "MYR" | "NIO" | "NOK" | "NPR" | "NZD" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "QAR" | "RON" | "RUB" | "SAR" | "SBD" | "SCR" | "SEK" | "SGD" | "SYP" | "THB" | "TOP" | "TRY" | "TTD" | "TWD" | "UAH" | "VND" | "VUV" | "WST" | "XCD" | "XOF" | "YER" | "ZAR", "customFields"?: { "customFields": any }, "dealId"?: string, "Description"?: string, "Discount"?: number, "Due_Date"?: string, "Exchange_Rate"?: number, "Grand_Total"?: number, "SO_Number"?: string, "Sales_Commission"?: number, "Shipping_Address"?: { "address_fields": any }, "Status"?: string, "Sub_Total"?: number, "Subject"?: string, "Tax"?: number, "Terms_and_Conditions"?: string } | { "Address"?: { "address_fields": any }, "Category"?: string, "Currency"?: string, "customFields"?: { "customFields": any }, "Description"?: string, "Email"?: string, "Phone"?: string, "Vendor_Name"?: string, "Website"?: string };

    /**
     */
    readonly lastName?: string;

    /**
     * ID of the contact to delete
     */
    readonly contactId?: string;

    /**
     */
    readonly dealName?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Default: []
     * Type options: {"loadOptionsMethod":"getDealStage"}
     */
    readonly stage?: string;

    /**
     * ID of the deal to delete
     */
    readonly dealId?: string;

    /**
     * Subject or title of the invoice
     */
    readonly subject?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true,"multipleValueButtonText":"Add Product"}
     */
    readonly Product_Details?: { "list_price"?: number, "id"?: string, "product_description"?: string, "quantity"?: number, "quantity_in_stock"?: number, "Tax"?: number, "total"?: number, "total_after_discount"?: number, "net_total"?: number, "unit_price"?: number };

    /**
     * ID of the invoice to delete
     */
    readonly invoiceId?: string;

    /**
     * Company at which the lead works
     */
    readonly Company?: string;

    /**
     * ID of the lead to delete
     */
    readonly leadId?: string;

    /**
     */
    readonly productName?: string;

    /**
     * ID of the product to delete
     */
    readonly productId?: string;

    /**
     * ID of the vendor associated with the purchase order. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getVendors"}
     */
    readonly vendorId?: string;

    /**
     * ID of the purchase order to delete
     */
    readonly purchaseOrderId?: string;

    /**
     * ID of the quote to delete
     */
    readonly quoteId?: string;

    /**
     * ID of the sales order to delete
     */
    readonly salesOrderId?: string;

    /**
     */
    readonly vendorName?: string;


}

