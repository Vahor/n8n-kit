// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Aws/IAM/AwsIam.node.ts' node

export const name = "awsIam" as const;
export const description = "Interacts with Amazon IAM" as const;
export const version = 1 as const;
export const defaults = {"name":"AWS IAM"} as const;
export const credentials = [{"name":"aws","required":true}] as const

/**
 * Interacts with Amazon IAM
 */
export interface AwsIamNodeParameters {

    /**
     * Default: "user"
     */
    readonly resource?: "user" | "group";


}

