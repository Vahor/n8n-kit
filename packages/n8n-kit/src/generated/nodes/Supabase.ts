// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Supabase/Supabase.node.ts' node

export const description = "Add, get, delete and update data in a table" as const;
export const type = "n8n-nodes-base.supabase" as const;
export const version = 1 as const;
export const credentials = [{"name":"supabaseApi","required":true,"testedBy":"supabaseApiCredentialTest"}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface SupabaseNodeParameters {
    /**
     * Whether to use a database schema different from the default "public" schema (requires schema exposure in the <a href="https://supabase.com/docs/guides/api/using-custom-schemas?queryGroups=language&language=curl#exposing-custom-schemas">Supabase API</a>)
     */
    readonly useCustomSchema?: boolean;

    /**
     * Name of database schema to use for table
     * Default: "public"
     */
    readonly schema?: string;

    /**
     * Default: "row"
     */
    readonly resource?: "row";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsDependsOn":["useCustomSchema","schema"],"loadOptionsMethod":"getTables"}
     */
    readonly tableId?: string;

    /**
     * Default: "manual"
     */
    readonly filterType?: "manual" | "string" | "none" | "manual" | "string";

    /**
     * Default: "anyFilter"
     */
    readonly matchType?: "anyFilter" | "allFilters";

    /**
     * Filter to decide which rows get updated
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly filters?: { "conditions": any };

    readonly jsonNotice?: string;

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
