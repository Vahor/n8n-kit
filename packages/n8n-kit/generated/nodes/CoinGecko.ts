// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/CoinGecko/CoinGecko.node.ts' node

export const name = "coinGecko" as const;
export const description = "Consume CoinGecko API" as const;
export const version = 1 as const;
export const defaults = {"name":"CoinGecko"} as const;
export const credentials = undefined 

/**
 * Consume CoinGecko API
 */
export interface CoinGeckoNodeParameters {

    /**
     * Default: "coin"
     */
    readonly resource?: "coin" | "event";


}

