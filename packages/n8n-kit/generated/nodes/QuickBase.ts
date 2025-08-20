// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/QuickBase/QuickBase.node.ts' node

export const name = "quickbase" as const;
export const description = "Integrate with the Quick Base RESTful API" as const;
export const version = 1 as const;
export const defaults = { name: "Quick Base" } as const;
export const credentials = [{ name: "quickbaseApi", required: true }] as const;

/**
 * Integrate with the Quick Base RESTful API
 */
export interface QuickBaseNodeParameters {
	/**
	 * Default: "record"
	 */
	readonly resource?: "field" | "file" | "record" | "report";
}
