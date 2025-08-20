// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Zulip/Zulip.node.ts' node

export const name = "zulip" as const;
export const description = "Consume Zulip API" as const;
export const version = 1 as const;
export const defaults = { name: "Zulip" } as const;
export const credentials = [{ name: "zulipApi", required: true }] as const;

/**
 * Consume Zulip API
 */
export interface ZulipNodeParameters {
	/**
	 * Default: "message"
	 */
	readonly resource?: "message" | "stream" | "user";
}
