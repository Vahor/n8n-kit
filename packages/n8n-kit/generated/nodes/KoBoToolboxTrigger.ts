// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/KoBoToolbox/KoBoToolboxTrigger.node.ts' node

export const name = "koBoToolboxTrigger" as const;
export const description = "Process KoBoToolbox submissions" as const;
export const version = 1 as const;
export const defaults = { name: "KoBoToolbox Trigger" } as const;
export const credentials = [
	{ name: "koBoToolboxApi", required: true },
] as const;

/**
 * Process KoBoToolbox submissions
 */
export interface KoBoToolboxTriggerNodeParameters {
	/**
	 * Form ID (e.g. aSAvYreNzVEkrWg5Gdcvg). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
	 * Type options: {"loadOptionsMethod":"loadForms"}
	 */
	readonly formId: string;

	/**
	 * Default: "formSubmission"
	 */
	readonly triggerOn: "formSubmission";
}
