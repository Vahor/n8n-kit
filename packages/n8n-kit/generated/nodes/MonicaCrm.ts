// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/MonicaCrm/MonicaCrm.node.ts' node

export const name = "monicaCrm" as const;
export const description = "Consume the Monica CRM API" as const;
export const version = 1 as const;
export const defaults = { name: "Monica CRM" } as const;
export const credentials = [{ name: "monicaCrmApi", required: true }] as const;

/**
 * Consume the Monica CRM API
 */
export interface MonicaCrmNodeParameters {
	/**
	 * Default: "contact"
	 */
	readonly resource?:
		| "activity"
		| "call"
		| "contact"
		| "contactField"
		| "contactTag"
		| "conversation"
		| "conversationMessage"
		| "journalEntry"
		| "note"
		| "reminder"
		| "tag"
		| "task";
}
