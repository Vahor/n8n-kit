// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Demio/Demio.node.ts' node

export const name = "demio" as const;
export const description = "Consume the Demio API" as const;
export const version = 1 as const;
export const defaults = { name: "Demio" } as const;
export const credentials = [{ name: "demioApi", required: true }] as const;

/**
 * Consume the Demio API
 */
export interface DemioNodeParameters {
	/**
	 * Default: "event"
	 */
	readonly resource?: "event" | "report";
}
