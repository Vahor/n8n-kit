// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Shopify/Shopify.node.ts' node

export const description = "Consume Shopify API" as const;
export const type = "n8n-nodes-base.shopify" as const;
export const version = 1 as const;
export const credentials = [{"name":"shopifyApi","required":true,"displayOptions":{"show":{"authentication":["apiKey"]}}},{"name":"shopifyAccessTokenApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}}},{"name":"shopifyOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface ShopifyNodeParameters {
    /** Default: "apiKey" */
    readonly authentication?: "accessToken" | "oAuth2" | "apiKey";

    /** Default: "order" */
    readonly resource?: "order" | "product";

    /** Default: "create" */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /** Default: {} */
    readonly additionalFields?: { "billingAddressUi"?: { "billingAddressValues": any }, "discountCodesUi"?: { "discountCodesValues": any }, "email"?: string, "fulfillmentStatus"?: "fulfilled" | "null" | "partial" | "restocked", "inventoryBehaviour"?: "bypass" | "decrementIgnoringPolicy" | "decrementObeyingPolicy", "locationId"?: string, "note"?: string, "sendFulfillmentReceipt"?: boolean, "sendReceipt"?: boolean, "shippingAddressUi"?: { "shippingAddressValues": any }, "sourceName"?: string, "tags"?: string, "test"?: boolean } | { "body_html"?: string, "handle"?: string, "images"?: { "created_at"?: string, "id"?: number, "position"?: number, "product_id"?: number, "variant_ids"?: number, "src"?: string, "width"?: number, "height"?: number, "updated_at"?: string }, "productOptions"?: { "option": any }, "product_type"?: string, "published_at"?: string, "published_scope"?: "global" | "web", "tags"?: string, "template_suffix"?: string, "vendor"?: string } | { "fields"?: string } | { "collection_id"?: string, "created_at_max"?: string, "created_at_min"?: string, "fields"?: string, "handle"?: string, "ids"?: string, "presentment_currencies"?: string, "product_type"?: string, "published_at_max"?: string, "published_at_min"?: string, "published_status"?: "any" | "published" | "unpublished", "title"?: string, "updated_at_max"?: string, "updated_at_min"?: string, "vendor"?: string };

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly limeItemsUi?: { "lineItemValues": any };

    readonly orderId?: string;

    /** Default: {} */
    readonly options?: { "fields"?: string } | { "attributionAppId"?: string, "createdAtMin"?: string, "createdAtMax"?: string, "financialStatus"?: "any" | "authorized" | "paid" | "partiallyPaid" | "partiallyRefunded" | "pending" | "refunded" | "unpaid" | "voided", "fulfillmentStatus"?: "any" | "partial" | "shipped" | "unfulfilled" | "unshipped", "fields"?: string, "ids"?: string, "processedAtMax"?: string, "processedAtMin"?: string, "status"?: "any" | "Cancelled" | "closed" | "open", "sinceId"?: string, "updatedAtMax"?: string, "updatedAtMin"?: string };

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":250}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly updateFields?: { "email"?: string, "locationId"?: string, "note"?: string, "shippingAddressUi"?: { "shippingAddressValues": any }, "sourceName"?: string, "tags"?: string } | { "body_html"?: string, "handle"?: string, "images"?: { "created_at"?: string, "id"?: number, "position"?: number, "product_id"?: number, "variant_ids"?: number, "src"?: string, "width"?: number, "height"?: number, "updated_at"?: string }, "productOptions"?: { "option": any }, "product_type"?: string, "published_at"?: string, "published_scope"?: "global" | "web", "tags"?: string, "template_suffix"?: string, "title"?: string, "vendor"?: string };

    /** The name of the product */
    readonly title?: string;

    readonly productId?: string;

}
