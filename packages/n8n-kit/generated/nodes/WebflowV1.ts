// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Webflow/V1/WebflowV1.node.ts' node

export const name = "undefined" as const;
export const description = "Consume the Webflow API" as const;
export const version = 1 as const;
export const defaults = {"name":"Webflow"} as const;
export const credentials = [{"name":"webflowApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}}},{"name":"webflowOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const

/**
 * Consume the Webflow API
 */
export interface WebflowV1NodeParameters {

    /**
     * Default: "accessToken"
     */
    readonly authentication?: "accessToken" | "oAuth2";

    /**
     * Default: "item"
     */
    readonly resource?: "item";

    /**
     * Default: "get"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     * ID of the site containing the collection whose items to add to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getSites"}
     */
    readonly siteId?: string;

    /**
     * ID of the collection to add an item to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getCollections","loadOptionsDependsOn":["siteId"]}
     */
    readonly collectionId?: string;

    /**
     * Whether the item should be published on the live site
     */
    readonly live?: boolean;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly fieldsUi?: { "fieldValues": any };

    /**
     * ID of the item to operate on
     */
    readonly itemId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;


}

