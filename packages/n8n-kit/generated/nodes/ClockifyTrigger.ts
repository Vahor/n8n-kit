// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Clockify/ClockifyTrigger.node.ts' node

export const name = "clockifyTrigger" as const;
export const description = "Listens to Clockify events" as const;
export const version = 1 as const;
export const defaults = { name: "Clockify Trigger" } as const;
export const credentials = [{ name: "clockifyApi", required: true }] as const;

/**
 * Listens to Clockify events
 */
export interface ClockifyTriggerNodeParameters {
	/**
	 * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
	 * Type options: {"loadOptionsMethod":"listWorkspaces"}
	 */
	readonly workspaceId: string;

	/**
	 * Default: "EntryTypes.NEW_TIME_ENTRY"
	 */
	readonly watchField: "EntryTypes.NEW_TIME_ENTRY";
}
