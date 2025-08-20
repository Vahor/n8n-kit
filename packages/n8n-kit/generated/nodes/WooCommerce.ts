// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/WooCommerce/WooCommerce.node.js' node

export const name = "wooCommerce" as const;
export const description = "Consume WooCommerce API" as const;
export const version = 1 as const;
export const defaults = {"name":"WooCommerce"} as const;
export const credentials = [{"name":"wooCommerceApi","required":true}] as const

/**
 * Consume WooCommerce API
 */
export interface WooCommerceNodeParameters {

    /**
     * Default: "product"
     */
    readonly resource?: "customer" | "order" | "product";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     */
    readonly email?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "billing"?: { "first_name"?: string, "last_name"?: string, "company"?: string, "address_1"?: string, "address_2"?: string, "city"?: string, "state"?: string, "postcode"?: string, "country"?: string, "email"?: string, "phone"?: string }, "first_name"?: string, "last_name"?: string, "meta_data"?: { "meta_data_fields": any }, "password"?: string, "shipping"?: { "first_name"?: string, "last_name"?: string, "company"?: string, "address_1"?: string, "address_2"?: string, "city"?: string, "state"?: string, "postcode"?: string, "country"?: string, "email"?: string, "phone"?: string }, "username"?: string, "backorders"?: "no" | "notify" | "yes", "buttonText"?: string, "catalogVisibility"?: "catalog" | "hidden" | "search" | "visible", "categories"?: string[], "crossSellIds"?: string, "dateOnSaleFrom"?: string, "dateOnSaleTo"?: string, "description"?: string, "downloadable"?: boolean, "externalUrl"?: string, "featured"?: boolean, "manageStock"?: boolean, "menuOrder"?: number, "parentId"?: string, "purchaseNote"?: string, "regularPrice"?: string, "reviewsAllowed"?: boolean, "salePrice"?: string, "shippingClass"?: string, "shortDescription"?: string, "sku"?: string, "slug"?: string, "soldIndividually"?: boolean, "status"?: "draft" | "pending" | "private" | "publish", "stockQuantity"?: number, "stockStatus"?: "instock" | "outofstock" | "onbackorder", "tags"?: string[], "taxClass"?: string, "taxStatus"?: "taxable" | "shipping" | "none", "type"?: "simple" | "grouped" | "external" | "variable", "upsellIds"?: string, "virtual"?: boolean, "weight"?: string, "currency"?: string, "customerId"?: string, "customerNote"?: string, "paymentMethodId"?: string, "paymentMethodTitle"?: string, "setPaid"?: boolean, "transactionID"?: string };

    /**
     * ID of the customer to delete
     */
    readonly customerId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly filters?: { "email"?: string, "order"?: "asc" | "desc", "orderby"?: "id" | "include" | "name" | "registered_date" };

    /**
     * Default: {}
     */
    readonly updateFields?: { "billing"?: { "first_name"?: string, "last_name"?: string, "company"?: string, "address_1"?: string, "address_2"?: string, "city"?: string, "state"?: string, "postcode"?: string, "country"?: string, "email"?: string, "phone"?: string }, "first_name"?: string, "last_name"?: string, "meta_data"?: { "meta_data_fields": any }, "password"?: string, "shipping"?: { "first_name"?: string, "last_name"?: string, "company"?: string, "address_1"?: string, "address_2"?: string, "city"?: string, "state"?: string, "postcode"?: string, "country"?: string, "email"?: string, "phone"?: string }, "backorders"?: "no" | "notify" | "yes", "buttonText"?: string, "catalogVisibility"?: "visible" | "catalog" | "search" | "hidden", "categories"?: string[], "crossSellIds"?: string, "dateOnSaleFrom"?: string, "dateOnSaleTo"?: string, "description"?: string, "downloadable"?: boolean, "externalUrl"?: string, "featured"?: boolean, "manageStock"?: boolean, "menuOrder"?: number, "name"?: string, "parentId"?: string, "purchaseNote"?: string, "regularPrice"?: string, "reviewsAllowed"?: boolean, "salePrice"?: string, "shippingClass"?: string, "shortDescription"?: string, "sku"?: string, "slug"?: string, "soldIndividually"?: boolean, "status"?: "draft" | "pending" | "private" | "publish", "stockQuantity"?: number, "stockStatus"?: "instock" | "outofstock" | "onbackorder", "tags"?: string[], "taxClass"?: string, "taxStatus"?: "taxable" | "shipping" | "none", "type"?: "simple" | "grouped" | "external" | "variable", "upsellIds"?: string, "virtual"?: boolean, "weight"?: string, "currency"?: string, "customerId"?: string, "customerNote"?: string, "paymentMethodId"?: string, "paymentMethodTitle"?: string, "transactionID"?: string };

    /**
     * Product name
     */
    readonly name?: string;

    /**
     * Product dimensions
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly dimensionsUi?: { "dimensionsValues": any };

    /**
     * Product Image
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly imagesUi?: { "imagesValues": any };

    /**
     * Meta data
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly metadataUi?: { "metadataValues": any };

    /**
     */
    readonly productId?: string;

    /**
     * Default: {}
     */
    readonly options?: { "after"?: string, "before"?: string, "category"?: string, "context"?: "view" | "embed" | "edit", "featured"?: boolean, "maxPrice"?: string, "minPrice"?: string, "order"?: "asc" | "desc", "orderBy"?: "date" | "id" | "include" | "slug" | "title", "search"?: string, "sku"?: string, "slug"?: string, "status"?: "any" | "draft" | "pending" | "private" | "publish", "stockStatus"?: "instock" | "outofstock" | "onbackorder", "tag"?: string, "taxClass"?: "standard" | "reduced-rate" | "zero-rate.", "type"?: "simple" | "grouped" | "external" | "variable", "customer"?: string, "decimalPoints"?: number, "product"?: string };

    /**
     * Billing address
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly billingUi?: { "billingValues": any };

    /**
     * Coupons line data
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly couponLinesUi?: { "couponLinesValues": any };

    /**
     * Fee line data
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly feeLinesUi?: { "feeLinesValues": any };

    /**
     * Line item data
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly lineItemsUi?: { "lineItemsValues": any };

    /**
     * Shipping address
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly shippingUi?: { "shippingValues": any };

    /**
     * Shipping line data
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly shippingLinesUi?: { "shippingLinesValues": any };

    /**
     */
    readonly orderId?: string;


}

