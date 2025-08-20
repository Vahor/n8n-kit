// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Odoo/Odoo.node.ts' node

export const name = "odoo" as const;
export const description = "Consume Odoo API" as const;
export const version = 1 as const;
export const defaults = { name: "Odoo" } as const;
export const credentials = [
	{ name: "odooApi", required: true, testedBy: "odooApiTest" },
] as const;

/**
 * Consume Odoo API
 */
export interface OdooNodeParameters {
	/**
	 * Default: "contact"
	 */
	readonly resource?: "contact" | "custom" | "note" | "opportunity";
}
