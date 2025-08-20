// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Google/Task/GoogleTasks.node.ts' node

export const name = "googleTasks" as const;
export const description = "Consume Google Tasks API" as const;
export const version = 1 as const;
export const defaults = { name: "Google Tasks" } as const;
export const credentials = [
	{ name: "googleTasksOAuth2Api", required: true },
] as const;

/**
 * Consume Google Tasks API
 */
export interface GoogleTasksNodeParameters {
	/**
	 * Default: "task"
	 */
	readonly resource?: "task";
}
