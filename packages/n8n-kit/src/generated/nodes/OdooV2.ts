// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Odoo/v2/OdooV2.node.ts' node

export const description = "Consume Odoo API" as const;
export const type = "n8n-nodes-base.odoo" as const;
export const version = 2 as const;
export const credentials = [{"name":"odooApiKeyApi","required":true,"displayOptions":{"show":{"authentication":["odooApiKeyApi"]}}},{"name":"odooApi","required":true,"displayOptions":{"show":{"authentication":["odooApi"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface OdooV2NodeParameters {
    /** Default: "odooApiKeyApi" */
    readonly authentication?: "odooApiKeyApi" | "odooApi";

    /** Default: "contact" */
    readonly resource?: "activity" | "contact" | "custom" | "opportunity";

    /** Default: "getAll" */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     * The Odoo model of the document to attach the activity to
     * Default: {"mode":"list","value":""}
     */
    readonly res_model?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Record to attach the activity to
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["res_model.value"]}
     */
    readonly res_id?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Type of activity to schedule
     * Default: {"mode":"list","value":""}
     */
    readonly activity_type_id?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Activity to delete
     * Default: {"mode":"list","value":""}
     */
    readonly activityId?: {
	value: string,
	mode: "list" | "id",
};

    /** Default: {} */
    readonly options?: { fieldsList?: unknown[] } | { fieldsList?: string };

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":1000}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly filters?: { res_model?: string, res_id?: number } | { filter: Array<{ fieldName?: string, operator?: "equal" | "notEqual" | "greaterThen" | "lesserThen" | "greaterOrEqual" | "lesserOrEqual" | "like" | "in" | "notIn" | "childOf", value?: string }> };

    /**
     * Contact to delete
     * Default: {"mode":"list","value":""}
     */
    readonly contactId?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * The Odoo model to operate on
     * Default: {"mode":"list","value":""}
     */
    readonly customResource?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Record to delete
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["customResource.value"]}
     */
    readonly recordId?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Opportunity to delete
     * Default: {"mode":"list","value":""}
     */
    readonly opportunityId?: {
	value: string,
	mode: "list" | "id",
};

}
