// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Misp/Misp.node.ts' node

export const name = "misp" as const;
export const description = "Consume the MISP API" as const;
export const version = 1 as const;
export const defaults = { name: "MISP" } as const;
export const credentials = [{ name: "mispApi", required: true }] as const;

/**
 * Consume the MISP API
 */
export interface MispNodeParameters {
	/**
	 * Default: "attribute"
	 */
	readonly resource?:
		| "attribute"
		| "event"
		| "eventTag"
		| "feed"
		| "galaxy"
		| "noticelist"
		| "object"
		| "organisation"
		| "tag"
		| "user"
		| "warninglist";
}
