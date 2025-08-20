// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Intercom/Intercom.node.ts' node

export const name = "intercom" as const;
export const description = "Consume Intercom API" as const;
export const version = 1 as const;
export const defaults = { name: "Intercom" } as const;
export const credentials = [{ name: "intercomApi", required: true }] as const;

/**
 * Consume Intercom API
 */
export interface IntercomNodeParameters {
	/**
	 * Default: "user"
	 */
	readonly resource?: "company" | "lead" | "user";
}
