// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Wise/Wise.node.ts' node

export const name = "wise" as const;
export const description = "Consume the Wise API" as const;
export const version = 1 as const;
export const credentials = [{"name":"wiseApi","required":true}] as const;

/**
 * Consume the Wise API
 */
export interface WiseNodeParameters {

    /**
     * Default: "account"
     */
    readonly resource?: "account" | "exchangeRate" | "profile" | "quote" | "recipient" | "transfer";

    /**
     * Default: "getBalances"
     */
    readonly operation?: "getBalances" | "getCurrencies" | "getStatement" | "get" | "get" | "getAll" | "create" | "get" | "getAll" | "create" | "delete" | "execute" | "get" | "getAll";

    /**
     * ID of the user profile to retrieve the balance of. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getProfiles"}
     */
    readonly profileId?: string;

    /**
     * ID of the borderless account to retrieve the statement of. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getBorderlessAccounts","loadOptionsDependsOn":["profileId"]}
     */
    readonly borderlessAccountId?: string;

    /**
     * Code of the currency of the borderless account to retrieve the statement of
     */
    readonly currency?: string;

    /**
     * File format to retrieve the statement in
     * Default: "json"
     */
    readonly format?: "json" | "csv" | "pdf" | "xml";

    /**
     * Default: "data"
     */
    readonly binaryProperty?: string;

    /**
     * Name of the file that will be downloaded
     */
    readonly fileName?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "lineStyle"?: "COMPACT" | "FLAT", "range"?: { "rangeProperties": any } } | { "interval"?: "day" | "hour" | "minute", "range"?: { "rangeProperties": any }, "time"?: string } | { "reference"?: string };

    /**
     * Code of the source currency to retrieve the exchange rate for
     */
    readonly source?: string;

    /**
     * Code of the target currency to retrieve the exchange rate for
     */
    readonly target?: string;

    /**
     * ID of the account that will receive the funds. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getRecipients"}
     */
    readonly targetAccountId?: string;

    /**
     * Whether the amount is to be sent or received
     * Default: "source"
     */
    readonly amountType?: "source" | "target";

    /**
     * Amount of funds for the quote to create
     * Default: 1
     * Type options: {"minValue":1}
     */
    readonly amount?: number;

    /**
     * Code of the currency to send for the quote to create
     */
    readonly sourceCurrency?: string;

    /**
     * Code of the currency to receive for the quote to create
     */
    readonly targetCurrency?: string;

    /**
     * ID of the quote to retrieve
     */
    readonly quoteId?: string;

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
     * ID of the transfer to delete
     */
    readonly transferId?: string;

    /**
     * Whether to download the transfer receipt as a PDF file. Only for executed transfers, having status 'Outgoing Payment Sent'.
     */
    readonly downloadReceipt?: boolean;

    /**
     * Default: {}
     */
    readonly filters?: { "range"?: { "rangeProperties": any }, "sourceCurrency"?: string, "status"?: "bounced_back" | "cancelled" | "charged_back" | "funds_converted" | "funds_refunded" | "incoming_payment_waiting" | "outgoing_payment_sent" | "processing" | "unknown" | "waiting_recipient_input_to_proceed", "targetCurrency"?: string };


}

