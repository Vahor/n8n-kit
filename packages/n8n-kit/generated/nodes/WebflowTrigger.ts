// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Webflow/WebflowTrigger.node.js' node

export const name = "webflowTrigger" as const;
export const description = "Handle Webflow events via webhooks" as const;
export const version = 1 as const;
export const defaults = {"name":"Webflow Trigger"} as const;
export const credentials = [{"name":"webflowApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}}},{"name":"webflowOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const

/**
 * Handle Webflow events via webhooks
 */
export interface WebflowTriggerNodeParameters {

    /**
     * Default: "accessToken"
     */
    readonly authentication?: "accessToken" | "oAuth2";

    /**
     * Site that will trigger the events. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getSites"}
     */
    readonly site: string;

    /**
     * Default: "form_submission"
     */
    readonly event: "collection_item_created" | "collection_item_deleted" | "collection_item_changed" | "ecomm_inventory_changed" | "ecomm_new_order" | "ecomm_order_changed" | "form_submission" | "site_publish";


}

