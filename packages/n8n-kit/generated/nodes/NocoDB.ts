// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/NocoDB/NocoDB.node.ts' node

export const name = "nocoDb" as const;
export const description = "Read, update, write and delete data from NocoDB" as const;
export const version = 3 as const;

/**
 * Read, update, write and delete data from NocoDB
 */
export interface NocoDBNodeParameters {

    /**
     * Default: "nocoDb"
     */
    readonly authentication?: "nocoDbApiToken" | "nocoDb";

    /**
     * Default: 1
     */
    readonly version?: "1" | "2" | "3" | "1" | "2" | "3" | "1" | "2" | "3";

    /**
     * Default: "row"
     */
    readonly resource?: "row";

    /**
     * Default: "get"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Default: "none"
     * Type options: {"loadOptionsMethod":"getWorkspaces"}
     */
    readonly workspaceId?: string;

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Type options: {"loadOptionsDependsOn":["workspaceId"],"loadOptionsMethod":"getBases"}
     */
    readonly projectId?: string | string | string;

    /**
     * The table to operate on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsDependsOn":["projectId"],"loadOptionsMethod":"getTables"}
     */
    readonly table?: string | string;

    /**
     * Default: "id"
     */
    readonly primaryKey?: "id" | "ncRecordId" | "custom" | "id" | "ncRecordId" | "custom";

    /**
     */
    readonly customPrimaryKey?: string | string;

    /**
     * The value of the ID field
     */
    readonly id?: string | string;

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
    readonly downloadAttachments?: boolean | boolean;

    /**
     * Name of the fields of type 'attachment' that should be downloaded. Multiple ones can be defined separated by comma. Case sensitive.
     */
    readonly downloadFieldNames?: string | string;

    /**
     * Default: {}
     */
    readonly options?: { "viewId"?: string, "fields"?: string, "sort"?: { "property": any }, "where"?: string };

    /**
     * Whether to insert the input data this node receives in the new row
     * Default: "defineBelow"
     */
    readonly dataToSend?: "autoMapInputData" | "defineBelow";

    /**
     */
    readonly info?: string | string;

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

