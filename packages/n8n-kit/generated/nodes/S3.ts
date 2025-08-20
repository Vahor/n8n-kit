// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/S3/S3.node.js' node

export const name = "s3" as const;
export const description = "Sends data to any S3-compatible service" as const;
export const version = 1 as const;
export const defaults = {"name":"S3"} as const;
export const credentials = [{"name":"s3","required":true}] as const

/**
 * Sends data to any S3-compatible service
 */
export interface S3NodeParameters {

    /**
     * Default: "file"
     */
    readonly resource?: "bucket" | "file" | "folder";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "getAll" | "search" | "copy" | "download" | "upload";

    /**
     * A succinct description of the nature, symptoms, cause, or effect of the bucket
     */
    readonly name?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "acl"?: "authenticatedRead" | "Private" | "publicRead" | "publicReadWrite", "bucketObjectLockEnabled"?: boolean, "grantFullControl"?: boolean, "grantRead"?: boolean, "grantReadAcp"?: boolean, "grantWrite"?: boolean, "grantWriteAcp"?: boolean, "region"?: string, "delimiter"?: string, "encodingType"?: "url", "fetchOwner"?: boolean, "prefix"?: string, "requesterPays"?: boolean, "startAfter"?: string, "parentFolderKey"?: string, "storageClass"?: "deepArchive" | "glacier" | "intelligentTiering" | "onezoneIA" | "RecudedRedundancy" | "standard" | "standardIA", "lockLegalHold"?: boolean, "lockMode"?: "governance" | "compliance", "lockRetainUntilDate"?: string, "metadataDirective"?: "copy" | "replace", "serverSideEncryption"?: "AES256" | "aws:kms", "serverSideEncryptionContext"?: string, "encryptionAwsKmsKeyId"?: string, "serversideEncryptionCustomerAlgorithm"?: string, "serversideEncryptionCustomerKey"?: string, "serversideEncryptionCustomerKeyMD5"?: string, "taggingDirective"?: "copy" | "replace" };

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /**
     */
    readonly bucketName?: string;

    /**
     */
    readonly folderName?: string;

    /**
     */
    readonly folderKey?: string;

    /**
     * Default: {}
     */
    readonly options?: { "fetchOwner"?: boolean, "folderKey"?: string, "versionId"?: string };

    /**
     * The name of the source bucket and key name of the source object, separated by a slash (/)
     */
    readonly sourcePath?: string;

    /**
     * The name of the destination bucket and key name of the destination object, separated by a slash (/)
     */
    readonly destinationPath?: string;

    /**
     */
    readonly fileName?: string;

    /**
     * Whether the data to upload should be taken from binary field
     * Default: true
     */
    readonly binaryData?: boolean;

    /**
     * The text content of the file to upload
     */
    readonly fileContent?: string;

    /**
     * Name of the binary property which contains the data for the file to be uploaded
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * Optional extra headers to add to the message (most headers are allowed)
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly tagsUi?: { "tagsValues": any };

    /**
     */
    readonly fileKey?: string;


}

