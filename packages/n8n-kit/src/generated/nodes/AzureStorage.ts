// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Microsoft/Storage/AzureStorage.node.ts' node

export const description = "Interact with Azure Storage API" as const;
export const type = "n8n-nodes-base.azureStorage" as const;
export const version = 1 as const;
export const credentials = [{"name":"azureStorageOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}},{"name":"azureStorageSharedKeyApi","required":true,"displayOptions":{"show":{"authentication":["sharedKey"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface AzureStorageNodeParameters {
    /** Default: "sharedKey" */
    readonly authentication?: "oAuth2" | "sharedKey";

    /** Default: "container" */
    readonly resource?: "blob" | "container";

    /** Default: "getAll" */
    readonly operation?: "create" | "delete" | "get" | "getAll";

    /**
     * Container to create or replace a blob in
     * Default: {"mode":"list","value":""}
     */
    readonly container?: {
	value: string,
	mode: "list" | "id",
};

    /** The name of the new or existing blob */
    readonly blobCreate?: string;

    /** Default: "binary" */
    readonly from?: "binary" | "url";

    /**
     * The name of the input binary field containing the file to be written
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /** URL where to read of the blob contents from */
    readonly url?: string;

    /** Default: {} */
    readonly options?: { accessTier?: "Archive" | "Cold" | "Cool" | "Hot", blobType?: "BlockBlob" | "PageBlob" | "AppendBlob", cacheControl?: string, contentCrc64?: string, contentEncoding?: string, contentLanguage?: string, contentMd5?: string, contentType?: string, encryptionContext?: string, encryptionScope?: string, expiryOption?: "Absolute" | "NeverExpire", expiryTime?: string, filename?: string, immutabilityPolicyUntilDate?: string, immutabilityPolicyMode?: string, leaseId?: string, legalHold?: boolean, metadata?: { metadataValues: Array<{ fieldName?: string, fieldValue?: string }> }, origin?: string, tags?: { tagValues: Array<{ tagName?: string, tagValue?: string }> } } | { leaseId?: string } | { leaseId?: string, origin?: string, simplify?: boolean, upn?: boolean } | { fields?: ("copy" | "deleted" | "deletedwithversions" | "immutabilitypolicy" | "legalhold" | "metadata" | "permissions" | "snapshots" | "tags" | "uncommittedblobs" | "versions")[], filter?: ("deleted" | "files" | "directories")[], simplify?: boolean, upn?: boolean } | { accessLevel?: "blob" | "container" | "", metadata?: { metadataValues: Array<{ fieldName?: string, fieldValue?: string }> } } | { simplify?: boolean } | { fields?: ("metadata" | "deleted" | "system")[], filter?: string };

    /**
     * Blob to be deleted
     * Default: {"mode":"list","value":""}
     */
    readonly blob?: {
	value: string,
	mode: "list" | "id",
};

    /** Whether to return all results or only up to a given limit */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /** The name of the new container */
    readonly containerCreate?: string;

}
