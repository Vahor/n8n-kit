// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/QuickBooks/QuickBooks.node.ts' node

export const description = "Consume the QuickBooks Online API" as const;
export const type = "n8n-nodes-base.quickbooks" as const;
export const version = 1 as const;
export const credentials = [{"name":"quickBooksOAuth2Api","required":true}] as const;

/**
 * Consume the QuickBooks Online API
 */
export interface QuickBooksNodeParameters {

    /**
     * Default: "customer"
     */
    readonly resource?: "bill" | "customer" | "employee" | "estimate" | "invoice" | "item" | "payment" | "purchase" | "transaction" | "vendor";

    /**
     * Default: "get"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "create" | "get" | "getAll" | "update" | "create" | "delete" | "get" | "getAll" | "send" | "update" | "create" | "delete" | "get" | "getAll" | "send" | "update" | "void" | "get" | "getAll" | "getReport";

    /**
     * The ID of the vendor who the bill is for. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getVendors"}
     */
    readonly VendorRef?: string;

    /**
     * Individual line item of a transaction
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly Line?: { "accountId"?: string, "Amount"?: number, "Description"?: string, "DetailType"?: "AccountBasedExpenseLineDetail" | "ItemBasedExpenseLineDetail", "itemId"?: string, "LineNum"?: number } | { "Amount"?: number, "Description"?: string, "DetailType"?: "SalesItemLineDetail", "itemId"?: string, "LineNum"?: number, "TaxCodeRef"?: string } | { "Amount"?: number, "Description"?: string, "DetailType"?: "SalesItemLineDetail", "itemId"?: string, "LineNum"?: number, "TaxCodeRef"?: string, "Qty"?: number };

    /**
     * Default: {}
     */
    readonly additionalFields?: { "APAccountRef"?: { "details": any }, "Balance"?: string, "DueDate"?: string, "SalesTermRef"?: { "details": any }, "TotalAmt"?: number, "TxnDate"?: string } | { "Active"?: boolean, "Balance"?: string, "BalanceWithJobs"?: number, "BillAddr"?: { "details": any }, "BillWithParent"?: boolean, "CompanyName"?: string, "FamilyName"?: string, "FullyQualifiedName"?: string, "GivenName"?: string, "PreferredDeliveryMethod"?: "Print" | "Email" | "None", "PrimaryEmailAddr"?: string, "PrimaryPhone"?: string, "PrintOnCheckName"?: string, "Taxable"?: boolean } | { "Active"?: boolean, "BillableTime"?: boolean, "DisplayName"?: string, "BillAddr"?: { "details": any }, "PrimaryPhone"?: string, "PrintOnCheckName"?: string, "SSN"?: string } | { "ApplyTaxAfterDiscount"?: boolean, "BillAddr"?: { "details": any }, "BillEmail"?: string, "CustomFields"?: { "Field": any }, "CustomerMemo"?: string, "DocNumber"?: string, "EmailStatus"?: "NotSet" | "NeedToSend" | "EmailSent", "PrintStatus"?: "NotSet" | "NeedToPrint" | "PrintComplete", "ShipAddr"?: { "details": any }, "TotalAmt"?: number, "TxnDate"?: string, "TotalTax"?: number } | { "Balance"?: number, "BillAddr"?: { "details": any }, "BillEmail"?: string, "CustomerMemo"?: string, "CustomFields"?: { "Field": any }, "DocNumber"?: string, "DueDate"?: string, "EmailStatus"?: "NotSet" | "NeedToSend" | "EmailSent", "PrintStatus"?: "NotSet" | "NeedToPrint" | "PrintComplete", "ShipAddr"?: string, "TotalAmt"?: number, "TxnDate"?: string } | { "TxnDate"?: string } | { "AcctNum"?: string, "Active"?: boolean, "Balance"?: number, "BillAddr"?: { "details": any }, "CompanyName"?: string, "FamilyName"?: string, "GivenName"?: string, "PrimaryEmailAddr"?: string, "PrimaryPhone"?: string, "PrintOnCheckName"?: string, "Vendor1099"?: boolean };

