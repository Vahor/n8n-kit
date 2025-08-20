// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/RssFeedRead/RssFeedRead.node.js' node

export const name = "rssFeedRead" as const;
export const description = "Reads data from an RSS Feed" as const;
export const version = 1 as const;
export const defaults = {"name":"RSS Read","color":"#b02020"} as const;

/**
 * Reads data from an RSS Feed
 */
export interface RssFeedReadNodeParameters {

    /**
     * URL of the RSS feed
     */
    readonly url: string;

    /**
     * Default: {}
     */
    readonly options?: { "ignoreSSL"?: boolean };


}

