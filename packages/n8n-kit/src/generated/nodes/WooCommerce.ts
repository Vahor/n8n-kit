// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/WooCommerce/WooCommerce.node.ts' node

export const description = "Consume WooCommerce API" as const;
export const type = "n8n-nodes-base.wooCommerce" as const;
export const version = 1 as const;
export const credentials = [{"name":"wooCommerceApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface WooCommerceNodeParameters {
    /** Default: "product" */
    readonly resource?: "customer" | "order" | "product";

    /** Default: "create" */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    readonly email?: string;

    /** Default: {} */
    readonly additionalFields?: { billing?: { first_name?: string, last_name?: string, company?: string, address_1?: string, address_2?: string, city?: string, state?: string, postcode?: string, country?: string, email?: string, phone?: string }, first_name?: string, last_name?: string, meta_data?: { meta_data_fields: Array<{ key?: string, value?: string }> }, password?: string, shipping?: { first_name?: string, last_name?: string, company?: string, address_1?: string, address_2?: string, city?: string, state?: string, postcode?: string, country?: string, email?: string, phone?: string }, username?: string } | { backorders?: "no" | "notify" | "yes", buttonText?: string, catalogVisibility?: "catalog" | "hidden" | "search" | "visible", categories?: unknown[], crossSellIds?: string, dateOnSaleFrom?: string, dateOnSaleTo?: string, description?: string, downloadable?: boolean, externalUrl?: string, featured?: boolean, manageStock?: boolean, menuOrder?: number, parentId?: string, purchaseNote?: string, regularPrice?: string, reviewsAllowed?: boolean, salePrice?: string, shippingClass?: string, shortDescription?: string, sku?: string, slug?: string, soldIndividually?: boolean, status?: "draft" | "pending" | "private" | "publish", stockQuantity?: number, stockStatus?: "instock" | "outofstock" | "onbackorder", tags?: unknown[], taxClass?: string, taxStatus?: "taxable" | "shipping" | "none", type?: "simple" | "grouped" | "external" | "variable", upsellIds?: string, virtual?: boolean, weight?: string } | { currency?: string, customerId?: string, customerNote?: string, parentId?: string, paymentMethodId?: string, paymentMethodTitle?: string, setPaid?: boolean, status?: "cancelled" | "completed" | "failed" | "on-hold" | "pending" | "processing" | "refunded" | "trash", transactionID?: string };

    /** ID of the customer to delete */
    readonly customerId?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly filters?: { email?: string, order?: "asc" | "desc", orderby?: "id" | "include" | "name" | "registered_date" };

    /** Default: {} */
    readonly updateFields?: { billing?: { first_name?: string, last_name?: string, company?: string, address_1?: string, address_2?: string, city?: string, state?: string, postcode?: string, country?: string, email?: string, phone?: string }, first_name?: string, last_name?: string, meta_data?: { meta_data_fields: Array<{ key?: string, value?: string }> }, password?: string, shipping?: { first_name?: string, last_name?: string, company?: string, address_1?: string, address_2?: string, city?: string, state?: string, postcode?: string, country?: string, email?: string, phone?: string } } | { backorders?: "no" | "notify" | "yes", buttonText?: string, catalogVisibility?: "visible" | "catalog" | "search" | "hidden", categories?: unknown[], crossSellIds?: string, dateOnSaleFrom?: string, dateOnSaleTo?: string, description?: string, downloadable?: boolean, externalUrl?: string, featured?: boolean, manageStock?: boolean, menuOrder?: number, name?: string, parentId?: string, purchaseNote?: string, regularPrice?: string, reviewsAllowed?: boolean, salePrice?: string, shippingClass?: string, shortDescription?: string, sku?: string, slug?: string, soldIndividually?: boolean, status?: "draft" | "pending" | "private" | "publish", stockQuantity?: number, stockStatus?: "instock" | "outofstock" | "onbackorder", tags?: unknown[], taxClass?: string, taxStatus?: "taxable" | "shipping" | "none", type?: "simple" | "grouped" | "external" | "variable", upsellIds?: string, virtual?: boolean, weight?: string } | { currency?: string, customerId?: string, customerNote?: string, parentId?: string, paymentMethodId?: string, paymentMethodTitle?: string, status?: "cancelled" | "completed" | "failed" | "on-hold" | "pending" | "processing" | "refunded" | "trash", transactionID?: string };

    /** Product name */
    readonly name?: string;

    /**
     * Product dimensions
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly dimensionsUi?: { dimensionsValues: { height?: string, length?: string, width?: string } };

    /**
     * Product Image
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly imagesUi?: { imagesValues: Array<{ alt?: string, src?: string, name?: string }> };

    /**
     * Meta data
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly metadataUi?: { metadataValues: Array<{ key?: string, value?: string }> };

    readonly productId?: string;

    /** Default: {} */
    readonly options?: { after?: string, before?: string, category?: string, context?: "view" | "embed" | "edit", featured?: boolean, maxPrice?: string, minPrice?: string, order?: "asc" | "desc", orderBy?: "date" | "id" | "include" | "slug" | "title", search?: string, sku?: string, slug?: string, status?: "any" | "draft" | "pending" | "private" | "publish", stockStatus?: "instock" | "outofstock" | "onbackorder", tag?: string, taxClass?: "standard" | "reduced-rate" | "zero-rate.", type?: "simple" | "grouped" | "external" | "variable" } | { after?: string, before?: string, customer?: string, decimalPoints?: number, order?: "asc" | "desc", product?: string, orderBy?: "date" | "id" | "include" | "slug" | "title", search?: string, status?: "any" | "cancelled" | "completed" | "failed" | "on-hold" | "pending" | "processing" | "refunded" | "trash" };

    /**
     * Billing address
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly billingUi?: { billingValues: { firstName?: string, lastName?: string, company?: string, address_1?: string, address_2?: string, city?: string, postcode?: string, country?: string, email?: string, phone?: string } } | { billingValues: { firstName?: string, lastName?: string, company?: string, address_1?: string, address_2?: string, city?: string, postalCode?: string, country?: string, email?: string, phone?: string } };

    /**
     * Coupons line data
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly couponLinesUi?: { couponLinesValues: Array<{ code?: string, metadataUi?: { metadataValues: Array<{ key?: string, value?: string }> } }> };

    /**
     * Fee line data
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly feeLinesUi?: { feeLinesValues: Array<{ name?: string, taxClass?: string, taxStatus?: "taxable" | "none", total?: string, metadataUi?: { metadataValues: Array<{ key?: string, value?: string }> } }> };

    /**
     * Line item data
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly lineItemsUi?: { lineItemsValues: Array<{ name?: string, productId?: number, variationId?: number, quantity?: number, taxClass?: string, subtotal?: string, total?: string, metadataUi?: { metadataValues: Array<{ key?: string, value?: string }> } }> };

    /**
     * Shipping address
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly shippingUi?: { shippingValues: { firstName?: string, lastName?: string, company?: string, address_1?: string, address_2?: string, city?: string, postcode?: string, country?: string } } | { shippingValues: { firstName?: string, lastName?: string, company?: string, address_1?: string, address_2?: string, city?: string, postalCode?: string, country?: string } };

    /**
     * Shipping line data
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly shippingLinesUi?: { shippingLinesValues: Array<{ methodTitle?: string, "method ID"?: string, total?: string, metadataUi?: { metadataValues: Array<{ key?: string, value?: string }> } }> };

    readonly orderId?: string;

}
