// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Aws/AwsSns.node.ts' node

export const description = "Sends data to AWS SNS" as const;
export const type = "n8n-nodes-base.awsSns" as const;
export const version = 1 as const;
export const credentials = [{"name":"aws","required":true}] as const;

/**
 * Sends data to AWS SNS
 */
export interface AwsSnsNodeParameters {

    /**
     * Default: "publish"
     */
    readonly operation?: "create" | "delete" | "publish";

    readonly name?: string;

    /**
     * Default: {}
     */
    readonly options?: { "displayName"?: string, "fifoTopic"?: boolean };

    /**
     * Default: {"mode":"list","value":""}
     */
    readonly topic?: any;

    /**
     * Subject when the message is delivered to email endpoints
     */
    readonly subject?: string;

    /**
     * The message you want to send
     */
    readonly message?: string;


}

