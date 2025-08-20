// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/QuickBase/QuickBase.node.js' node

export const name = "quickbase" as const;
export const description = "Integrate with the Quick Base RESTful API" as const;
export const version = 1 as const;
export const defaults = {"name":"Quick Base"} as const;
export const credentials = [{"name":"quickbaseApi","required":true}] as const

/**
 * Integrate with the Quick Base RESTful API
 */
export interface QuickBaseNodeParameters {

    /**
     * Default: "record"
     */
    readonly resource?: "field" | "file" | "record" | "report";

    /**
     * Default: "getAll"
     */
    readonly operation?: "getAll" | "delete" | "download" | "create" | "upsert" | "update" | "get" | "run";

    /**
     * The table identifier
     */
    readonly tableId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly options?: { "includeFieldPerms"?: boolean, "fields"?: string[], "useFieldIDs"?: boolean, "select"?: string[], "sortByUi"?: { "sortByValues": any }, "where"?: string };

    /**
     * The unique identifier of the record
     */
    readonly recordId?: string;

    /**
     * The unique identifier of the field
     */
    readonly fieldId?: string;

    /**
     * The file attachment version number
     * Default: 1
     */
    readonly versionNumber?: number;

    /**
     * Object property name which holds binary data
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * Comma-separated list of the properties which should used as columns for the new rows
     */
    readonly columns?: string;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;

    /**
     * The filter to delete records. To delete all records specify a filter that will include all records, for example {3.GT.0} where 3 is the ID of the Record ID field.
     */
    readonly where?: string;

    /**
     * Update can use the key field on the table, or any other supported unique field
     */
    readonly updateKey?: string;

    /**
     * <p>You're updating records in a Quick Base table with data from an external file. In order for a merge like this to work, Quick Base needs a way to match records in the source data with corresponding records in the destination table.</p><p>You make this possible by choosing the field in the app table that holds unique matching values. This is called a merge field.</p>. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getUniqueTableFields"}
     */
    readonly mergeFieldId?: string;

    /**
     * The identifier of the report, unique to the table
     */
    readonly reportId?: string;


}

