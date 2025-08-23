// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/RssFeedRead/RssFeedReadTrigger.node.ts' node

export const description = "Starts a workflow when an RSS feed is updated" as const;
export const type = "n8n-nodes-base.rssFeedReadTrigger" as const;
export const version = 1 as const;
export const outputs = {"main":"main"} as const;

export interface RssFeedReadTriggerNodeParameters {

    /**
     * URL of the RSS feed to poll
     * Default: "https://blog.n8n.io/rss/"
     */
    readonly feedUrl?: string;

    readonly pollTimes: { item: { mode: "everyMinute" | (string & {}) }[] };

}

