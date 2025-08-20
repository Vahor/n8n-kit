// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Start/Start.node.ts' node

export const name = "start" as const;
export const description =
	"Starts the workflow execution from this node" as const;
export const version = 1 as const;
export const defaults = { name: "Start", color: "#00e000" } as const;
export const credentials = undefined;

/**
 * Starts the workflow execution from this node
 */
export interface StartNodeParameters {
	/**
	 */
	readonly notice?: string;
}
