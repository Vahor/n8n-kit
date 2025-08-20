// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Raindrop/Raindrop.node.js' node

export const name = "raindrop" as const;
export const description = "Consume the Raindrop API" as const;
export const version = 1 as const;
export const defaults = {"name":"Raindrop"} as const;
export const credentials = [{"name":"raindropOAuth2Api","required":true}] as const

/**
 * Consume the Raindrop API
 */
export interface RaindropNodeParameters {

    /**
     * Default: "collection"
     */
    readonly resource?: "bookmark" | "collection" | "tag" | "user";

    /**
     * Default: "get"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getCollections"}
     */
    readonly collectionId?: string;

    /**
     * Link of the bookmark to be created
     */
    readonly link?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "important"?: boolean, "order"?: number, "pleaseParse"?: boolean, "tags"?: string, "title"?: string, "cover"?: string, "public"?: boolean, "parentId"?: string, "sort"?: number, "view"?: "list" | "simple" | "grid" | "Masonry", "collectionId"?: string };

    /**
     * The ID of the bookmark to delete
     */
    readonly bookmarkId?: string;

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
     * Default: {}
     */
    readonly updateFields?: { "collectionId"?: string, "important"?: boolean, "order"?: number, "pleaseParse"?: boolean, "tags"?: string, "title"?: string, "cover"?: string, "public"?: boolean, "parentId"?: string, "sort"?: number, "view"?: "list" | "simple" | "grid" | "Masonry" };

    /**
     * Title of the collection to create
     */
    readonly title?: string;

    /**
     * Default: "parent"
     */
    readonly type?: "parent" | "children";

    /**
     * One or more tags to delete. Enter comma-separated values to delete multiple tags.
     */
    readonly tags?: string;

    /**
     * Default: {}
     */
    readonly filters?: { "collectionId"?: string };

    /**
     * Whether to return details on the logged-in user
     * Default: true
     */
    readonly self?: boolean;

    /**
     * The ID of the user to retrieve
     */
    readonly userId?: string;


}

