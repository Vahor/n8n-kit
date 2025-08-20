// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/NocoDB/NocoDB.node.js' node

export const name = "nocoDb" as const;
export const description = "Read, update, write and delete data from NocoDB" as const;
export const version = 2 as const;
export const defaults = {"name":"NocoDB"} as const;
export const credentials = [{"name":"nocoDb","required":true,"displayOptions":{"show":{"authentication":["nocoDb"]}}},{"name":"nocoDbApiToken","required":true,"displayOptions":{"show":{"authentication":["nocoDbApiToken"]}}}] as const

/**
 * Read, update, write and delete data from NocoDB
 */
export interface NocoDBNodeParameters {

    /**
     * Default: "nocoDb"
     */
    readonly authentication?: "nocoDb" | "nocoDbApiToken";

    /**
     * Default: 1
     */
    readonly version?: "1" | "2";

    /**
     * Default: "row"
     */
    readonly resource?: "row";

    /**
     * Default: "get"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     * The ID of the project
     */
    readonly projectId?: string;

    /**
     * The table to operate on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsDependsOn":["projectId"],"loadOptionsMethod":"getTables"}
     */
    readonly table?: string;

    /**
     * Default: "id"
     */
    readonly primaryKey?: "id" | "ncRecordId" | "custom";

    /**
     */
    readonly customPrimaryKey?: string;

    /**
     * The value of the ID field
     */
    readonly id?: string;

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
     * Whether the attachment fields define in 'Download Fields' will be downloaded
     */
    readonly downloadAttachments?: boolean;

    /**
     * Name of the fields of type 'attachment' that should be downloaded. Multiple ones can be defined separated by comma. Case sensitive.
     */
    readonly downloadFieldNames?: string;

    /**
     * Default: {}
     */
    readonly options?: { "fields"?: string, "where"?: string, "sort"?: { "property": any } };

    /**
     * Whether to insert the input data this node receives in the new row
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


}

