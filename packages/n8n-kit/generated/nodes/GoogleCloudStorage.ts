// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Google/CloudStorage/GoogleCloudStorage.node.ts' node

export const name = "googleCloudStorage" as const;
export const description = "Use the Google Cloud Storage API" as const;
export const version = 1 as const;
export const defaults = {"name":"Google Cloud Storage"} as const;
export const credentials = [{"name":"googleCloudStorageOAuth2Api","required":true,"testedBy":{"request":{"method":"GET","url":"/b/"}}}] as const

/**
 * Use the Google Cloud Storage API
 */
export interface GoogleCloudStorageNodeParameters {

    /**
     * Default: "bucket"
     */
    readonly resource?: "bucket" | "object";

    /**
     * Default: "getAll"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "update";

    /**
     */
    readonly projectId?: string;

    /**
     */
    readonly bucketName?: string;

    /**
     */
    readonly prefix?: string;

    /**
     * Default: "noAcl"
     */
    readonly projection?: "full" | "noAcl";

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Default: {}
     */
    readonly getFilters?: { "ifMetagenerationMatch"?: number, "ifMetagenerationNotMatch"?: number };

    /**
     * Default: {}
     */
    readonly createAcl?: { "predefinedAcl"?: "authenticatedRead" | "private" | "projectPrivate" | "publicRead" | "publicReadWrite", "predefinedDefaultObjectAcl"?: "authenticatedRead" | "bucketOwnerFullControl" | "bucketOwnerRead" | "private" | "projectPrivate" | "publicRead" };

    /**
     * Default: {}
     */
    readonly createBody?: { "acl"?: string, "billing"?: string, "cors"?: string, "customPlacementConfig"?: string, "dataLocations"?: string, "defaultEventBasedHold"?: boolean, "defaultObjectAcl"?: string, "encryption"?: string, "iamConfiguration"?: string, "labels"?: string, "lifecycle"?: string, "location"?: string, "logging"?: string, "retentionPolicy"?: string, "rpo"?: string, "storageClass"?: string, "versioning"?: string, "website"?: string };

    /**
     */
    readonly objectName?: string;

    /**
     * Default: "full"
     */
    readonly updateProjection?: "full" | "noAcl";

    /**
     * Default: "json"
     */
    readonly alt?: "json" | "media";

    /**
     * Whether the data for creating a file should come from a binary field
     * Default: true
     */
    readonly createFromBinary?: boolean;

    /**
     * Default: "data"
     */
    readonly createBinaryPropertyName?: string;

    /**
     * Content of the file to be uploaded
     */
    readonly createContent?: string;

    /**
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":1000}
     */
    readonly maxResults?: number;

    /**
     * Default: {}
     */
    readonly createData?: { "acl"?: string, "cacheControl"?: string, "contentDisposition"?: string, "contentEncoding"?: string, "contentLanguage"?: string, "contentType"?: string, "crc32c"?: string, "customTime"?: string, "eventBasedHold"?: boolean, "md5Hash"?: string, "metadata"?: string, "storageClass"?: string, "temporaryHold"?: boolean };

    /**
     * Default: {"acl":"[]"}
     */
    readonly updateData?: { "acl"?: string, "cacheControl"?: string, "contentDisposition"?: string, "contentEncoding"?: string, "contentLanguage"?: string, "contentType"?: string, "customTime"?: string, "eventBasedHold"?: boolean, "metadata"?: string, "temporaryHold"?: boolean };

    /**
     * Default: {}
     */
    readonly createQuery?: { "contentEncoding"?: string, "generation"?: number, "ifGenerationMatch"?: number, "ifGenerationNotMatch"?: number, "ifMetagenerationMatch"?: number, "ifMetagenerationNotMatch"?: number, "kmsKeyName"?: string, "predefinedAcl"?: "authenticatedRead" | "bucketOwnerFullControl" | "bucketOwnerRead" | "private" | "projectPrivate" | "publicRead" };

    /**
     * Default: {}
     */
    readonly getParameters?: { "generation"?: number, "ifGenerationMatch"?: number, "ifGenerationNotMatch"?: number, "ifMetagenerationMatch"?: number, "ifMetagenerationNotMatch"?: number };

    /**
     * Default: {}
     */
    readonly metagenAndAclQuery?: { "generation"?: number, "ifGenerationMatch"?: number, "ifGenerationNotMatch"?: number, "ifMetagenerationMatch"?: number, "ifMetagenerationNotMatch"?: number, "predefinedAcl"?: "authenticatedRead" | "bucketOwnerFullControl" | "bucketOwnerRead" | "private" | "projectPrivate" | "publicRead" };

    /**
     * Default: {}
     */
    readonly encryptionHeaders?: { "X-Goog-Encryption-Algorithm"?: "AES256", "X-Goog-Encryption-Key"?: string, "X-Goog-Encryption-Key-Sha256"?: string };

    /**
     * Default: {}
     */
    readonly listFilters?: { "delimiter"?: string, "endOffset"?: string, "includeTrailingDelimiter"?: boolean, "prefix"?: string, "startOffset"?: string, "versions"?: boolean };


}

