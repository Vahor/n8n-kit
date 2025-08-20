// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/SseTrigger/SseTrigger.node.ts' node

export const name = "sseTrigger" as const;
export const description =
	"Triggers the workflow when Server-Sent Events occur" as const;
export const version = 1 as const;
export const defaults = { name: "SSE Trigger", color: "#225577" } as const;
export const credentials = undefined;

/**
 * Triggers the workflow when Server-Sent Events occur
 */
export interface SseTriggerNodeParameters {
	/**
	 * The URL to receive the SSE from
	 */
	readonly url: string;
}
