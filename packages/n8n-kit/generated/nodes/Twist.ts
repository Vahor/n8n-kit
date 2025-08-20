// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Twist/Twist.node.ts' node

export const name = "twist" as const;
export const description = "Consume Twist API" as const;
export const version = 1 as const;
export const defaults = { name: "Twist" } as const;
export const credentials = [
	{ name: "twistOAuth2Api", required: true },
] as const;

/**
 * Consume Twist API
 */
export interface TwistNodeParameters {
	/**
	 * Default: "messageConversation"
	 */
	readonly resource?: "channel" | "comment" | "messageConversation" | "thread";
}
