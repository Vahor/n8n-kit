// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Ghost/Ghost.node.ts' node

export const name = "ghost" as const;
export const description = "Consume Ghost API" as const;
export const version = 1 as const;
export const defaults = { name: "Ghost" } as const;
export const credentials = [
	{
		name: "ghostAdminApi",
		required: true,
		displayOptions: { show: { source: ["adminApi"] } },
	},
	{
		name: "ghostContentApi",
		required: true,
		displayOptions: { show: { source: ["contentApi"] } },
	},
] as const;

/**
 * Consume Ghost API
 */
export interface GhostNodeParameters {
	/**
	 * Pick where your data comes from, Content or Admin API
	 * Default: "contentApi"
	 */
	readonly source?: "adminApi" | "contentApi";

	/**
	 * Default: "post"
	 */
	readonly resource?: "post";
}
