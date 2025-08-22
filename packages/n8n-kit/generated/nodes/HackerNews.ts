// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/HackerNews/HackerNews.node.ts' node

export const name = "hackerNews" as const;
export const description = "Consume Hacker News API" as const;
export const version = 1 as const;

/**
 * Consume Hacker News API
 */
export interface HackerNewsNodeParameters {

    /**
     * Default: "article"
     */
    readonly resource?: "all" | "article" | "user";

    /**
     * Default: "getAll"
     */
    readonly operation?: "getAll" | "get" | "get";

    /**
     * The ID of the Hacker News article to be returned
     */
    readonly articleId?: string;

    /**
     * The Hacker News user to be returned
     */
    readonly username?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "includeComments"?: boolean } | { "keyword"?: string, "tags"?: ("ask_hn" | "comment" | "front_page" | "poll" | "show_hn" | "story")[] };


}