    /**
     * The ID of the bill to delete
     */
    readonly billId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":1000}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly filters?: { "query"?: string } | { "appaid"?: "All" | "Paid" | "Unpaid", "arpaid"?: "All" | "Paid" | "Unpaid", "cleared"?: "Cleared" | "Uncleared" | "Reconciled" | "Deposited", "columns"?: ("account_name" | "create_by" | "create_date" | "cust_msg" | "dept_name" | "due_date" | "doc_num" | "inv_date" | "is_ap_paid" | "is_cleared" | "last_mod_by" | "memo" | "name" | "other_account" | "pmt_mthod" | "is_no_post" | "printed" | "sales_cust1" | "sales_cust2" | "sales_cust3" | "term_name" | "tracking_num" | "tx_date" | "txn_type")[], "customer"?: any[], "dateRangeCustom"?: { "dateRangeCustomProperties": any }, "date_macro"?: "Today" | "Yesterday" | "This Week" | "Last Week" | "This Week-to-Date" | "Last Week-to-Date" | "Next Week" | "Next 4 Weeks" | "This Month" | "Last Month" | "This Month-to-Date" | "Last Month-to-Date" | "Next Month" | "This Fiscal Quarter" | "Last Fiscal Quarter" | "This Fiscal Quarter-to-Date" | "Last Fiscal Quarter-to-Date" | "Next Fiscal Quarter" | "This Fiscal Year" | "Last Fiscal Year" | "This Fiscal Year-to-Date" | "Last Fiscal Year-to-Date" | "Next Fiscal Year", "dateRangeCreationCustom"?: { "dateRangeCreationCustomProperties": any }, "createdate_macro"?: "Today" | "Yesterday" | "This Week" | "Last Week" | "This Week-to-Date" | "Last Week-to-Date" | "Next Week" | "Next 4 Weeks" | "This Month" | "Last Month" | "This Month-to-Date" | "Last Month-to-Date" | "Next Month" | "This Fiscal Quarter" | "Last Fiscal Quarter" | "This Fiscal Quarter-to-Date" | "Last Fiscal Quarter-to-Date" | "Next Fiscal Quarter" | "This Fiscal Year" | "Last Fiscal Year" | "This Fiscal Year-to-Date" | "Last Fiscal Year-to-Date" | "Next Fiscal Year", "dateRangeDueCustom"?: { "dateRangeDueCustomProperties": any }, "duedate_macro"?: "Today" | "Yesterday" | "This Week" | "Last Week" | "This Week-to-Date" | "Last Week-to-Date" | "Next Week" | "Next 4 Weeks" | "This Month" | "Last Month" | "This Month-to-Date" | "Last Month-to-Date" | "Next Month" | "This Fiscal Quarter" | "Last Fiscal Quarter" | "This Fiscal Quarter-to-Date" | "Last Fiscal Quarter-to-Date" | "Next Fiscal Quarter" | "This Fiscal Year" | "Last Fiscal Year" | "This Fiscal Year-to-Date" | "Last Fiscal Year-to-Date" | "Next Fiscal Year", "dateRangeModificationCustom"?: { "dateRangeModificationCustomProperties": any }, "moddate_macro"?: "Today" | "Yesterday" | "This Week" | "Last Week" | "This Week-to-Date" | "Last Week-to-Date" | "Next Week" | "Next 4 Weeks" | "This Month" | "Last Month" | "This Month-to-Date" | "Last Month-to-Date" | "Next Month" | "This Fiscal Quarter" | "Last Fiscal Quarter" | "This Fiscal Quarter-to-Date" | "Last Fiscal Quarter-to-Date" | "Next Fiscal Quarter" | "This Fiscal Year" | "Last Fiscal Year" | "This Fiscal Year-to-Date" | "Last Fiscal Year-to-Date" | "Next Fiscal Year", "department"?: any[], "docnum"?: string, "group_by"?: "Account" | "Customer" | "Day" | "Employee" | "Location" | "Month" | "Name" | "None" | "Payment Method" | "Quarter" | "Transaction Type" | "Vendor" | "Week" | "Year", "memo"?: any[], "payment_Method"?: "American Express" | "Cash" | "Check" | "Dinners Club" | "Discover" | "Master Card" | "Visa", "printed"?: "Printed" | "To_be_printed", "qzurl"?: boolean, "sort_by"?: "account_name" | "create_by" | "create_date" | "cust_msg" | "dept_name" | "due_date" | "doc_num" | "inv_date" | "is_ap_paid" | "is_cleared" | "last_mod_by" | "memo" | "name" | "other_account" | "pmt_mthod" | "is_no_post" | "printed" | "sales_cust1" | "sales_cust2" | "sales_cust3" | "term_name" | "tracking_num" | "tx_date" | "txn_type", "sort_order"?: "Ascend" | "Descend", "source_account_type"?: "AccountsPayable" | "AccountsReceivable" | "Bank" | "CostOfGoodsSold" | "CreditCard" | "Equity" | "Expense" | "FixedAsset" | "Income" | "LongTermLiability" | "NonPosting" | "OtherAsset" | "OtherCurrentAsset" | "OtherCurrentLiability" | "OtherExpense" | "OtherIncome", "term"?: any[], "bothamount"?: number, "transaction_type"?: "Bill" | "BillPaymentCheck" | "BillPaymentCreditCard" | "BillableCharge" | "CashPurchase" | "Charge" | "Check" | "Credit" | "CreditCardCharge" | "CreditCardCredit" | "CreditMemo" | "CreditRefund" | "Deposit" | "Estimate" | "GlobalTaxAdjustment" | "GlobalTaxPayment" | "InventoryQuantityAdjustment" | "Invoice" | "JournalEntry" | "PurchaseOrder" | "ReceivePayment" | "SalesReceipt" | "Service Tax Defer" | "Service Tax Gross Adjustment" | "Service Tax Partial Utilisation" | "Service Tax Refund" | "Service Tax Reversal" | "Statement" | "TimeActivity" | "Transfer" | "VendorCredit", "vendor"?: any[] };

