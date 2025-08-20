// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Discourse/Discourse.node.ts' node

export const name = "discourse" as const;
export const description = "Consume Discourse API" as const;
export const version = 1 as const;
export const defaults = {"name":"Discourse"} as const;
export const credentials = [{"name":"discourseApi","required":true}] as const

/**
 * Consume Discourse API
 */
export interface DiscourseNodeParameters {

    /**
     * Default: "post"
     */
    readonly resource?: "category" | "group" | "post" | "user" | "userGroup";

    /**
     * Choose an operation
     * Default: "create"
     */
    readonly operation?: "create" | "getAll" | "update" | "get" | "add" | "remove";

    /**
     * Name of the category
     */
    readonly name?: string;

    /**
     * Color of the category
     * Default: "0000FF"
     */
    readonly color?: any;

    /**
     * Text color of the category
     * Default: "0000FF"
     */
    readonly textColor?: any;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /**
     * ID of the category
     */
    readonly categoryId?: string;

    /**
     * Default: {}
     */
    readonly updateFields?: { "color"?: any, "textColor"?: any, "edit_reason"?: string, "cooked"?: boolean };

    /**
     * ID of the group to update
     */
    readonly groupId?: string;

    /**
     * Title of the post
     */
    readonly title?: string;

    /**
     * Content of the post
     */
    readonly content?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "category"?: string, "reply_to_post_number"?: string, "topic_id"?: string, "active"?: boolean, "approved"?: boolean };

    /**
     * ID of the post
     */
    readonly postId?: string;

    /**
     * Email of the user to create
     */
    readonly email?: string;

    /**
     * The username of the user to create
     */
    readonly username?: string;

    /**
     * The password of the user to create
     * Type options: {"password":true}
     */
    readonly password?: string;

    /**
     * What to search by
     * Default: "username"
     */
    readonly by?: "username" | "externalId";

    /**
     * Discourse SSO external ID
     */
    readonly externalId?: string;

    /**
     * User flags to search for
     */
    readonly flag?: "active" | "blocked" | "new" | "staff" | "suspect" | "suspended";

    /**
     * Default: {}
     */
    readonly options?: { "asc"?: boolean, "order"?: "created" | "days_visited" | "email" | "last_emailed" | "posts" | "posts_read" | "read_time" | "seen" | "topics_viewed" | "trust_level" | "username", "showEmails"?: boolean, "stats"?: boolean };

    /**
     * Usernames to add to group. Multiples can be defined separated by comma.
     */
    readonly usernames?: string;


}

