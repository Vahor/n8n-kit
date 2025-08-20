// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Strapi/Strapi.node.js' node

export const name = "strapi" as const;
export const description = "Consume Strapi API" as const;
export const version = 1 as const;
export const defaults = {"name":"Strapi"} as const;
export const credentials = [{"name":"strapiApi","required":true,"testedBy":"strapiApiTest","displayOptions":{"show":{"authentication":["password"]}}},{"name":"strapiTokenApi","required":true,"displayOptions":{"show":{"authentication":["token"]}}}] as const

/**
 * Consume Strapi API
 */
export interface StrapiNodeParameters {

    /**
     * Default: "password"
     */
    readonly authentication?: "password" | "token";

    /**
     * Default: "entry"
     */
    readonly resource?: "entry";

    /**
     * Default: "get"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     * Name of the content type
     */
    readonly contentType?: string;

    /**
     * Comma-separated list of the properties which should used as columns for the new rows
     */
    readonly columns?: string;

    /**
     * The ID of the entry to delete
     */
    readonly entryId?: string;

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
    readonly options?: { "publicationState"?: "live" | "preview", "sort"?: string, "where"?: string };

    /**
     * Name of the property which decides which rows in the database should be updated. Normally that would be "id".
     * Default: "id"
     */
    readonly updateKey?: string;


}

