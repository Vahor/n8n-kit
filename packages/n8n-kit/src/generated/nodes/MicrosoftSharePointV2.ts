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
    readonly resource?: "file" | "list";

    /** Default: "upload" */
    readonly operation?: "upload" | "get" | "getAll";

    /**
     * Select the site to upload to
     * Default: {"mode":"list","value":""}
     */
    readonly site?: {
	value: string,
	mode: "list" | "url" | "id",
};

    /**
     * Select the folder to upload the file to
     * Default: {"mode":"list","value":""}
     * Type options: {"loadOptionsDependsOn":["site.value"]}
     */
    readonly folder?: {
	value: string,
	mode: "list" | "id",
};

    /** Name the file will have in SharePoint */
    readonly fileName?: string;

    /** Default: "data" */
    readonly binaryPropertyName?: string;

    /**
     * Select the list you want to retrieve
     * Default: {"mode":"list","value":""}
     */
    readonly list?: {
	value: string,
	mode: "list" | "id",
};

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simplify?: boolean;

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

}
