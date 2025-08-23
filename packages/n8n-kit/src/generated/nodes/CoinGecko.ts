// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/CoinGecko/CoinGecko.node.ts' node

export const description = "Consume CoinGecko API" as const;
export const type = "n8n-nodes-base.coinGecko" as const;
export const version = 1 as const;

/**
 * Consume CoinGecko API
 */
export interface CoinGeckoNodeParameters {

    /**
     * Default: "coin"
     */
    readonly resource?: "coin" | "event";

    /**
     * Default: "getAll"
     */
    readonly operation?: "candlestick" | "get" | "getAll" | "history" | "market" | "marketChart" | "price" | "ticker" | "getAll";

    /**
     * Search by coin ID or contract address
     * Default: "coinId"
     */
    readonly searchBy?: "coinId" | "contractAddress";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getCoins"}
     */
    readonly coinId?: string;

    /**
     * The first currency in the pair. For BTC:ETH this is BTC. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getCoins"}
     */
    readonly baseCurrency?: string;

    /**
     * The first currency in the pair. For BTC:ETH this is BTC. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getCoins"}
     */
    readonly baseCurrencies?: any[];

    /**
     * The ID of the platform issuing tokens
     * Default: "ethereum"
     */
    readonly platformId?: "ethereum";

    /**
     * Token's contract address
     */
    readonly contractAddress?: string;

    /**
     * The contract address of tokens, comma-separated
     */
    readonly contractAddresses?: string;

    /**
     * The second currency in the pair. For BTC:ETH this is ETH. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getCurrencies"}
     */
    readonly quoteCurrency?: string;

    /**
     * The second currency in the pair. For BTC:ETH this is ETH. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getCurrencies"}
     */
    readonly quoteCurrencies?: any[];

    /**
     * Return data for this many days in the past from now
     */
    readonly days?: "1" | "7" | "14" | "30" | "90" | "180" | "365" | "max";

    /**
     * The date of data snapshot
     */
    readonly date?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly options?: { "ids"?: string, "category"?: "decentralized_finance_defi", "order"?: "gecko_asc" | "gecko_desc" | "id_asc" | "id_desc" | "market_cap_asc" | "market_cap_desc" | "volume_asc" | "volume_desc", "sparkline"?: boolean, "price_change_percentage"?: ("1h" | "24h" | "7d" | "14d" | "30d" | "200d" | "1y")[] } | { "include_24hr_change"?: boolean, "include_24hr_vol"?: boolean, "include_last_updated_at"?: boolean, "include_market_cap"?: boolean } | { "exchange_ids"?: any[], "include_exchange_logo"?: boolean, "order"?: "trust_score_desc" | "trust_score_asc" | "volume_desc" } | { "localization"?: boolean } | { "community_data"?: boolean, "developer_data"?: boolean, "localization"?: boolean, "market_data"?: boolean, "sparkline"?: boolean, "tickers"?: boolean } | { "country_code"?: string, "from_date"?: string, "to_date"?: string, "type"?: string, "upcoming_events_only"?: boolean };


}

