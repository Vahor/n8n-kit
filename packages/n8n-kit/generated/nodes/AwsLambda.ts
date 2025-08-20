// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Aws/AwsLambda.node.js' node

export const name = "awsLambda" as const;
export const description = "Invoke functions on AWS Lambda" as const;
export const version = 1 as const;
export const defaults = {"name":"AWS Lambda"} as const;
export const credentials = [{"name":"aws","required":true}] as const

/**
 * Invoke functions on AWS Lambda
 */
export interface AwsLambdaNodeParameters {

    /**
     * Default: "invoke"
     */
    readonly operation?: "invoke";

    /**
     * The function you want to invoke. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code-examples/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getFunctions"}
     */
    readonly function?: string;

    /**
     * Specify a version or alias to invoke a published version of the function
     * Default: "$LATEST"
     */
    readonly qualifier?: string;

    /**
     * Specify if the workflow should wait for the function to return the results
     * Default: "RequestResponse"
     */
    readonly invocationType?: "RequestResponse" | "Event";

    /**
     * The JSON that you want to provide to your Lambda function as input
     */
    readonly payload?: string;


}

