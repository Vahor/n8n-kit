// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/SendGrid/SendGrid.node.ts' node

export const name = "sendGrid" as const;
export const description = "Consume SendGrid API" as const;
export const version = 1 as const;
export const defaults = { name: "SendGrid" } as const;
export const credentials = [{ name: "sendGridApi", required: true }] as const;

/**
 * Consume SendGrid API
 */
export interface SendGridNodeParameters {
	/**
	 * Default: "list"
	 */
	readonly resource: "contact" | "list" | "mail";
}
