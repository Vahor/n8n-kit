// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Aws/SQS/AwsSqs.node.ts' node

export const description = "Sends messages to AWS SQS" as const;
export const type = "n8n-nodes-base.awsSqs" as const;
export const version = 1 as const;
export const credentials = [{"name":"aws","required":true,"displayOptions":{"show":{"authentication":["iam"]}}},{"name":"awsAssumeRole","required":true,"displayOptions":{"show":{"authentication":["assumeRole"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface AwsSqsNodeParameters {
    /** Default: "iam" */
    readonly authentication?: "iam" | "assumeRole";

    /** Default: "sendMessage" */
    readonly operation?: "sendMessage";

    /**
     * Queue to send a message to. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getQueues"}
     */
    readonly queue?: string;

    /** Default: "standard" */
    readonly queueType?: "fifo" | "standard";

    /**
     * Whether to send the data the node receives as JSON to SQS
     * Default: true
     */
    readonly sendInputData?: boolean;

    /** Message to send to the queue */
    readonly message?: string;

    /** Tag that specifies that a message belongs to a specific message group. Applies only to FIFO (first-in-first-out) queues. */
    readonly messageGroupId?: string;

    /** Default: {} */
    readonly options?: { delaySeconds?: number, messageAttributes?: { binary: Array<{ name?: string, dataPropertyName?: string }>, number: Array<{ name?: string, value?: number }>, string: Array<{ name?: string, value?: string }> }, messageDeduplicationId?: string };

}
