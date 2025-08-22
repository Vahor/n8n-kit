// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Twitter/V1/TwitterV1.node.ts' node

export const name = "undefined" as const;
export const description = "Consume Twitter API" as const;
export const version = 1 as const;

/**
 * Consume Twitter API
 */
export interface TwitterV1NodeParameters {

    /**
     * Default: "tweet"
     */
    readonly resource?: "directMessage" | "tweet";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "create" | "delete" | "like" | "retweet" | "search";

    /**
     * The ID of the user who should receive the direct message
     */
    readonly userId?: string;

    /**
     * The text of your Direct Message. URL encode as necessary. Max length of 10,000 characters.
     */
    readonly text?: string | string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "attachment"?: string } | { "attachments"?: string, "displayCoordinates"?: boolean, "inReplyToStatusId"?: string, "locationFieldsUi"?: { "locationFieldsValues": any }, "possiblySensitive"?: boolean } | { "includeEntities"?: boolean, "lang"?: string, "locationFieldsUi"?: { "locationFieldsValues": any }, "resultType"?: "mixed" | "recent" | "popular", "tweetMode"?: "compat" | "extended", "until"?: string } | { "includeEntities"?: boolean } | { "trimUser"?: boolean };

    /**
     * The ID of the tweet to delete
     */
    readonly tweetId?: string | string | string;

    /**
     * A UTF-8, URL-encoded search query of 500 characters maximum, including operators. Queries may additionally be limited by complexity. Check the searching examples <a href="https://developer.twitter.com/en/docs/tweets/search/guides/standard-operators">here</a>.
     */
    readonly searchText?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly limit?: number;


}

