// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/ErrorTrigger/ErrorTrigger.node.ts' node

export const name = "errorTrigger" as const;
export const description =
	"Triggers the workflow when another workflow has an error" as const;
export const version = 1 as const;
export const defaults = { name: "Error Trigger", color: "#0000FF" } as const;
export const credentials = undefined;

/**
 * Triggers the workflow when another workflow has an error
 */
export interface ErrorTriggerNodeParameters {
	/**
	 */
	readonly notice?: string;
}
