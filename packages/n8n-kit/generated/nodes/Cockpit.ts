// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Cockpit/Cockpit.node.ts' node

export const name = "cockpit" as const;
export const description = "Consume Cockpit API" as const;
export const version = 1 as const;
export const defaults = { name: "Cockpit" } as const;
export const credentials = [{ name: "cockpitApi", required: true }] as const;

/**
 * Consume Cockpit API
 */
export interface CockpitNodeParameters {
	/**
	 * Default: "collection"
	 */
	readonly resource?: "collection" | "form" | "singleton";
}
