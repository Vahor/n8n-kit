// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Uplead/Uplead.node.ts' node

export const name = "uplead" as const;
export const description = "Consume Uplead API" as const;
export const version = 1 as const;
export const defaults = { name: "Uplead" } as const;
export const credentials = [{ name: "upleadApi", required: true }] as const;

/**
 * Consume Uplead API
 */
export interface UpleadNodeParameters {
	/**
	 * Default: "company"
	 */
	readonly resource?: "company" | "person";
}
