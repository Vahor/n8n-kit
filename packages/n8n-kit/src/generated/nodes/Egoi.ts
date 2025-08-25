// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Egoi/Egoi.node.ts' node

export const description = "Consume E-goi API" as const;
export const type = "n8n-nodes-base.egoi" as const;
export const version = 1 as const;
export const credentials = [{"name":"egoiApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface EgoiNodeParameters {
    /** Default: "contact" */
    readonly resource?: "contact";

    /** Default: "create" */
    readonly operation?: "create" | "get" | "getAll" | "update";

    /**
     * ID of list to operate on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getLists"}
     */
    readonly list?: string;

    /** Email address for a subscriber */
    readonly email?: string;

    /** Contact ID of the subscriber */
    readonly contactId?: string;

    /**
     * By default the response just includes the contact ID. If this option gets activated, it will resolve the data automatically.
     * Default: true
     */
    readonly resolveData?: boolean;

    /** Default: {} */
    readonly additionalFields?: { birth_date?: string, cellphone?: string, extraFieldsUi?: { extraFieldValues: Array<{ field_id?: string, value?: string }> }, first_name?: string, last_name?: string, status?: "unconfirmed" | "active" | "inactive" | "removed", tagIds?: any[] };

    /** Default: {} */
    readonly updateFields?: { birth_date?: string, cellphone?: string, email?: string, extraFieldsUi?: { extraFieldValues: Array<{ field_id?: string, value?: string }> }, first_name?: string, last_name?: string, status?: "unconfirmed" | "active" | "inactive" | "removed", tagIds?: any[] };

    /**
     * Search by
     * Default: "id"
     */
    readonly by?: "id" | "email";

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;

}
