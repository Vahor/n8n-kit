// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/TheHive/TheHiveTrigger.node.ts' node

export const name = "theHiveTrigger" as const;
export const description =
	"Starts the workflow when TheHive events occur" as const;
export const version = 2 as const;
export const defaults = { name: "TheHive Trigger" } as const;
export const credentials = undefined;

/**
 * Starts the workflow when TheHive events occur
 */
export interface TheHiveTriggerNodeParameters {
	/**
	 */
	readonly notice?: string;
}
