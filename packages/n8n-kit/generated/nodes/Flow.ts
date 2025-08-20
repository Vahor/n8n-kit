// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Flow/Flow.node.ts' node

export const name = "flow" as const;
export const description = "Consume Flow API" as const;
export const version = 1 as const;
export const defaults = { name: "Flow" } as const;
export const credentials = [{ name: "flowApi", required: true }] as const;

/**
 * Consume Flow API
 */
export interface FlowNodeParameters {
	/**
	 * Default: "task"
	 */
	readonly resource?: "task";
}
