// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Aws/Textract/AwsTextract.node.ts' node

export const description = "Sends data to Amazon Textract" as const;
export const type = "n8n-nodes-base.awsTextract" as const;
export const version = 1 as const;
export const credentials = [{"name":"aws","required":true,"displayOptions":{"show":{"authentication":["iam"]}}},{"name":"awsAssumeRole","required":true,"displayOptions":{"show":{"authentication":["assumeRole"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface AwsTextractNodeParameters {
    /** Default: "iam" */
    readonly authentication?: "iam" | "assumeRole";

    /** Default: "analyzeExpense" */
    readonly operation?: "analyzeExpense";

    /**
     * The name of the input field containing the binary file data to be uploaded. Supported file types: PNG, JPEG.
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;

}
