// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Disqus/Disqus.node.ts' node

export const description = "Access data on Disqus" as const;
export const type = "n8n-nodes-base.disqus" as const;
export const version = 1 as const;
export const credentials = [{"name":"disqusApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface DisqusNodeParameters {
    /** Default: "forum" */
    readonly resource?: "forum";

    /** Default: "get" */
    readonly operation?: "get" | "getCategories" | "getThreads" | "getPosts";

    /** The short name(aka ID) of the forum to get */
    readonly id?: string;

    /** Default: {} */
    readonly additionalFields?: { attach?: ("counters" | "followsForum" | "forumCanDisableAds" | "forumDaysAlive" | "forumFeatures" | "forumForumCategory" | "forumIntegration" | "forumNewPolicy" | "forumPermissions")[], related?: ("author")[] } | { filters?: ("Has_Bad_Word" | "Has_Link" | "Has_Low_Rep_Author" | "Has_Media" | "Is_Anonymous" | "Is_At_Flag_Limit" | "Is_Flagged" | "Is_Toxic" | "Modified_By_Rule" | "No_Issue" | "Shadow_Banned")[], include?: ("approved")[], order?: "asc" | "desc", query?: string, related?: ("thread")[], since?: string } | { order?: "asc" | "desc" } | { related?: ("author" | "forum")[], include?: ("closed" | "open" | "killed")[], order?: "asc" | "desc", since?: string, thread?: string };

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

}
