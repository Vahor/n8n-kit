// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Netlify/Netlify.node.ts' node

export const name = "netlify" as const;
export const description = "Consume Netlify API" as const;
export const version = 1 as const;
export const defaults = { name: "Netlify" } as const;
export const credentials = [{ name: "netlifyApi", required: true }] as const;

/**
 * Consume Netlify API
 */
export interface NetlifyNodeParameters {
	/**
	 * Default: "deploy"
	 */
	readonly resource: "deploy" | "site";
}
