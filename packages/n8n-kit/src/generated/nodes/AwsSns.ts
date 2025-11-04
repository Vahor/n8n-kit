// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Aws/AwsSns.node.ts' node

export const description = "Sends data to AWS SNS" as const;
export const type = "n8n-nodes-base.awsSns" as const;
export const version = 1 as const;
export const credentials = [{"name":"aws","required":true,"displayOptions":{"show":{"authentication":["iam"]}}},{"name":"awsAssumeRole","required":true,"displayOptions":{"show":{"authentication":["assumeRole"]}}}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface AwsSnsNodeParameters {
    /** Default: "iam" */
    readonly authentication?: "iam" | "assumeRole";

    /** Default: "publish" */
    readonly operation?: "create" | "delete" | "publish";

    readonly name?: string;

    /** Default: {} */
    readonly options?: { displayName?: string, fifoTopic?: boolean };

    /** Default: {"mode":"list","value":""} */
    readonly topic?: {
	value: string,
	mode: "list" | "url" | "id",
};

    /** Subject when the message is delivered to email endpoints */
    readonly subject?: string;

    /** The message you want to send */
    readonly message?: string;

}
