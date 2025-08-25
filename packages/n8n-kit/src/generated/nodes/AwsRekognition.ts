// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Aws/Rekognition/AwsRekognition.node.ts' node

export const description = "Sends data to AWS Rekognition" as const;
export const type = "n8n-nodes-base.awsRekognition" as const;
export const version = 1 as const;
export const credentials = [{"name":"aws","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface AwsRekognitionNodeParameters {
    /** Default: "image" */
    readonly resource?: "image";

    /** Default: "analyze" */
    readonly operation?: "analyze";

    /** Default: "detectFaces" */
    readonly type?: "detectFaces" | "detectLabels" | "detectModerationLabels" | "detectText" | "recognizeCelebrity";

    /** Whether the image to analyze should be taken from binary field */
    readonly binaryData?: boolean;

    /** Default: "data" */
    readonly binaryPropertyName?: string;

    /** Name of the S3 bucket */
    readonly bucket?: string;

    /** S3 object key name */
    readonly name?: string;

    /** Default: {} */
    readonly additionalFields?: { regionsOfInterestUi?: { regionsOfInterestValues: Array<{ height?: number, left?: number, top?: number, Width?: number }> }, version?: string, wordFilterUi?: { MinBoundingBoxHeight?: number, MinBoundingBoxWidth?: number, MinConfidence?: number }, maxLabels?: number, minConfidence?: number, attributes?: ("all" | "default")[] };

}
