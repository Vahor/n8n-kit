// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Baserow/Baserow.node.ts' node

export const name = "baserow" as const;
export const description = "Consume the Baserow API" as const;
export const version = 1 as const;
export const defaults = { name: "Baserow" } as const;
export const credentials = [{ name: "baserowApi", required: true }] as const;

/**
 * Consume the Baserow API
 */
export interface BaserowNodeParameters {
	/**
	 * Default: "row"
	 */
	readonly resource?: "row";

	/**
	 * Default: "getAll"
	 */
	readonly operation?: "create" | "delete" | "get" | "getAll" | "update";
}
