// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Microsoft/SharePoint/MicrosoftSharePoint.node.ts' node

export const name = "microsoftSharePoint" as const;
export const description = "Interact with Microsoft SharePoint API" as const;
export const version = 1 as const;

/**
 * Interact with Microsoft SharePoint API
 */
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
    readonly site?: any | any | any | any | any | any | any | any | any | any | any;

    /**
     * Select the folder to download the file from
     * Default: {"mode":"list","value":""}
     */
    readonly folder?: any | any | any;

    /**
     * Select the file to download
     * Default: {"mode":"list","value":""}
     */
    readonly file?: any | any;

    /**
     * If not specified, the original file name will be used
     */
    readonly fileName?: string | string;

    /**
     * Whether to update the file contents
     */
    readonly changeFileContent?: boolean;

    /**
     * Find the name of input field containing the binary data to update the file with in the Input panel on the left, in the Binary tab
     */
    readonly fileContents?: string | string;

    /**
     * Select the list you want to create an item in
     * Default: {"mode":"list","value":""}
     */
    readonly list?: any | any | any | any | any | any | any;

    /**
     */
    readonly noticeUnsupportedFields?: string | string | string;

    /**
     * Default: {"mappingMode":"defineBelow","value":null}
     * Type options: {"loadOptionsDependsOn":["site.value","list.value"],"resourceMapper":{"resourceMapperMethod":"getMappingColumns","mode":"add","fieldWords":{"singular":"column","plural":"columns"},"addAllFields":true,"multiKeyMatch":false}}
     */
    readonly columns?: any | any | any;

    /**
     * Select the item you want to delete
     * Default: {"mode":"list","value":""}
     */
    readonly item?: any | any;

    /**
     * Default: true
     */
    readonly simplify?: boolean | boolean | boolean | boolean;

    /**
     * The formula will be evaluated for each record. <a href="https://learn.microsoft.com/en-us/graph/filter-query-parameter">More info</a>.
     */
    readonly filter?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean | boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly limit?: number | number;

    /**
     * Default: {}
     */
    readonly options?: { "fields"?: ("contentType" | "createdDateTime" | "createdBy" | "fields" | "id" | "lastModifiedDateTime" | "lastModifiedBy" | "parentReference" | "webUrl")[] };


}

