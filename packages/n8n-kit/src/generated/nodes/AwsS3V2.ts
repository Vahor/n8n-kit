// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Aws/S3/V2/AwsS3V2.node.ts' node

export const description = "Sends data to AWS S3" as const;
export const type = "n8n-nodes-base.awsS3" as const;
export const version = 2 as const;
export const credentials = [{"name":"aws","required":true}] as const;
export const outputs = {"main":"main"} as const;

export interface AwsS3V2NodeParameters {

    /**
     * Default: "file"
     */
    readonly resource?: "bucket" | "file" | "folder";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "getAll" | "search" | "create" | "delete" | "getAll" | "copy" | "delete" | "download" | "getAll" | "upload";

    /**
     * A succinct description of the nature, symptoms, cause, or effect of the bucket
     */
    readonly name?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "acl"?: "authenticatedRead" | "Private" | "publicRead" | "publicReadWrite", "bucketObjectLockEnabled"?: boolean, "grantFullControl"?: boolean, "grantRead"?: boolean, "grantReadAcp"?: boolean, "grantWrite"?: boolean, "grantWriteAcp"?: boolean, "region"?: string } | { "delimiter"?: string, "encodingType"?: "url", "fetchOwner"?: boolean, "prefix"?: string, "requesterPays"?: boolean, "startAfter"?: string } | { "parentFolderKey"?: string, "requesterPays"?: boolean, "storageClass"?: "deepArchive" | "glacier" | "intelligentTiering" | "onezoneIA" | "RecudedRedundancy" | "standard" | "standardIA" } | { "acl"?: "authenticatedRead" | "awsExecRead" | "bucketOwnerFullControl" | "bucketOwnerRead" | "private" | "publicRead" | "publicReadWrite", "grantFullControl"?: boolean, "grantRead"?: boolean, "grantReadAcp"?: boolean, "grantWriteAcp"?: boolean, "lockLegalHold"?: boolean, "lockMode"?: "governance" | "compliance", "lockRetainUntilDate"?: string, "metadataDirective"?: "copy" | "replace", "requesterPays"?: boolean, "serverSideEncryption"?: "AES256" | "aws:kms", "serverSideEncryptionContext"?: string, "encryptionAwsKmsKeyId"?: string, "serversideEncryptionCustomerAlgorithm"?: string, "serversideEncryptionCustomerKey"?: string, "serversideEncryptionCustomerKeyMD5"?: string, "storageClass"?: "deepArchive" | "glacier" | "intelligentTiering" | "onezoneIA" | "standard" | "standardIA", "taggingDirective"?: "copy" | "replace" } | { "acl"?: "authenticatedRead" | "awsExecRead" | "bucketOwnerFullControl" | "bucketOwnerRead" | "private" | "publicRead" | "publicReadWrite", "grantFullControl"?: boolean, "grantRead"?: boolean, "grantReadAcp"?: boolean, "grantWriteAcp"?: boolean, "lockLegalHold"?: boolean, "lockMode"?: "governance" | "compliance", "lockRetainUntilDate"?: string, "parentFolderKey"?: string, "requesterPays"?: boolean, "serverSideEncryption"?: "AES256" | "aws:kms", "serverSideEncryptionContext"?: string, "encryptionAwsKmsKeyId"?: string, "serversideEncryptionCustomerAlgorithm"?: string, "serversideEncryptionCustomerKey"?: string, "serversideEncryptionCustomerKeyMD5"?: string, "storageClass"?: "deepArchive" | "glacier" | "intelligentTiering" | "onezoneIA" | "standard" | "standardIA" };

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

    readonly bucketName?: string;

    readonly folderName?: string;

    readonly folderKey?: string;

    /**
     * Default: {}
     */
    readonly options?: { "fetchOwner"?: boolean, "folderKey"?: string } | { "versionId"?: string };

    /**
     * The name of the source bucket should start with (/) and key name of the source object, separated by a slash (/)
     */
    readonly sourcePath?: string;

    /**
     * The name of the destination bucket and key name of the destination object, separated by a slash (/)
     */
    readonly destinationPath?: string;

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
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * Optional extra headers to add to the message (most headers are allowed)
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly tagsUi?: { "tagsValues": any };

    readonly fileKey?: string;


}

