// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Aws/Cognito/AwsCognito.node.ts' node

export const name = "awsCognito" as const;
export const description = "Sends data to AWS Cognito" as const;
export const version = 1 as const;
export const defaults = {"name":"AWS Cognito"} as const;
export const credentials = [{"name":"aws","required":true}] as const

/**
 * Sends data to AWS Cognito
 */
export interface AwsCognitoNodeParameters {

    /**
     * Default: "user"
     */
    readonly resource?: "group" | "user" | "userPool";


}

