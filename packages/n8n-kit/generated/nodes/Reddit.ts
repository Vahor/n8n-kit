// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Reddit/Reddit.node.js' node

export const name = "reddit" as const;
export const description = "Consume the Reddit API" as const;
export const version = 1 as const;
export const defaults = {"name":"Reddit"} as const;
export const credentials = [{"name":"redditOAuth2Api","required":true,"displayOptions":{"show":{"resource":["postComment","post","profile"]}}}] as const

/**
 * Consume the Reddit API
 */
export interface RedditNodeParameters {

    /**
     * Default: "post"
     */
    readonly resource?: "post" | "postComment" | "profile" | "subreddit" | "user";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "getAll" | "delete" | "reply" | "get" | "search";

    /**
     * ID of the post to write the comment to. Found in the post URL: <code>/r/[subreddit_name]/comments/[post_id]/[post_title]</code>
     */
    readonly postId?: string;

    /**
     * Text of the comment. Markdown supported.
     */
    readonly commentText?: string;

    /**
     * The name of subreddit where the post is
     */
    readonly subreddit?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /**
     * ID of the comment to remove. Found in the comment URL:<code>/r/[subreddit_name]/comments/[post_id]/[post_title]/[comment_id]</code>
     */
    readonly commentId?: string;

    /**
     * Text of the reply. Markdown supported.
     */
    readonly replyText?: string;

    /**
     * Details of my account to retrieve
     * Default: "identity"
     */
    readonly details?: "blockedUsers" | "friends" | "identity" | "karma" | "prefs" | "saved" | "trophies" | "about" | "comments" | "gilded" | "overview" | "submitted";

    /**
     * Subreddit content to retrieve
     * Default: "about"
     */
    readonly content?: "about" | "rules";

    /**
     * Default: {}
     */
    readonly filters?: { "keyword"?: string, "trending"?: boolean, "category"?: "top" | "hot" | "new" | "rising" };

    /**
     * The kind of the post to create
     * Default: "self"
     */
    readonly kind?: "self" | "link" | "image";

    /**
     * Title of the post, up to 300 characters long
     */
    readonly title?: string;

    /**
     * URL of the post
     */
    readonly url?: string;

    /**
     * Text of the post. Markdown supported.
     */
    readonly text?: string;

    /**
     * Whether the URL will be posted even if it was already posted to the subreddit before. Otherwise, the re-posting will trigger an error.
     */
    readonly resubmit?: boolean;

    /**
     * Location where to search for posts
     * Default: "subreddit"
     */
    readonly location?: "allReddit" | "subreddit";

    /**
     * The keyword for the search
     */
    readonly keyword?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "sort"?: "comments" | "hot" | "new" | "relevance" | "top" };

    /**
     * Reddit ID of the user to retrieve
     */
    readonly username?: string;


}

