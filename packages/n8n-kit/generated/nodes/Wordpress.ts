// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Wordpress/Wordpress.node.ts' node

export const name = "wordpress" as const;
export const description = "Consume Wordpress API" as const;
export const version = 1 as const;

/**
 * Consume Wordpress API
 */
export interface WordpressNodeParameters {

    /**
     * Default: "post"
     */
    readonly resource?: "post" | "page" | "user";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "get" | "getAll" | "update";

    /**
     * The title for the post
     */
    readonly title?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "authorId"?: string, "content"?: string, "slug"?: string, "password"?: string, "status"?: "draft" | "future" | "pending" | "private" | "publish", "date"?: string, "commentStatus"?: "open" | "closed", "pingStatus"?: "open" | "closed", "format"?: "aside" | "audio" | "chat" | "gallery" | "image" | "link" | "quote" | "standard" | "status" | "video", "sticky"?: boolean, "categories"?: string[], "tags"?: string[], "postTemplate"?: { "values": any } } | { "authorId"?: string, "parent"?: number, "content"?: string, "slug"?: string, "password"?: string, "status"?: "draft" | "future" | "pending" | "private" | "publish", "commentStatus"?: "open" | "closed", "pingStatus"?: "open" | "closed", "pageTemplate"?: { "values": any }, "menuOrder"?: number, "featuredMediaId"?: number } | { "url"?: string, "description"?: string, "nickname"?: string, "slug"?: string };

    /**
     * Unique identifier for the object
     */
    readonly postId?: string;

    /**
     * Default: {}
     */
    readonly updateFields?: { "authorId"?: string, "title"?: string, "content"?: string, "slug"?: string, "password"?: string, "status"?: "draft" | "future" | "pending" | "private" | "publish", "date"?: string, "commentStatus"?: "open" | "closed", "pingStatus"?: "open" | "closed", "format"?: "aside" | "audio" | "chat" | "gallery" | "image" | "link" | "quote" | "standard" | "status" | "video", "sticky"?: boolean, "categories"?: string[], "tags"?: string[], "postTemplate"?: { "values": any } } | { "authorId"?: string, "parent"?: number, "title"?: string, "content"?: string, "slug"?: string, "password"?: string, "status"?: "draft" | "future" | "pending" | "private" | "publish", "commentStatus"?: "open" | "closed", "pingStatus"?: "open" | "closed", "pageTemplate"?: { "values": any }, "menuOrder"?: number, "featuredMediaId"?: number } | { "username"?: string, "name"?: string, "firstName"?: string, "lastName"?: string, "email"?: string, "password"?: string, "url"?: string, "description"?: string, "nickname"?: string, "slug"?: string };

    /**
     * Default: {}
     */
    readonly options?: { "password"?: string, "context"?: "view" | "embed" | "edit" } | { "after"?: string, "author"?: string[], "before"?: string, "categories"?: string[], "context"?: "view" | "embed" | "edit", "excludedCategories"?: string[], "excludedTags"?: string[], "order"?: "asc" | "desc", "orderBy"?: "author" | "date" | "id" | "include" | "include_slugs" | "modified" | "parent" | "relevance" | "slug" | "title", "search"?: string, "status"?: "draft" | "future" | "pending" | "private" | "publish", "sticky"?: boolean, "tags"?: string[] } | { "force"?: boolean } | { "after"?: string, "author"?: string[], "before"?: string, "context"?: "view" | "embed" | "edit", "menuOrder"?: number, "order"?: "asc" | "desc", "orderBy"?: "author" | "date" | "id" | "include" | "include_slugs" | "modified" | "parent" | "relevance" | "slug" | "title", "page"?: number, "parent"?: number, "search"?: string, "status"?: "draft" | "future" | "pending" | "private" | "publish" } | { "context"?: "view" | "embed" | "edit" } | { "context"?: "view" | "embed" | "edit", "orderBy"?: "email" | "id" | "include" | "include_slugs" | "name" | "registered_date" | "slug" | "url", "order"?: "asc" | "desc", "search"?: string, "who"?: "authors" };

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 5
     * Type options: {"minValue":1,"maxValue":10}
     */
    readonly limit?: number;

    /**
     * Unique identifier for the object
     */
    readonly pageId?: string;

    /**
     * Login name for the user
     */
    readonly username?: string;

    /**
     * Display name for the user
     */
    readonly name?: string;

    /**
     * First name for the user
     */
    readonly firstName?: string;

    /**
     * Last name for the user
     */
    readonly lastName?: string;

    /**
     * The email address for the user
     */
    readonly email?: string;

    /**
     * Password for the user (never included)
     * Type options: {"password":true}
     */
    readonly password?: string;

    /**
     * Unique identifier for the user
     */
    readonly userId?: string;

    /**
     * Reassign the deleted user's posts and links to this user ID
     */
    readonly reassign?: string;


}

