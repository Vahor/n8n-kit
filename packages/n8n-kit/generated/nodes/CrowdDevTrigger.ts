// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/CrowdDev/CrowdDevTrigger.node.ts' node

export const name = "crowdDevTrigger" as const;
export const description =
	"Starts the workflow when crowd.dev events occur." as const;
export const version = 1 as const;
export const defaults = { name: "crowd.dev Trigger" } as const;
export const credentials = [{ name: "crowdDevApi", required: true }] as const;

/**
 * Starts the workflow when crowd.dev events occur.
 */
export interface CrowdDevTriggerNodeParameters {
	/**
	 * What will trigger an automation
	 * Default: "new_activity"
	 */
	readonly trigger: "new_activity" | "new_member";
}
