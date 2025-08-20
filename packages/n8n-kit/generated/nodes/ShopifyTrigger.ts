// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Shopify/ShopifyTrigger.node.ts' node

export const name = "shopifyTrigger" as const;
export const description = "Handle Shopify events via webhooks" as const;
export const version = 1 as const;
export const defaults = {"name":"Shopify Trigger"} as const;
export const credentials = [{"name":"shopifyApi","required":true,"displayOptions":{"show":{"authentication":["apiKey"]}}},{"name":"shopifyAccessTokenApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}}},{"name":"shopifyOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const

/**
 * Handle Shopify events via webhooks
 */
export interface ShopifyTriggerNodeParameters {

    /**
     * Default: "apiKey"
     */
    readonly authentication?: "accessToken" | "oAuth2" | "apiKey";

    /**
     */
    readonly topic?: "app/uninstalled" | "carts/create" | "carts/update" | "checkouts/create" | "checkouts/delete" | "checkouts/update" | "collections/create" | "collections/delete" | "collection_listings/add" | "collection_listings/remove" | "collection_listings/update" | "collections/update" | "customers/create" | "customers/delete" | "customers/disable" | "customers/enable" | "customer_groups/create" | "customer_groups/delete" | "customer_groups/update" | "customers/update" | "draft_orders/create" | "draft_orders/delete" | "draft_orders/update" | "fulfillments/create" | "fulfillment_events/create" | "fulfillment_events/delete" | "fulfillments/update" | "inventory_items/create" | "inventory_items/delete" | "inventory_items/update" | "inventory_levels/connect" | "inventory_levels/disconnect" | "inventory_levels/update" | "locales/create" | "locales/update" | "locations/create" | "locations/delete" | "locations/update" | "orders/cancelled" | "orders/create" | "orders/fulfilled" | "orders/paid" | "orders/partially_fulfilled" | "order_transactions/create" | "orders/updated" | "orders/delete" | "products/create" | "products/delete" | "product_listings/add" | "product_listings/remove" | "product_listings/update" | "products/update" | "refunds/create" | "shop/update" | "tender_transactions/create" | "themes/create" | "themes/delete" | "themes/publish" | "themes/update";


}

