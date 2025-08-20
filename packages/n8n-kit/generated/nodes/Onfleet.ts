// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Onfleet/Onfleet.node.ts' node

export const name = "onfleet" as const;
export const description = "Consume Onfleet API" as const;
export const version = 1 as const;
export const defaults = { name: "Onfleet" } as const;
export const credentials = [
	{ name: "onfleetApi", required: true, testedBy: "onfleetApiTest" },
] as const;

/**
 * Consume Onfleet API
 */
export interface OnfleetNodeParameters {
	/**
	 * The resource to perform operations on
	 * Default: "task"
	 */
	readonly resource?:
		| "admin"
		| "container"
		| "destination"
		| "hub"
		| "organization"
		| "recipient"
		| "task"
		| "team"
		| "worker";
}
