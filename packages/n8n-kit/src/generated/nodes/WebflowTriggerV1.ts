// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Webflow/V1/WebflowTriggerV1.node.ts' node

export const description = "Handle Webflow events via webhooks" as const;
export const type = "n8n-nodes-base.webflowTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"webflowApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}}},{"name":"webflowOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const outputs = {"main":"main"} as const;

export interface WebflowTriggerV1NodeParameters {

    /**
     * Default: "accessToken"
     */
    readonly authentication?: "accessToken" | "oAuth2";

    /**
     * Site that will trigger the events. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getSites"}
     */
    readonly site?: string;

    /**
     * Default: "form_submission"
     */
    readonly event?: "collection_item_created" | "collection_item_deleted" | "collection_item_changed" | "ecomm_inventory_changed" | "ecomm_new_order" | "ecomm_order_changed" | "form_submission" | "site_publish";


}

