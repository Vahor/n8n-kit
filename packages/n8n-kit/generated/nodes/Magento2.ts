// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Magento/Magento2.node.ts' node

export const name = "magento2" as const;
export const description = "Consume Magento API" as const;
export const version = 1 as const;
export const defaults = {"name":"Magento 2"} as const;
export const credentials = [{"name":"magento2Api","required":true}] as const

/**
 * Consume Magento API
 */
export interface Magento2NodeParameters {

    /**
     * Default: "customer"
     */
    readonly resource?: "customer" | "invoice" | "order" | "product";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "cancel" | "ship";

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
    readonly additionalFields?: { "undefined"?: any };

    /**
     * ID of the customer to update
     */
    readonly customerId?: string;

    /**
     */
    readonly firstName?: string;

    /**
     */
    readonly lastName?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getWebsites"}
     */
    readonly website_id?: string;

    /**
     * Default: {}
     */
    readonly updateFields?: { "undefined"?: any };

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
     */
    readonly orderId?: string;

    /**
     * Stock-keeping unit of the product
     */
    readonly sku?: string;

    /**
     */
    readonly name?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getAttributeSets"}
     */
    readonly attributeSetId?: string;

    /**
     */
    readonly price?: number;


}

