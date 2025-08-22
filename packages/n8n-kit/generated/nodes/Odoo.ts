// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Odoo/Odoo.node.ts' node

export const name = "odoo" as const;
export const description = "Consume Odoo API" as const;
export const version = 1 as const;

/**
 * Consume Odoo API
 */
export interface OdooNodeParameters {

    /**
     * Default: "contact"
     */
    readonly resource?: "contact" | "custom" | "note" | "opportunity";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getModels"}
     */
    readonly customResource?: string;

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "get" | "getAll" | "update" | "create" | "delete" | "get" | "getAll" | "update";

    /**
     * Default: {}
     * Type options: {"multipleValues":true,"multipleValueButtonText":"Add Field"}
     */
    readonly fieldsToCreateOrUpdate?: { "fields": any } | { "fields": any };

    /**
     */
    readonly customResourceId?: string | string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean | boolean | boolean | boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":1000}
     */
    readonly limit?: number | number | number | number;

    /**
     * Default: {}
     */
    readonly options?: { "fieldsList"?: string[] } | { "fieldsList"?: string[] } | { "fieldsList"?: string[] } | { "fieldsList"?: string[] };

    /**
     * Filter request by applying filters
     * Default: {}
     * Type options: {"multipleValues":true,"multipleValueButtonText":"Add Filter"}
     */
    readonly filterRequest?: { "filter": any };

    /**
     */
    readonly opportunityName?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "email_from"?: string, "expected_revenue"?: number, "description"?: string, "phone"?: string, "priority"?: "1" | "2" | "3", "probability"?: number } | { "address"?: { "value": any }, "email"?: string, "comment"?: string, "function"?: string, "mobile"?: string, "phone"?: string, "vat"?: string, "website"?: string };

    /**
     */
    readonly opportunityId?: string | string;

    /**
     * Default: {}
     */
    readonly updateFields?: { "email_from"?: string, "expected_revenue"?: number, "description"?: string, "name"?: string, "phone"?: string, "priority"?: "1" | "2" | "3", "probability"?: number } | { "address"?: { "value": any }, "email"?: string, "comment"?: string, "function"?: string, "mobile"?: string, "name"?: string, "phone"?: string, "vat"?: string, "website"?: string };

    /**
     */
    readonly contactName?: string;

    /**
     */
    readonly contactId?: string | string;

    /**
     */
    readonly memo?: string | string;

    /**
     */
    readonly noteId?: string | string;


}

