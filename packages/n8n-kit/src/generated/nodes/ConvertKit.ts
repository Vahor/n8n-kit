// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/ConvertKit/ConvertKit.node.ts' node

export const name = "convertKit" as const;
export const description = "Consume ConvertKit API" as const;
export const version = 1 as const;
export const credentials = [{"name":"convertKitApi","required":true}] as const;

/**
 * Consume ConvertKit API
 */
export interface ConvertKitNodeParameters {

    /**
     * Default: "form"
     */
    readonly resource?: "customField" | "form" | "sequence" | "tag" | "tagSubscriber";

    /**
     * Default: "update"
     */
    readonly operation?: "create" | "delete" | "getAll" | "update" | "addSubscriber" | "getAll" | "getSubscriptions" | "create" | "getAll" | "add" | "getAll" | "delete";

    /**
     * The ID of your custom field
     */
    readonly id?: string;

    /**
     * The label of the custom field
     */
    readonly label?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /**
     * The subscriber's email address
     */
    readonly email?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "fieldsUi"?: { "fieldsValues": any }, "firstName"?: string } | { "subscriberState"?: "active" | "cancelled" } | { "fieldsUi"?: { "fieldsValues": any }, "firstName"?: string, "tags"?: any[] } | { "fields"?: { "field": any }, "firstName"?: string };

    /**
     * Tag name, multiple can be added separated by comma
     */
    readonly name?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getTags"}
     */
    readonly tagId?: string;


}

