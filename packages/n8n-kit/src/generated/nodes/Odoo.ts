// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Odoo/Odoo.node.ts' node

export const description = "Consume Odoo API" as const;
export const type = "n8n-nodes-base.odoo" as const;
export const version = 1 as const;
export const credentials = [{"name":"odooApi","required":true,"testedBy":"odooApiTest"}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface OdooNodeParameters {
    /** Default: "contact" */
    readonly resource?: "contact" | "custom" | "note" | "opportunity";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getModels"}
     */
    readonly customResource?: string;

    /** Default: "create" */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     * Default: {}
     * Type options: {"multipleValues":true,"multipleValueButtonText":"Add Field"}
     */
    readonly fieldsToCreateOrUpdate?: { fields: Array<{ fieldName?: string, fieldValue?: string }> };

    readonly customResourceId?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":1000}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly options?: { fieldsList?: any[] };

    /**
     * Filter request by applying filters
     * Default: {}
     * Type options: {"multipleValues":true,"multipleValueButtonText":"Add Filter"}
     */
    readonly filterRequest?: { filter: Array<{ fieldName?: string, operator?: "notEqual" | "lesserThen" | "lesserOrEqual" | "equal" | "greaterThen" | "greaterOrEqual" | "childOf" | "in" | "like" | "notIn", value?: string }> };

    readonly opportunityName?: string;

    /** Default: {} */
    readonly additionalFields?: { email_from?: string, expected_revenue?: number, description?: string, phone?: string, priority?: "1" | "2" | "3", probability?: number } | { address?: { value: { city?: string, country_id?: string, state_id?: string, street?: string, street2?: string, zip?: string } }, email?: string, comment?: string, function?: string, mobile?: string, phone?: string, vat?: string, website?: string };

    readonly opportunityId?: string;

    /** Default: {} */
    readonly updateFields?: { email_from?: string, expected_revenue?: number, description?: string, name?: string, phone?: string, priority?: "1" | "2" | "3", probability?: number } | { address?: { value: { city?: string, country_id?: string, state_id?: string, street?: string, street2?: string, zip?: string } }, email?: string, comment?: string, function?: string, mobile?: string, name?: string, phone?: string, vat?: string, website?: string };

    readonly contactName?: string;

    readonly contactId?: string;

    readonly memo?: string;

    readonly noteId?: string;

}
