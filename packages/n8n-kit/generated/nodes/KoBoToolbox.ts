// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/KoBoToolbox/KoBoToolbox.node.ts' node

export const name = "koBoToolbox" as const;
export const description =
	"Work with KoBoToolbox forms and submissions" as const;
export const version = 1 as const;
export const defaults = { name: "KoBoToolbox" } as const;
export const credentials = [
	{ name: "koBoToolboxApi", required: true },
] as const;

/**
 * Work with KoBoToolbox forms and submissions
 */
export interface KoBoToolboxNodeParameters {
	/**
	 * Default: "submission"
	 */
	readonly resource: "file" | "form" | "hook" | "submission";
}
