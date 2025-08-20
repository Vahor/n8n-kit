// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Mailjet/MailjetTrigger.node.ts' node

export const name = "mailjetTrigger" as const;
export const description = "Handle Mailjet events via webhooks" as const;
export const version = 1 as const;
export const defaults = { name: "Mailjet Trigger" } as const;
export const credentials = [
	{ name: "mailjetEmailApi", required: true },
] as const;

/**
 * Handle Mailjet events via webhooks
 */
export interface MailjetTriggerNodeParameters {
	/**
	 * Determines which resource events the webhook is triggered for
	 * Default: "open"
	 */
	readonly event: "blocked" | "bounce" | "open" | "sent" | "spam" | "unsub";
}
