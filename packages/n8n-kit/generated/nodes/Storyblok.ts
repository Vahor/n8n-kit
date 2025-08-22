// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Storyblok/Storyblok.node.ts' node

export const name = "storyblok" as const;
export const description = "Consume Storyblok API" as const;
export const version = 1 as const;

/**
 * Consume Storyblok API
 */
export interface StoryblokNodeParameters {

    /**
     * Pick where your data comes from, Content or Management API
     * Default: "contentApi"
     */
    readonly source?: "contentApi" | "managementApi";

    /**
     * Default: "story"
     */
    readonly resource?: "story" | "story";

    /**
     * Default: "get"
     */
    readonly operation?: "get" | "getAll" | "delete" | "get" | "getAll" | "publish" | "unpublish";

    /**
     * The ID or slug of the story to get
     */
    readonly identifier?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean | boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number | number;

    /**
     * Default: {}
     */
    readonly filters?: { "starts_with"?: string } | { "starts_with"?: string };

    /**
     * The name of the space. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getSpaces"}
     */
    readonly space?: string | string | string | string | string;

    /**
     * Numeric ID of the story
     */
    readonly storyId?: string | string | string | string;

    /**
     * Default: {}
     */
    readonly options?: { "releaseId"?: string, "language"?: string };


}

