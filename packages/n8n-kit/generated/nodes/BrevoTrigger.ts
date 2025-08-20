// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Brevo/BrevoTrigger.node.ts' node

export const name = "sendInBlueTrigger" as const;
export const description =
	"Starts the workflow when Brevo events occur" as const;
export const version = 1 as const;
export const defaults = { name: "Brevo Trigger" } as const;
export const credentials = [
	{ name: "sendInBlueApi", required: true, displayOptions: { show: {} } },
] as const;

/**
 * Starts the workflow when Brevo events occur
 */
export interface BrevoTriggerNodeParameters {
	/**
	 * Default: "transactional"
	 */
	readonly type: "inbound" | "marketing" | "transactional";

	/**
	 * Default: []
	 */
	readonly events: (
		| "blocked"
		| "click"
		| "deferred"
		| "delivered"
		| "hardBounce"
		| "invalid"
		| "spam"
		| "opened"
		| "request"
		| "softBounce"
		| "uniqueOpened"
		| "unsubscribed"
		| "click"
		| "delivered"
		| "hardBounce"
		| "listAddition"
		| "opened"
		| "softBounce"
		| "spam"
		| "unsubscribed"
		| "inboundEmailProcessed"
	)[];
}
