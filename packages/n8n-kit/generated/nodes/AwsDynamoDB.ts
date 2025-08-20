// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Aws/DynamoDB/AwsDynamoDB.node.ts' node

export const name = "awsDynamoDb" as const;
export const description = "Consume the AWS DynamoDB API" as const;
export const version = 1 as const;
export const defaults = {"name":"AWS DynamoDB"} as const;
export const credentials = [{"name":"aws","required":true}] as const

/**
 * Consume the AWS DynamoDB API
 */
export interface AwsDynamoDBNodeParameters {

    /**
     * Default: "item"
     */
    readonly resource?: "item";


}

