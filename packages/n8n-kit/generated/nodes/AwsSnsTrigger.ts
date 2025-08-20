// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Aws/AwsSnsTrigger.node.js' node

export const name = "awsSnsTrigger" as const;
export const description = "Handle AWS SNS events via webhooks" as const;
export const version = 1 as const;
export const defaults = {"name":"AWS SNS Trigger"} as const;
export const credentials = [{"name":"aws","required":true}] as const

/**
 * Handle AWS SNS events via webhooks
 */
export interface AwsSnsTriggerNodeParameters {

    /**
     * Default: {"mode":"list","value":""}
     */
    readonly topic: any;


}

