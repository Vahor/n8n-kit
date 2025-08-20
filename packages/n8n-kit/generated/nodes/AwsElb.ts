// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Aws/ELB/AwsElb.node.ts' node

export const name = "awsElb" as const;
export const description = "Sends data to AWS ELB API" as const;
export const version = 1 as const;
export const defaults = {"name":"AWS ELB"} as const;
export const credentials = [{"name":"aws","required":true}] as const

/**
 * Sends data to AWS ELB API
 */
export interface AwsElbNodeParameters {

    /**
     * Default: "loadBalancer"
     */
    readonly resource?: "listenerCertificate" | "loadBalancer";


}

