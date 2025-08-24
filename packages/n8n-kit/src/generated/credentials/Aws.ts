// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/credentials/Aws.credentials.ts' credentials

export const name = "aws" as const;

/**
 * displayName: AWS
 * documentationUrl: aws
 */
export interface AwsCredentials {
    /** Default: "us-east-1" */
    readonly "region"?: "af-south-1" | "ap-east-1" | "ap-south-1" | "ap-south-2" | "ap-southeast-1" | "ap-southeast-2" | "ap-southeast-3" | "ap-southeast-4" | "ap-southeast-5" | "ap-southeast-7" | "ap-northeast-1" | "ap-northeast-2" | "ap-northeast-3" | "ca-central-1" | "ca-west-1" | "cn-north-1" | "cn-northwest-1" | "eu-central-1" | "eu-central-2" | "eu-north-1" | "eu-south-1" | "eu-south-2" | "eu-west-1" | "eu-west-2" | "eu-west-3" | "il-central-1" | "me-central-1" | "me-south-1" | "mx-central-1" | "sa-east-1" | "us-east-1" | "us-east-2" | "us-gov-east-1" | "us-west-1" | "us-west-2" | "us-gov-west-1";

    readonly "accessKeyId"?: string;

    /** Type options: {"password":true} */
    readonly "secretAccessKey"?: string;

    /** Support for temporary credentials from AWS STS */
    readonly "temporaryCredentials"?: boolean;

    /** Type options: {"password":true} */
    readonly "sessionToken"?: string;

    readonly "customEndpoints"?: boolean;

    /** If you use Amazon VPC to host n8n, you can establish a connection between your VPC and Rekognition using a VPC endpoint. Leave blank to use the default endpoint. */
    readonly "rekognitionEndpoint"?: string;

    /** If you use Amazon VPC to host n8n, you can establish a connection between your VPC and Lambda using a VPC endpoint. Leave blank to use the default endpoint. */
    readonly "lambdaEndpoint"?: string;

    /** If you use Amazon VPC to host n8n, you can establish a connection between your VPC and SNS using a VPC endpoint. Leave blank to use the default endpoint. */
    readonly "snsEndpoint"?: string;

    /** If you use Amazon VPC to host n8n, you can establish a connection between your VPC and SES using a VPC endpoint. Leave blank to use the default endpoint. */
    readonly "sesEndpoint"?: string;

    /** If you use Amazon VPC to host n8n, you can establish a connection between your VPC and SQS using a VPC endpoint. Leave blank to use the default endpoint. */
    readonly "sqsEndpoint"?: string;

    /** If you use Amazon VPC to host n8n, you can establish a connection between your VPC and S3 using a VPC endpoint. Leave blank to use the default endpoint. */
    readonly "s3Endpoint"?: string;

    /** Endpoint for AWS Systems Manager (SSM) */
    readonly "ssmEndpoint"?: string;

    readonly __name: "aws";
}
