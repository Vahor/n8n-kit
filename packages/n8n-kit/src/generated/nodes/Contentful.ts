// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Contentful/Contentful.node.ts' node

export const description = "Consume Contentful API" as const;
export const type = "n8n-nodes-base.contentful" as const;
export const version = 1 as const;
export const credentials = [{"name":"contentfulApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface ContentfulNodeParameters {
    /**
     * Pick where your data comes from, delivery or preview API
     * Default: "deliveryApi"
     */
    readonly source?: "deliveryApi" | "previewApi";

    /** Default: "entry" */
    readonly resource?: "asset" | "contentType" | "entry" | "locale" | "space";

    /** Default: "get" */
    readonly operation?: "get" | "get" | "getAll" | "getAll";

    /**
     * The ID for the Contentful environment (e.g. master, staging, etc.). Depending on your plan, you might not have environments. In that case use "master".
     * Default: "master"
     */
    readonly environmentId?: string;

    readonly contentTypeId?: string;

    /** Default: {} */
    readonly additionalFields?: { rawData?: boolean } | { content_type?: string, equal?: string, exclude?: string, exist?: string, select?: string, include?: string, notEqual?: string, order?: string, query?: string, rawData?: boolean } | { equal?: string, exclude?: string, exist?: string, select?: string, include?: string, notEqual?: string, order?: string, query?: string, rawData?: boolean };

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    readonly entryId?: string;

    readonly assetId?: string;

}
