// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Twitter/V2/TwitterV2.node.ts' node

export const description = "Post, like, and search tweets, send messages, search users, and add users to lists" as const;
export const type = "n8n-nodes-base.twitter" as const;
export const version = 2 as const;
export const credentials = [{"name":"twitterOAuth2Api","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface TwitterV2NodeParameters {
    /** Default: "tweet" */
    readonly resource?: "directMessage" | "list" | "tweet" | "user";

    /** Default: "create" */
    readonly operation?: "create" | "add" | "create" | "delete" | "like" | "retweet" | "search" | "searchUser";

    /**
     * The user you want to send the message to
     * Default: {"mode":"username","value":""}
     */
    readonly user?: {
	value: string,
	mode: "username" | "id",
};

    /**
     * The text of the direct message. URL encoding is required. Max length of 10,000 characters.
     * Type options: {"rows":2}
     */
    readonly text?: string;

    /** Default: {} */
    readonly additionalFields?: { attachments?: string } | { location?: string, attachments?: string, inQuoteToStatusId?: {
	value: string,
	mode: "id" | "url",
}, inReplyToStatusId?: {
	value: string,
	mode: "id" | "url",
} } | { sortOrder?: "recency" | "relevancy", startTime?: string, endTime?: string, tweetFieldsObject?: ("attachments" | "author_id" | "context_annotations" | "conversation_id" | "created_at" | "edit_controls" | "entities" | "geo" | "id" | "in_reply_to_user_id" | "lang" | "non_public_metrics" | "public_metrics" | "organic_metrics" | "promoted_metrics" | "possibly_sensitive" | "referenced_tweets" | "reply_settings" | "source" | "text" | "withheld")[] };

    /**
     * The list you want to add the user to
     * Default: {"mode":"id","value":""}
     */
    readonly list?: {
	value: string,
	mode: "id" | "url",
};

    /**
     * The tweet to delete
     * Default: {"mode":"id","value":""}
     */
    readonly tweetDeleteId?: {
	value: string,
	mode: "id" | "url",
};

    /**
     * The tweet to like
     * Default: {"mode":"id","value":""}
     */
    readonly tweetId?: {
	value: string,
	mode: "id" | "url",
};

    /** A UTF-8, URL-encoded search query of 500 characters maximum, including operators. Queries may additionally be limited by complexity. Check the searching examples <a href="https://developer.twitter.com/en/docs/tweets/search/guides/standard-operators">here</a>. */
    readonly searchText?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /** Whether you want to search the authenticated user */
    readonly me?: boolean;

}
