// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Brandfetch/v2/BrandfetchV2.node.ts' node

export const description = "Consume Brandfetch API" as const;
export const type = "n8n-nodes-base.Brandfetch" as const;
export const version = 2 as const;
export const credentials = [{"name":"brandfetchApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface BrandfetchV2NodeParameters {
    /** Default: "data" */
    readonly operation?: "logo" | "colors" | "data" | "context";

    /**
     * The type of identifier used to look up the brand
     * Default: "domain"
     */
    readonly type?: "domain" | "ticker" | "crypto" | "isin";

    /** The identifier of the brand. Format depends on the selected Type (e.g. apple.com, AAPL, BTC, US0378331005). */
    readonly identifier?: string;

    /** The domain name of the brand to get context for */
    readonly domain?: string;

    /**
     * The format the brand context is returned in
     * Default: "json"
     */
    readonly outputFormat?: "json" | "markdown";

    /** Whether to return the brand context only if one is already cached, responding instantly without crawling the domain. Returns an empty item if no cached context exists. */
    readonly cachedOnly?: boolean;

    /** Whether to download all logo files as binary data */
    readonly download?: boolean;

}
