// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/ServiceNow/ServiceNow.node.ts' node

export const name = "serviceNow" as const;
export const description = "Consume ServiceNow API" as const;
export const version = 1 as const;

/**
 * Consume ServiceNow API
 */
export interface ServiceNowNodeParameters {

    /**
     * Authentication method to use
     * Default: "oAuth2"
     */
    readonly authentication?: "basicAuth" | "oAuth2";

    /**
     * Default: "user"
     */
    readonly resource?: "attachment" | "businessService" | "configurationItems" | "department" | "dictionary" | "incident" | "tableRecord" | "user" | "userGroup" | "userRole";

    /**
     * Default: "upload"
     */
    readonly operation?: "upload" | "delete" | "get" | "getAll" | "getAll" | "create" | "delete" | "get" | "getAll" | "update";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getTables"}
     */
    readonly tableName?: string;

    /**
     * Sys_id of the record in the table specified in Table Name that you want to attach the file to
     */
    readonly id?: string;

    /**
     * Name of the binary property that contains the data to upload
     * Default: "data"
     */
    readonly inputDataFieldName?: string;

    /**
     * Default: {}
     */
    readonly options?: { "file_name"?: string } | { "queryFilter"?: string } | { "sysparm_exclude_reference_link"?: boolean, "sysparm_fields"?: string[], "sysparm_query"?: string, "sysparm_display_value"?: "false" | "all" | "true" } | { "sysparm_exclude_reference_link"?: boolean, "sysparm_fields"?: string[], "sysparm_display_value"?: "false" | "all" | "true" };

    /**
     * Sys_id value of the attachment to delete
     */
    readonly attachmentId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /**
     */
    readonly download?: boolean;

    /**
     * Field name where downloaded data will be placed
     * Default: "data"
     */
    readonly outputField?: string;

    /**
     * Short description of the incident
     */
    readonly short_description?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "assigned_to"?: string, "assignment_group"?: string, "business_service"?: string, "caller_id"?: string, "category"?: string, "close_notes"?: string, "cmdb_ci"?: string[], "contact_type"?: "email" | "phone" | "self-service" | "walk-in", "description"?: string, "impact"?: "3" | "2" | "1", "close_code"?: string, "state"?: string, "subcategory"?: string, "urgency"?: "3" | "2" | "1" } | { "active"?: boolean, "building"?: string, "city"?: string, "company"?: string, "country"?: string, "department"?: string, "email"?: string, "first_name"?: string, "gender"?: string, "home_phone"?: string, "last_name"?: string, "location"?: string, "manager"?: string, "middle_name"?: string, "mobile_phone"?: string, "user_password"?: string, "password_needs_reset"?: boolean, "phone"?: string, "roles"?: string[], "source"?: string, "state"?: string, "street"?: string, "user_name"?: string, "zip"?: string };

    /**
     * Default: {}
     */
    readonly updateFields?: { "assigned_to"?: string, "assignment_group"?: string, "business_service"?: string, "caller_id"?: string, "category"?: string, "close_notes"?: string, "cmdb_ci"?: string[], "contact_type"?: "email" | "phone" | "self-service" | "walk-in", "description"?: string, "impact"?: "3" | "2" | "1", "close_code"?: string, "hold_reason"?: string, "state"?: string, "subcategory"?: string, "urgency"?: "3" | "2" | "1", "work_notes"?: string } | { "active"?: boolean, "building"?: string, "city"?: string, "company"?: string, "country"?: string, "department"?: string, "email"?: string, "first_name"?: string, "gender"?: string, "home_phone"?: string, "last_name"?: string, "location"?: string, "manager"?: string, "middle_name"?: string, "mobile_phone"?: string, "user_password"?: string, "password_needs_reset"?: boolean, "phone"?: string, "roles"?: string[], "source"?: string, "state"?: string, "street"?: string, "user_name"?: string, "zip"?: string };

    /**
     * Default: "columns"
     */
    readonly dataToSend?: "mapInput" | "columns" | "nothing";

    /**
     * List of input properties to avoid sending, separated by commas. Leave empty to send all inputs.
     */
    readonly inputsToIgnore?: string;

    /**
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly fieldsToSend?: { "field": any };

    /**
     * Unique identifier of the user
     * Default: "id"
     */
    readonly getOption?: "id" | "user_name";

    /**
     * Unique identifier of the user
     */
    readonly user_name?: string;


}

