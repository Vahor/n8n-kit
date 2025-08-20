// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/FreshworksCrm/FreshworksCrm.node.ts' node

export const name = "freshworksCrm" as const;
export const description = "Consume the Freshworks CRM API" as const;
export const version = 1 as const;
export const defaults = { name: "Freshworks CRM" } as const;
export const credentials = [
	{ name: "freshworksCrmApi", required: true },
] as const;

/**
 * Consume the Freshworks CRM API
 */
export interface FreshworksCrmNodeParameters {
	/**
	 * Default: "account"
	 */
	readonly resource?:
		| "account"
		| "appointment"
		| "contact"
		| "deal"
		| "note"
		| "salesActivity"
		| "search"
		| "task";
}
