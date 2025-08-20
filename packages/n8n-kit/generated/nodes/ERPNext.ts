// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/ERPNext/ERPNext.node.ts' node

export const name = "erpNext" as const;
export const description = "Consume ERPNext API" as const;
export const version = 1 as const;
export const defaults = { name: "ERPNext" } as const;
export const credentials = [{ name: "erpNextApi", required: true }] as const;

/**
 * Consume ERPNext API
 */
export interface ERPNextNodeParameters {
	/**
	 * Default: "document"
	 */
	readonly resource?: "document";
}
