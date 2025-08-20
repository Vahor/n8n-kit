// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Aws/Textract/AwsTextract.node.ts' node

export const name = "awsTextract" as const;
export const description = "Sends data to Amazon Textract" as const;
export const version = 1 as const;
export const defaults = {"name":"AWS Textract"} as const;
export const credentials = [{"name":"aws","required":true}] as const

/**
 * Sends data to Amazon Textract
 */
export interface AwsTextractNodeParameters {

    /**
     * Default: "analyzeExpense"
     */
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

