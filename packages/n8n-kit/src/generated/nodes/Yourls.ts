// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Yourls/Yourls.node.ts' node

export const name = "yourls" as const;
export const description = "Consume Yourls API" as const;
export const version = 1 as const;
export const credentials = [{"name":"yourlsApi","required":true}] as const;

/**
 * Consume Yourls API
 */
export interface YourlsNodeParameters {

    /**
     * Default: "url"
     */
    readonly resource?: "url";

    /**
     * Default: "shorten"
     */
    readonly operation?: "expand" | "shorten" | "stats";

    /**
     * The URL to shorten
     */
    readonly url?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "keyword"?: string, "title"?: string };

    /**
     * The short URL to expand
     */
    readonly shortUrl?: string;


}

