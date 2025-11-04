// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Aws/AwsSnsTrigger.node.ts' node

export const description = "Handle AWS SNS events via webhooks" as const;
export const type = "n8n-nodes-base.awsSnsTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"aws","required":true,"displayOptions":{"show":{"authentication":["iam"]}}},{"name":"awsAssumeRole","required":true,"displayOptions":{"show":{"authentication":["assumeRole"]}}}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface AwsSnsTriggerNodeParameters {
    /** Default: "iam" */
    readonly authentication?: "iam" | "assumeRole";

    /** Default: {"mode":"list","value":""} */
    readonly topic?: {
	value: string,
	mode: "list" | "url" | "id",
};

}
