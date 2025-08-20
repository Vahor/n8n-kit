// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Trello/Trello.node.ts' node

export const name = "trello" as const;
export const description =
	"Create, change and delete boards and cards" as const;
export const version = 1 as const;
export const defaults = { name: "Trello" } as const;
export const credentials = [{ name: "trelloApi", required: true }] as const;

/**
 * Create, change and delete boards and cards
 */
export interface TrelloNodeParameters {
	/**
	 * Default: "card"
	 */
	readonly resource?:
		| "attachment"
		| "board"
		| "boardMember"
		| "card"
		| "cardComment"
		| "checklist"
		| "label"
		| "list";
}
