// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Webflow/V2/WebflowV2.node.ts' node

export const description = "Consume the Webflow API" as const;
export const type = "n8n-nodes-base.webflow" as const;
export const version = 2 as const;
export const credentials = [{"name":"webflowOAuth2Api","required":true}] as const;
export const outputs = {"main":"main"} as const;

export interface WebflowV2NodeParameters {

    /**
     * Default: "item"
     */
    readonly resource?: "item";

    /**
     * Default: "get"
     */
    readonly operation?: "create" | "deleteItem" | "get" | "getAll" | "update";

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

