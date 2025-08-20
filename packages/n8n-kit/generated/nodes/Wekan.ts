// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Wekan/Wekan.node.ts' node

export const name = "wekan" as const;
export const description = "Consume Wekan API" as const;
export const version = 1 as const;
export const defaults = { name: "Wekan" } as const;
export const credentials = [{ name: "wekanApi", required: true }] as const;

/**
 * Consume Wekan API
 */
export interface WekanNodeParameters {
	/**
	 * Default: "card"
	 */
	readonly resource?:
		| "board"
		| "card"
		| "cardComment"
		| "checklist"
		| "checklistItem"
		| "list";
}
