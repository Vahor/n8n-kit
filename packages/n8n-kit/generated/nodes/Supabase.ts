// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Supabase/Supabase.node.js' node

export const name = "supabase" as const;
export const description = "Add, get, delete and update data in a table" as const;
export const version = 1 as const;
export const defaults = {"name":"Supabase"} as const;
export const credentials = [{"name":"supabaseApi","required":true,"testedBy":"supabaseApiCredentialTest"}] as const

/**
 * Add, get, delete and update data in a table
 */
export interface SupabaseNodeParameters {

    /**
     * Default: "row"
     */
    readonly resource?: "row";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>
     * Type options: {"loadOptionsMethod":"getTables"}
     */
    readonly tableId?: string;

    /**
     * Default: "manual"
     */
    readonly filterType?: "manual" | "string" | "none";

    /**
     * Default: "anyFilter"
     */
    readonly matchType?: "anyFilter" | "allFilters" | "anyFilter" | "allFilters";

    /**
     * Filter to decide which rows get updated
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly filters?: { "conditions": any };

    /**
     */
    readonly jsonNotice?: string;

    /**
     */
    readonly filterString?: string;

    /**
     * Default: "defineBelow"
     */
    readonly dataToSend?: "autoMapInputData" | "defineBelow";

    /**
     * List of input properties to avoid sending, separated by commas. Leave empty to send all properties.
     */
    readonly inputsToIgnore?: string;

    /**
     * Default: {}
     * Type options: {"multipleValueButtonText":"Add Field to Send","multipleValues":true}
     */
    readonly fieldsUi?: { "fieldValues": any };

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly limit?: number;


}

