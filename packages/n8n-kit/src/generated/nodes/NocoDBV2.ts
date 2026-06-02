// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/NocoDB/v2/NocoDBV2.node.ts' node

export const description = "Read, update, write and delete data from NocoDB" as const;
export const type = "n8n-nodes-base.nocoDb" as const;
export const version = 4 as const;
export const credentials = [{"name":"nocoDb","required":true,"displayOptions":{"show":{"authentication":["nocoDb"]}}},{"name":"nocoDbApiToken","required":true,"displayOptions":{"show":{"authentication":["nocoDbApiToken"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface NocoDBV2NodeParameters {
    /** Default: "nocoDb" */
    readonly authentication?: "nocoDbApiToken" | "nocoDb";

    /** Default: "row" */
    readonly resource?: "row" | "linkrow" | "base";

    /** Default: "get" */
    readonly operation?: "create" | "upsert" | "update" | "delete" | "get" | "search" | "count" | "upload" | "getAll" | "get" | "list" | "link" | "unlink";

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Default: {"mode":"list","value":""}
     */
    readonly workspaceId?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["workspaceId.value"]}
     */
    readonly projectId?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * The table to operate on. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["projectId.value"]}
     */
    readonly table?: {
	value: string,
	mode: "list" | "id",
};

    /** Default: {} */
    readonly options?: { where?: string } | { viewId?: {
	value: string,
	mode: "list" | "id",
}, fields?: unknown[], sort?: { property: Array<{ field?: {
	value: string,
	mode: "list" | "id",
}, direction?: "asc" | "desc" }> }, where?: string, page?: number, shuffle?: boolean } | { fields?: { items: Array<{ field?: {
	value: string,
	mode: "list" | "id",
} }> }, sort?: { property: Array<{ field?: {
	value: string,
	mode: "list" | "id",
}, direction?: "asc" | "desc" }> }, where?: string };

    /** The value of the ID field */
    readonly id?: string;

    /** Whether the attachment fields defined in 'Download Fields' will be downloaded */
    readonly downloadAttachments?: boolean;

    /**
     * Names of the fields of type 'attachment' that should be downloaded. Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: []
     * Type options: {"loadOptionsMethod":"getDownloadFields"}
     */
    readonly downloadFieldNames?: unknown[];

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /**
     * Whether to insert the input data this node receives in the new row
     * Default: "mapWithFields"
     */
    readonly dataToSend?: "autoMapInputData" | "mapWithFields";

    /** List of input properties to avoid sending, separated by commas. Leave empty to send all properties. */
    readonly inputsToIgnore?: string;

    /**
     * Choose a way to perform the upload
     * Default: "base64"
     */
    readonly uploadMode?: "base64" | "url";

    /**
     * Name of the fields of type 'attachment' that will be uploaded. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["table.value","uploadMode"]}
     */
    readonly uploadFieldName?: {
	value: string,
	mode: "list" | "id",
};

    /** Name of uploaded file */
    readonly filename?: string;

    /** Content type of file */
    readonly contentType?: string;

    /** Base64 value of file that will be upload */
    readonly base64value?: string;

    /** URL of file that will be uploaded */
    readonly url?: string;

    /**
     * Name of the fields of type 'link' that will be uploaded. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["table.value"]}
     */
    readonly linkFieldName?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * The ID of record in table
     * Default: []
     * Type options: {"multipleValues":true}
     */
    readonly linkId?: string;

}
