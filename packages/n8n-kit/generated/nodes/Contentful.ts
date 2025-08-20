// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Contentful/Contentful.node.ts' node

export const name = "contentful" as const;
export const description = "Consume Contentful API" as const;
export const version = 1 as const;
export const defaults = { name: "Contentful" } as const;
export const credentials = [{ name: "contentfulApi", required: true }] as const;

/**
 * Consume Contentful API
 */
export interface ContentfulNodeParameters {
	/**
	 * Pick where your data comes from, delivery or preview API
	 * Default: "deliveryApi"
	 */
	readonly source?: "deliveryApi" | "previewApi";

	/**
	 * Default: "entry"
	 */
	readonly resource?:
		| "undefined"
		| "undefined"
		| "undefined"
		| "undefined"
		| "undefined";
}
