// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Storyblok/Storyblok.node.ts' node

export const description = "Consume Storyblok API" as const;
export const type = "n8n-nodes-base.storyblok" as const;
export const version = 1 as const;
export const credentials = [{"name":"storyblokContentApi","required":true,"displayOptions":{"show":{"source":["contentApi"]}}},{"name":"storyblokManagementApi","required":true,"displayOptions":{"show":{"source":["managementApi"]}}}] as const;

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
    readonly resource?: "story";

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
    readonly filters?: { "starts_with"?: string };

    /**
     * The name of the space. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getSpaces"}
     */
    readonly space?: string;

    /**
     * Numeric ID of the story
     */
    readonly storyId?: string;

    /**
     * Default: {}
     */
    readonly options?: { "releaseId"?: string, "language"?: string };


}

