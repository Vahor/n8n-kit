// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/S3.credentials.ts' credentials

export const name = "s3" as const;

/**
 * displayName: S3
 * documentationUrl: s3
 */
export interface S3Credentials {
    readonly "endpoint"?: string;

    /**
     * Default: "us-east-1"
     */
    readonly "region"?: string;

    readonly "accessKeyId"?: string;

    /**
     * Type options: {"password":true}
     */
    readonly "secretAccessKey"?: string;

    readonly "forcePathStyle"?: boolean;

    /**
     * Whether to connect even if SSL certificate validation is not possible
     */
    readonly "ignoreSSLIssues"?: boolean;

    readonly __name: "s3";
}
