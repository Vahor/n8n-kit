// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Phantombuster/Phantombuster.node.ts' node

export const name = "phantombuster" as const;
export const description = "Consume Phantombuster API" as const;
export const version = 1 as const;
export const defaults = { name: "Phantombuster" } as const;
export const credentials = [
	{ name: "phantombusterApi", required: true },
] as const;

/**
 * Consume Phantombuster API
 */
export interface PhantombusterNodeParameters {
	/**
	 * Default: "agent"
	 */
	readonly resource?: "agent";
}
