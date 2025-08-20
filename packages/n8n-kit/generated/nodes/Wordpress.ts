// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Wordpress/Wordpress.node.ts' node

export const name = "wordpress" as const;
export const description = "Consume Wordpress API" as const;
export const version = 1 as const;
export const defaults = { name: "Wordpress" } as const;
export const credentials = [{ name: "wordpressApi", required: true }] as const;

/**
 * Consume Wordpress API
 */
export interface WordpressNodeParameters {
	/**
	 * Default: "post"
	 */
	readonly resource?: "post" | "page" | "user";
}
