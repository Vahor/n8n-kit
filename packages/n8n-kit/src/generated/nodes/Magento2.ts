// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Magento/Magento2.node.ts' node

export const description = "Consume Magento API" as const;
export const type = "n8n-nodes-base.magento2" as const;
export const version = 1 as const;
export const credentials = [{"name":"magento2Api","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface Magento2NodeParameters {
    /**
     * Default: "customer"
     */
    readonly resource?: "customer" | "invoice" | "order" | "product";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "create" | "cancel" | "get" | "getAll" | "ship";

    /**
     * Email address of the user to create
     */
    readonly email?: string;

    /**
     * First name of the user to create
     */
    readonly firstname?: string;

    /**
     * Last name of the user to create
     */
    readonly lastname?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "addresses"?: { "address": any }, "amazon_id"?: string, "confirmation"?: string, "customAttributes"?: { "customAttribute": any }, "dob"?: string, "default_billing"?: string, "default_shipping"?: string, "gender"?: "1" | "2" | "3", "group_id"?: string, "is_subscribed"?: boolean, "middlename"?: string, "password"?: string, "prefix"?: string, "store_id"?: string, "suffix"?: string, "vertex_customer_code"?: string, "vertex_customer_country"?: string, "website_id"?: string } | { "attribute_set_id"?: string, "name"?: string, "price"?: number, "status"?: "1" | "2", "type_id"?: string, "visibility"?: "1" | "2" | "3" | "4", "weight"?: number };

    /**
     * ID of the customer to update
     */
    readonly customerId?: string;

    readonly firstName?: string;

    readonly lastName?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getWebsites"}
     */
    readonly website_id?: string;

    /**
     * Default: {}
     */
    readonly updateFields?: { "addresses"?: { "address": any }, "amazon_id"?: string, "confirmation"?: string, "customAttributes"?: { "customAttribute": any }, "dob"?: string, "default_billing"?: string, "default_shipping"?: string, "gender"?: "1" | "2" | "3", "group_id"?: string, "is_subscribed"?: boolean, "middlename"?: string, "password"?: string, "prefix"?: string, "store_id"?: string, "suffix"?: string, "vertex_customer_code"?: string, "vertex_customer_country"?: string, "website_id"?: string } | { "attribute_set_id"?: string, "name"?: string, "price"?: number, "status"?: "1" | "2", "type_id"?: string, "visibility"?: "1" | "2" | "3" | "4", "weight"?: number };

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 5
     * Type options: {"minValue":1,"maxValue":10}
     */
    readonly limit?: number;

    /**
     * Default: "none"
     */
    readonly filterType?: "none" | "manual" | "json";

    /**
     * Default: "anyFilter"
     */
    readonly matchType?: "anyFilter" | "allFilters";

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly filters?: { "conditions": any };

    readonly filterJson?: string;

    /**
     * Default: {}
     */
    readonly options?: { "sort"?: { "sort": any } };

    readonly orderId?: string;

    /**
     * Stock-keeping unit of the product
     */
    readonly sku?: string;

    readonly name?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getAttributeSets"}
     */
    readonly attributeSetId?: string;

    readonly price?: number;

}
