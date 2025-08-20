// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Contentful/Contentful.node.ts' node

export const name = "contentful" as const;
export const description = "Consume Contentful API" as const;
export const version = 1 as const;
export const defaults = {"name":"Contentful"} as const;
export const credentials = [{"name":"contentfulApi","required":true}] as const

/**
 * Consume Contentful API
 */
export interface ContentfulNodeParameters {

    /**
     * Pick where your data comes from, delivery or preview API
     * Default: "deliveryApi"
     */
    readonly source?: "deliveryApi" | "previewApi";

    /**
     * Default: "entry"
     */
    readonly resource?: "asset" | "contentType" | "entry" | "locale" | "space";

    /**
     * Default: "get"
     */
    readonly operation?: "get" | "getAll";

    /**
     * The ID for the Contentful environment (e.g. master, staging, etc.). Depending on your plan, you might not have environments. In that case use "master".
     * Default: "master"
     */
    readonly environmentId?: string;

    /**
     */
    readonly contentTypeId?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "rawData"?: boolean, "content_type"?: string, "equal"?: string, "exclude"?: string, "exist"?: string, "select"?: string, "include"?: string, "notEqual"?: string, "order"?: string, "query"?: string };

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
     */
    readonly entryId?: string;

    /**
     */
    readonly assetId?: string;


}

