// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/ActiveCampaign/ActiveCampaign.node.ts' node

export const name = "activeCampaign" as const;
export const description = "Create and edit data in ActiveCampaign" as const;
export const version = 1 as const;
export const defaults = {"name":"ActiveCampaign"} as const;
export const credentials = [{"name":"activeCampaignApi","required":true}] as const

/**
 * Create and edit data in ActiveCampaign
 */
export interface ActiveCampaignNodeParameters {

    /**
     * Default: "contact"
     */
    readonly resource?: "account" | "accountContact" | "connection" | "contact" | "contactList" | "contactTag" | "deal" | "ecommerceCustomer" | "ecommerceOrder" | "ecommerceOrderProducts" | "list" | "tag";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "add" | "remove" | "createNote" | "updateNote" | "getByProductId" | "getByOrderId";

    /**
     * Tag-type of the new tag
     * Default: "contact"
     */
    readonly tagType?: "contact" | "template";

    /**
     * Name of the new tag
     */
    readonly name?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "description"?: string, "accountUrl"?: string, "fields"?: { "property": any }, "jobTitle"?: string, "fieldValues"?: { "property": any }, "firstName"?: string, "lastName"?: string, "phone"?: string, "datetime"?: string, "email"?: string, "email_like"?: string, "exclude"?: string, "formid"?: string, "listid"?: string, "search"?: string, "segmentid"?: string, "seriesid"?: string, "status"?: "1" | "-1" | "3" | "0" | "2", "tagid"?: string, "filters[created_before]"?: string, "filters[created_after]"?: string, "filters[updated_before]"?: string, "filters[updated_after]"?: string, "waitid"?: string, "orderBy"?: "orders[cdate]" | "orders[email]" | "orders[first_name]" | "orders[last_name]" | "orders[name]" | "orders[score]", "percent"?: number, "shippingAmount"?: number, "taxAmount"?: number, "discountAmount"?: number, "orderUrl"?: string, "externalUpdatedDate"?: string, "shippingMethod"?: string, "orderNumber"?: string, "acceptsMarketing"?: boolean };

    /**
     * ID of the tag to update
     */
    readonly tagId?: number;

    /**
     * The fields to update
     * Default: {}
     */
    readonly updateFields?: { "tag"?: string, "description"?: string, "name"?: string, "accountUrl"?: string, "fields"?: { "property": any }, "jobTitle"?: string, "fieldValues"?: { "property": any }, "email"?: string, "firstName"?: string, "lastName"?: string, "phone"?: string, "title"?: string, "contact"?: number, "value"?: number, "currency"?: string, "group"?: string, "stage"?: string, "owner"?: string, "percent"?: number, "status"?: number, "service"?: string, "externalid"?: string, "logoUrl"?: string, "linkUrl"?: string, "syncStatus"?: number, "externalcheckoutid"?: string, "source"?: number, "totalPrice"?: number, "connectionid"?: number, "customerid"?: number, "externalupdatedDate"?: string, "abandonedDate"?: string, "shippingAmount"?: number, "taxAmount"?: number, "discountAmount"?: number, "orderUrl"?: string, "externalUpdatedDate"?: string, "shippingMethod"?: string, "orderNumber"?: string, "orderProducts"?: { "name"?: string, "price"?: number, "quantity"?: number, "externalid"?: string, "category"?: string, "sku"?: string, "description"?: string, "imageUrl"?: string, "productUrl"?: string }, "acceptsMarketing"?: boolean };

    /**
     */
    readonly contactId?: number;

    /**
     * ID of the contact tag to delete
     */
    readonly contactTagId?: number;

    /**
     */
    readonly listId?: number;

    /**
     * ID of the account to update
     */
    readonly accountId?: number;

    /**
     * Default: {}
     */
    readonly filters?: { "search"?: string };

    /**
     */
    readonly account?: number;

    /**
     */
    readonly contact?: number;

    /**
     * ID of the account contact to delete
     */
    readonly accountContactId?: number;

    /**
     * The email of the contact to create
     */
    readonly email?: string;

    /**
     * Whether to update user if it exists already. If not set and user exists it will error instead.
     */
    readonly updateIfExists?: boolean;

    /**
     * The title of the deal
     */
    readonly title?: string;

    /**
     * The value of the deal in cents
     */
    readonly value?: number;

    /**
     * The currency of the deal in 3-character ISO format
     * Default: "eur"
     */
    readonly currency?: "undefined";

    /**
     * The pipeline ID of the deal
     */
    readonly group?: string;

    /**
     * The stage ID of the deal
     */
    readonly stage?: string;

    /**
     * The owner ID of the deal
     */
    readonly owner?: string;

    /**
     * ID of the deal to update
     */
    readonly dealId?: number;

    /**
     * The content of the deal note
     */
    readonly dealNote?: string;

    /**
     * The ID of the deal note
     */
    readonly dealNoteId?: number;

    /**
     * The name of the service
     */
    readonly service?: string;

    /**
     * The ID of the account in the external service
     */
    readonly externalid?: string;

    /**
     * The URL to a logo image for the external service
     */
    readonly logoUrl?: string;

    /**
     * The URL to a page where the integration with the external service can be managed in the third-party's website
     */
    readonly linkUrl?: string;

    /**
     * ID of the connection to update
     */
    readonly connectionId?: number;

    /**
     * The ID of the cart in the external service. ONLY REQUIRED IF EXTERNALID IS NOT INCLUDED.
     */
    readonly externalcheckoutid?: string;

    /**
     * The order source code (0 - will not trigger automations, 1 - will trigger automations)
     */
    readonly source?: number;

    /**
     * The total price of the order in cents, including tax and shipping charges. (i.e. $456.78 => 45678). Must be greater than or equal to zero.
     */
    readonly totalPrice?: number;

    /**
     * The ID of the connection from which this order originated
     */
    readonly connectionid?: number;

    /**
     * The ID of the customer associated with this order
     */
    readonly customerid?: number;

    /**
     * The date the order was placed
     */
    readonly externalCreatedDate?: string;

    /**
     * The date the cart was abandoned. REQUIRED ONLY IF INCLUDING EXTERNALCHECKOUTID.
     */
    readonly abandonedDate?: string;

    /**
     * All ordered products
     * Default: {}
     * Type options: {"multipleValues":true,"multipleValueButtonText":"Add product"}
     */
    readonly orderProducts?: { "name"?: string, "price"?: number, "quantity"?: number, "externalid"?: string, "category"?: string, "sku"?: string, "description"?: string, "imageUrl"?: string, "productUrl"?: string };

    /**
     * The ID of the e-commerce order
     */
    readonly orderId?: number;

    /**
     * ID of the E-commerce customer to update
     */
    readonly ecommerceCustomerId?: number;

    /**
     * The ID of the product you'd like returned
     */
    readonly procuctId?: number;


}

