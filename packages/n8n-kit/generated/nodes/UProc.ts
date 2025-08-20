// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/UProc/UProc.node.ts' node

export const name = "uproc" as const;
export const description = "Consume uProc API" as const;
export const version = 1 as const;
export const defaults = { name: "uProc" } as const;
export const credentials = [{ name: "uprocApi", required: true }] as const;

/**
 * Consume uProc API
 */
export interface UProcNodeParameters {
	/**
	 * Default: {}
	 */
	readonly additionalOptions?: { dataWebhook: string };
}
