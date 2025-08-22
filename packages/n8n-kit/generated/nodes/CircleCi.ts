// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/CircleCi/CircleCi.node.ts' node

export const name = "circleCi" as const;
export const description = "Consume CircleCI API" as const;
export const version = 1 as const;

/**
 * Consume CircleCI API
 */
export interface CircleCiNodeParameters {

    /**
     * Default: "pipeline"
     */
    readonly resource?: "pipeline";

    /**
     * Default: "get"
     */
    readonly operation?: "get" | "getAll" | "trigger";

    /**
     * Source control system
     */
    readonly vcs?: "bitbucket" | "github";

    /**
     * Project slug in the form org-name/repo-name
     */
    readonly projectSlug?: string;

    /**
     * The number of the pipeline
     * Default: 1
     * Type options: {"minValue":1}
     */
    readonly pipelineNumber?: number;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly filters?: { "branch"?: string };

    /**
     * Default: {}
     */
    readonly additionalFields?: { "branch"?: string, "tag"?: string };


}

