// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Microsoft/Storage/AzureStorage.node.ts' node

export const name = "azureStorage" as const;
export const description = "Interact with Azure Storage API" as const;
export const version = 1 as const;
export const defaults = {"name":"Azure Storage"} as const;
export const credentials = [{"name":"azureStorageOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}},{"name":"azureStorageSharedKeyApi","required":true,"displayOptions":{"show":{"authentication":["sharedKey"]}}}] as const

/**
 * Interact with Azure Storage API
 */
export interface AzureStorageNodeParameters {

    /**
     * Default: "sharedKey"
     */
    readonly authentication?: "oAuth2" | "sharedKey";

    /**
     * Default: "container"
     */
    readonly resource?: "blob" | "container";

    /**
     * Default: "getAll"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll";

    /**
     * Container to create or replace a blob in
     * Default: {"mode":"list","value":""}
     */
    readonly container?: any;

    /**
     * The name of the new or existing blob
     */
    readonly blobCreate?: string;

    /**
     * Default: "binary"
     */
    readonly from?: "binary" | "url";

    /**
     * The name of the input binary field containing the file to be written
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * URL where to read of the blob contents from
     */
    readonly url?: string;

    /**
     * Default: {}
     */
    readonly options?: { "accessTier"?: "Archive" | "Cold" | "Cool" | "Hot", "blobType"?: "BlockBlob" | "PageBlob" | "AppendBlob", "cacheControl"?: string, "contentCrc64"?: string, "contentEncoding"?: string, "contentLanguage"?: string, "contentMd5"?: string, "contentType"?: string, "encryptionContext"?: string, "encryptionScope"?: string, "expiryOption"?: "Absolute" | "NeverExpire", "expiryTime"?: string, "filename"?: string, "immutabilityPolicyUntilDate"?: string, "immutabilityPolicyMode"?: string, "leaseId"?: string, "legalHold"?: boolean, "metadata"?: { "metadataValues": any }, "origin"?: string, "tags"?: { "tagValues": any }, "simplify"?: boolean, "upn"?: boolean, "fields"?: ("copy" | "deleted" | "deletedwithversions" | "immutabilitypolicy" | "legalhold" | "metadata" | "permissions" | "snapshots" | "tags" | "uncommittedblobs" | "versions")[], "filter"?: ("deleted" | "files" | "directories")[], "accessLevel"?: "blob" | "container" | "" };

    /**
     * Blob to be deleted
     * Default: {"mode":"list","value":""}
     */
    readonly blob?: any;

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
     * The name of the new container
     */
    readonly containerCreate?: string;


}

