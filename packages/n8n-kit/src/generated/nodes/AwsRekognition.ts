// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Aws/Rekognition/AwsRekognition.node.ts' node

export const name = "awsRekognition" as const;
export const description = "Sends data to AWS Rekognition" as const;
export const version = 1 as const;
export const credentials = [{"name":"aws","required":true}] as const;

/**
 * Sends data to AWS Rekognition
 */
export interface AwsRekognitionNodeParameters {

    /**
     * Default: "image"
     */
    readonly resource?: "image";

    /**
     * Default: "analyze"
     */
    readonly operation?: "analyze";

    /**
     * Default: "detectFaces"
     */
    readonly type?: "detectFaces" | "detectLabels" | "detectModerationLabels" | "detectText" | "recognizeCelebrity";

    /**
     * Whether the image to analyze should be taken from binary field
     */
    readonly binaryData?: boolean;

    /**
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * Name of the S3 bucket
     */
    readonly bucket?: string;

    /**
     * S3 object key name
     */
    readonly name?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "regionsOfInterestUi"?: { "regionsOfInterestValues": any }, "version"?: string, "wordFilterUi"?: { "MinBoundingBoxHeight"?: number, "MinBoundingBoxWidth"?: number, "MinConfidence"?: number }, "maxLabels"?: number, "minConfidence"?: number, "attributes"?: ("all" | "default")[] };


}

