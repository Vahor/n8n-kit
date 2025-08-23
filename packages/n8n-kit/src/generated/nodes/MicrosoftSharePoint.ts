// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Microsoft/SharePoint/MicrosoftSharePoint.node.ts' node

export const description = "Interact with Microsoft SharePoint API" as const;
export const type = "n8n-nodes-base.microsoftSharePoint" as const;
export const version = 1 as const;
export const credentials = [{"name":"microsoftSharePointOAuth2Api","required":true}] as const;
export const outputs = {"main":"main"} as const;

export interface MicrosoftSharePointNodeParameters {

    /**
     * Default: "file"
     */
    readonly resource?: "file" | "item" | "list";

    /**
     * Default: "download"
     */
    readonly operation?: "download" | "update" | "upload" | "create" | "upsert" | "delete" | "get" | "getAll" | "update" | "get" | "getAll";

    /**
     * Select the site to retrieve folders from
     * Default: {"mode":"list","value":""}
     */
    readonly site?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Select the folder to download the file from
     * Default: {"mode":"list","value":""}
     */
    readonly folder?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Select the file to download
     * Default: {"mode":"list","value":""}
     */
    readonly file?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * If not specified, the original file name will be used
     */
    readonly fileName?: string;

    /**
     * Whether to update the file contents
     */
    readonly changeFileContent?: boolean;

    /**
     * Find the name of input field containing the binary data to update the file with in the Input panel on the left, in the Binary tab
     */
    readonly fileContents?: string;

    /**
     * Select the list you want to create an item in
     * Default: {"mode":"list","value":""}
     */
    readonly list?: {
	value: string,
	mode: "list" | "id",
};

    readonly noticeUnsupportedFields?: string;

    /**
     * Default: {"mappingMode":"defineBelow","value":null}
     * Type options: {"loadOptionsDependsOn":["site.value","list.value"],"resourceMapper":{"resourceMapperMethod":"getMappingColumns","mode":"add","fieldWords":{"singular":"column","plural":"columns"},"addAllFields":true,"multiKeyMatch":false}}
     */
    readonly columns?: any;

    /**
     * Select the item you want to delete
     * Default: {"mode":"list","value":""}
     */
    readonly item?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Default: true
     */
    readonly simplify?: boolean;

    /**
     * The formula will be evaluated for each record. <a href="https://learn.microsoft.com/en-us/graph/filter-query-parameter">More info</a>.
     */
    readonly filter?: string;

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

    /**
     * Default: {}
     */
    readonly options?: { "fields"?: ("contentType" | "createdDateTime" | "createdBy" | "fields" | "id" | "lastModifiedDateTime" | "lastModifiedBy" | "parentReference" | "webUrl")[] };


}

