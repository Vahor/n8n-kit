// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Brevo/Brevo.node.ts' node

export const description = "Consume Brevo API" as const;
export const type = "n8n-nodes-base.sendInBlue" as const;
export const version = 1 as const;
export const credentials = [{"name":"sendInBlueApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface BrevoNodeParameters {
    /** Default: "email" */
    readonly resource?: "contact" | "attribute" | "email" | "sender";

    /** Default: "create" */
    readonly operation?: "create" | "update" | "delete" | "getAll" | "create" | "delete" | "getAll" | "create" | "upsert" | "delete" | "get" | "getAll" | "update" | "send" | "sendTemplate";

    /**
     * Category of the attribute
     * Default: "normal"
     */
    readonly attributeCategory?: "calculated" | "category" | "global" | "normal" | "transactional";

    /** Name of the attribute */
    readonly attributeName?: string;

    /** Attribute Type */
    readonly attributeType?: "boolean" | "date" | "float" | "text";

    /** Value of the attribute */
    readonly attributeValue?: string;

    /** Default: {} */
    readonly attributeCategoryList?: { "categoryEnumeration"?: { "attributesValues": any } };

    /**
     * Category of the attribute
     * Default: "calculated"
     */
    readonly updateAttributeCategory?: "calculated" | "category" | "global";

    /** Name of the existing attribute */
    readonly updateAttributeName?: string;

    /** Value of the attribute to update */
    readonly updateAttributeValue?: string;

    /**
     * List of the values and labels that the attribute can take
     * Default: {}
     */
    readonly updateAttributeCategoryList?: { "updateCategoryEnumeration"?: { "updateAttributesValues": any } };

    /**
     * Category of the attribute
     * Default: "normal"
     */
    readonly deleteAttributeCategory?: "calculated" | "category" | "global" | "normal" | "transactional";

    /** Name of the attribute */
    readonly deleteAttributeName?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":1000}
     */
    readonly limit?: number;

    /** Name of the sender */
    readonly name?: string;

    /** Email of the sender */
    readonly email?: string;

    /** ID of the sender to delete */
    readonly id?: string;

    /**
     * Array of attributes to be added
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly createContactAttributes?: { "attributesValues": any };

    /** Default: {} */
    readonly options?: { "sort"?: "desc" | "asc" };

    /** Default: {} */
    readonly filters?: { "modifiedSince"?: string };

    /** Email (urlencoded) OR ID of the contact OR its SMS attribute value */
    readonly identifier?: string;

    /**
     * Array of attributes to be updated
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly updateAttributes?: { "updateAttributesValues": any };

    /**
     * Array of attributes to be updated
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly upsertAttributes?: { "upsertAttributesValues": any };

    readonly sendHTML?: boolean;

    /** Subject of the email */
    readonly subject?: string;

    /** Text content of the message */
    readonly textContent?: string;

    /** HTML content of the message */
    readonly htmlContent?: string;

    readonly sender?: string;

    readonly receipients?: string;

    /**
     * Additional fields to add
     * Default: {}
     */
    readonly additionalFields?: { "emailAttachments"?: { "attachment": any }, "receipientsBCC"?: { "receipientBcc": any }, "receipientsCC"?: { "receipientCc": any }, "emailTags"?: { "tags": any } } | { "emailAttachments"?: { "attachment": any }, "emailTags"?: { "tags": any }, "templateParameters"?: { "parameterValues": any } };

    /** Type options: {"loadOptions":{"routing":{"request":{"method":"GET","url":"/v3/smtp/templates","qs":{"templateStatus":true,"limit":1000,"offset":0,"sort":"desc"}},"output":{"postReceive":[{"type":"rootProperty","properties":{"property":"templates"}},{"type":"setKeyValue","properties":{"name":"={{$responseItem.name}}","value":"={{$responseItem.id}}"}},{"type":"sort","properties":{"key":"name"}}]}}}} */
    readonly templateId?: string;

}
