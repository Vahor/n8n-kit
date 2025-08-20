// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Box/Box.node.ts' node

export const name = "box" as const;
export const description = "Consume Box API" as const;
export const version = 1 as const;
export const defaults = { name: "Box" } as const;
export const credentials = [{ name: "boxOAuth2Api", required: true }] as const;

/**
 * Consume Box API
 */
export interface BoxNodeParameters {
	/**
	 * Default: "file"
	 */
	readonly resource?: "file" | "folder";
}
