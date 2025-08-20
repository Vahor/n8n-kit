// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/ActionNetwork/ActionNetwork.node.ts' node

export const name = "actionNetwork" as const;
export const description = "Consume the Action Network API" as const;
export const version = 1 as const;
export const defaults = { name: "Action Network" } as const;
export const credentials = [
	{ name: "actionNetworkApi", required: true },
] as const;

/**
 * Consume the Action Network API
 */
export interface ActionNetworkNodeParameters {
	/**
	 * Default: "attendance"
	 */
	readonly resource?:
		| "attendance"
		| "event"
		| "person"
		| "personTag"
		| "petition"
		| "signature"
		| "tag";
}
