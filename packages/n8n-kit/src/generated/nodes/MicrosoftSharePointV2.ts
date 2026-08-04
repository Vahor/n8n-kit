// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Microsoft/SharePoint/v2/MicrosoftSharePointV2.node.ts' node

export const description = "Interact with Microsoft SharePoint API" as const;
export const type = "n8n-nodes-base.microsoftSharePoint" as const;
export const version = 2 as const;
export const credentials = [{"name":"microsoftOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["microsoftOAuth2Api"]}}},{"name":"microsoftEntraServicePrincipalApi","required":true,"displayOptions":{"show":{"authentication":["microsoftEntraServicePrincipalApi"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface MicrosoftSharePointV2NodeParameters {
    /** Default: "microsoftOAuth2Api" */
    readonly authentication?: "microsoftOAuth2Api" | "microsoftEntraServicePrincipalApi";

    /** Default: "list" */
    readonly resource?: "file" | "item" | "list";

    /** Default: "upload" */
    readonly operation?: "download" | "update" | "upload" | "create" | "upsert" | "delete" | "get" | "getAll" | "update" | "get" | "getAll";

    /**
     * Select the site to download from
     * Default: {"mode":"list","value":""}
     */
    readonly site?: {
	value: string,
	mode: "list" | "url" | "id",
};

    /**
     * Select the folder the file lives in
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["site.value"]}
     */
    readonly folder?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Select the file to download
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["site.value","folder.value"]}
     */
    readonly file?: {
	value: string,
	mode: "list" | "id",
};

    /** Default: "data" */
    readonly binaryPropertyName?: string;

    /** New name for the file. Leave empty to keep the current name. */
    readonly fileName?: string;

    /** Whether to replace the file’s contents with the input binary data */
    readonly changeFileContent?: boolean;

    /**
     * Select the list to create an item in
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["site.value"]}
     */
    readonly list?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Select the item you want to retrieve
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["site.value","list.value"]}
     */
    readonly item?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simplify?: boolean;

    /** The formula will be evaluated for each record. <a href="https://learn.microsoft.com/en-us/graph/filter-query-parameter">More info</a>. */
    readonly filter?: string;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /** Default: {} */
    readonly options?: { fields?: ("contentType" | "createdDateTime" | "createdBy" | "fields" | "id" | "lastModifiedDateTime" | "lastModifiedBy" | "parentReference" | "webUrl")[] };

}
