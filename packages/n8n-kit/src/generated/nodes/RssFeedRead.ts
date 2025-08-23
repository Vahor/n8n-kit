// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/RssFeedRead/RssFeedRead.node.ts' node

export const description = "Reads data from an RSS Feed" as const;
export const type = "n8n-nodes-base.rssFeedRead" as const;
export const version = 1.2 as const;

/**
 * Reads data from an RSS Feed
 */
export interface RssFeedReadNodeParameters {

    /**
     * URL of the RSS feed
     */
    readonly url?: string;

    /**
     * Default: {}
     */
    readonly options?: { "customFields"?: string, "ignoreSSL"?: boolean };


}

