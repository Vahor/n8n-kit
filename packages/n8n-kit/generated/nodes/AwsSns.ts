// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Aws/AwsSns.node.ts' node

export const name = "awsSns" as const;
export const description = "Sends data to AWS SNS" as const;
export const version = 1 as const;
export const defaults = { name: "AWS SNS" } as const;
export const credentials = [{ name: "aws", required: true }] as const;

/**
 * Sends data to AWS SNS
 */
export interface AwsSnsNodeParameters {
	/**
	 * Default: "publish"
	 */
	readonly operation?: "create" | "delete" | "publish";

	/**
	 */
	readonly name: string;

	/**
	 * Default: {}
	 */
	readonly options?: { displayName: string; fifoTopic: boolean };

	/**
	 * Default: {"mode":"list","value":""}
	 */
	readonly topic: any;

	/**
	 * Subject when the message is delivered to email endpoints
	 */
	readonly subject: string;

	/**
	 * The message you want to send
	 */
	readonly message: string;
}
