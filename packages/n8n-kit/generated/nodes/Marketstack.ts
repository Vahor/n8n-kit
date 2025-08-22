// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Marketstack/Marketstack.node.ts' node

export const name = "marketstack" as const;
export const description = "Consume Marketstack API" as const;
export const version = 1 as const;

/**
 * Consume Marketstack API
 */
export interface MarketstackNodeParameters {

    /**
     * Default: "endOfDayData"
     */
    readonly resource: "endOfDayData" | "exchange" | "ticker";

    /**
     * Default: "getAll"
     */
    readonly operation?: "getAll" | "get" | "get";

    /**
     * One or multiple comma-separated stock symbols (tickers) to retrieve, e.g. <code>AAPL</code> or <code>AAPL,MSFT</code>
     */
    readonly symbols?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly filters?: { "exchange"?: string, "latest"?: boolean, "sort"?: "ASC" | "DESC", "specificDate"?: string, "dateFrom"?: string, "dateTo"?: string };

    /**
     * Stock exchange to retrieve, specified by <a href="https://en.wikipedia.org/wiki/Market_Identifier_Code">Market Identifier Code</a>, e.g. <code>XNAS</code>
     */
    readonly exchange?: string;

    /**
     * Stock symbol (ticker) to retrieve, e.g. <code>AAPL</code>
     */
    readonly symbol?: string;


}

