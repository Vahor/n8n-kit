// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Ghost/Ghost.node.ts' node

export const name = "ghost" as const;
export const description = "Consume Ghost API" as const;
export const version = 1 as const;

/**
 * Consume Ghost API
 */
export interface GhostNodeParameters {

    /**
     * Pick where your data comes from, Content or Admin API
     * Default: "contentApi"
     */
    readonly source?: "adminApi" | "contentApi";

    /**
     * Default: "post"
     */
    readonly resource?: "post";

    /**
     * Default: "get"
     */
    readonly operation?: "get" | "getAll" | "create" | "delete" | "get" | "getAll" | "update";

    /**
     * Post's title
     */
    readonly title?: string;

    /**
     * The format of the post
     * Default: "html"
     */
    readonly contentFormat?: "html" | "mobileDoc" | "lexical" | "html" | "mobileDoc" | "lexical";

    /**
     * The content of the post to create
     */
    readonly content?: string | string | string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "authors"?: string[], "canonical_url"?: string, "codeinjection_foot"?: string, "codeinjection_head"?: string, "featured"?: boolean, "meta_description"?: string, "meta_title"?: string, "og_description"?: string, "og_image"?: string, "og_title"?: string, "published_at"?: string, "slug"?: string, "status"?: "draft" | "published" | "scheduled", "tags"?: string[], "twitter_description"?: string, "twitter_image"?: string, "twitter_title"?: string };

    /**
     * The ID of the post to delete
     */
    readonly postId?: string | string;

    /**
     * Get the post either by slug or ID
     * Default: "id"
     */
    readonly by?: "id" | "slug";

    /**
     * The ID or slug of the post to get
     */
    readonly identifier?: string;

    /**
     * Default: {}
     */
    readonly options?: { "fields"?: string, "formats"?: ("html" | "mobiledoc" | "lexical")[] } | { "fields"?: string, "formats"?: ("html" | "plaintext")[] } | { "include"?: ("authors" | "tags")[], "fields"?: string, "formats"?: ("html" | "plaintext" | "lexical")[] } | { "include"?: ("authors" | "tags")[], "fields"?: string, "formats"?: ("html" | "mobiledoc" | "lexical")[] };

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
     * Default: {}
     */
    readonly updateFields?: { "authors"?: string[], "canonical_url"?: string, "codeinjection_foot"?: string, "codeinjection_head"?: string, "content"?: string, "contentJson"?: string | string, "featured"?: boolean, "meta_description"?: string, "meta_title"?: string, "og_description"?: string, "og_image"?: string, "og_title"?: string, "published_at"?: string, "slug"?: string, "status"?: "draft" | "published" | "scheduled", "tags"?: string[], "title"?: string, "twitter_description"?: string, "twitter_image"?: string, "twitter_title"?: string };


}