    /**
     * Default: {}
     */
    readonly updateFields?: { "APAccountRef"?: { "details": any }, "DueDate"?: string, "SalesTermRef"?: { "details": any }, "TxnDate"?: string } | { "Active"?: boolean, "Balance"?: string, "BalanceWithJobs"?: number, "BillAddr"?: { "details": any }, "BillWithParent"?: boolean, "CompanyName"?: string, "FamilyName"?: string, "FullyQualifiedName"?: string, "GivenName"?: string, "PreferredDeliveryMethod"?: "Print" | "Email" | "None", "PrimaryEmailAddr"?: string, "PrimaryPhone"?: string, "PrintOnCheckName"?: string, "Taxable"?: boolean } | { "Active"?: boolean, "BillableTime"?: boolean, "DisplayName"?: string, "BillAddr"?: { "details": any }, "PrimaryPhone"?: string, "PrintOnCheckName"?: string, "SSN"?: string } | { "ApplyTaxAfterDiscount"?: boolean, "BillAddr"?: { "details": any }, "BillEmail"?: string, "CustomFields"?: { "Field": any }, "CustomerMemo"?: string, "DocNumber"?: string, "EmailStatus"?: "NotSet" | "NeedToSend" | "EmailSent", "PrintStatus"?: "NotSet" | "NeedToPrint" | "PrintComplete", "ShipAddr"?: { "details": any }, "TxnDate"?: string } | { "BillAddr"?: { "details": any }, "BillEmail"?: string, "CustomerMemo"?: string, "CustomFields"?: { "Field": any }, "DocNumber"?: string, "DueDate"?: string, "EmailStatus"?: "NotSet" | "NeedToSend" | "EmailSent", "PrintStatus"?: "NotSet" | "NeedToPrint" | "PrintComplete", "ShipAddr"?: string, "TxnDate"?: string } | { "TxnDate"?: string } | { "AcctNum"?: string, "Active"?: boolean, "Balance"?: number, "BillAddr"?: { "details": any }, "CompanyName"?: string, "FamilyName"?: string, "GivenName"?: string, "PrimaryEmailAddr"?: string, "PrimaryPhone"?: string, "PrintOnCheckName"?: string, "Vendor1099"?: boolean };

    /**
     * The display name of the customer to create
     */
    readonly displayName?: string;

    /**
     * The ID of the customer to retrieve
     */
    readonly customerId?: string;

    readonly FamilyName?: string;

    readonly GivenName?: string;

    /**
     * The ID of the employee to retrieve
     */
    readonly employeeId?: string;

    /**
     * The ID of the customer who the estimate is for. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getCustomers"}
     */
    readonly CustomerRef?: string;

    /**
     * The ID of the estimate to delete
     */
    readonly estimateId?: string;

    /**
     * Whether to download the estimate as a PDF file
     */
    readonly download?: boolean;

    /**
     * Default: "data"
     */
    readonly binaryProperty?: string;

    /**
     * Name of the file that will be downloaded
     */
    readonly fileName?: string;

    /**
     * The email of the recipient of the estimate
     */
    readonly email?: string;

    /**
     * The ID of the invoice to delete
     */
    readonly invoiceId?: string;

    /**
     * The ID of the item to retrieve
     */
    readonly itemId?: string;

    /**
     * Total amount of the transaction
     */
    readonly TotalAmt?: number;

    /**
     * The ID of the payment to delete
     */
    readonly paymentId?: string;

    /**
     * The ID of the purchase to retrieve
     */
    readonly purchaseId?: string;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;

    /**
     * The ID of the vendor to retrieve
     */
    readonly vendorId?: string;


}

