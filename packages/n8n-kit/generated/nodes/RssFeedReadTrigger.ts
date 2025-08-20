// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/RssFeedRead/RssFeedReadTrigger.node.js' node

export const name = "rssFeedReadTrigger" as const;
export const description = "Starts a workflow when an RSS feed is updated" as const;
export const version = 1 as const;
export const defaults = {"name":"RSS Feed Trigger","color":"#b02020"} as const;

/**
 * Starts a workflow when an RSS feed is updated
 */
export interface RssFeedReadTriggerNodeParameters {

    /**
     * URL of the RSS feed to poll
     * Default: "https://blog.n8n.io/rss/"
     */
    readonly feedUrl: string;


}

