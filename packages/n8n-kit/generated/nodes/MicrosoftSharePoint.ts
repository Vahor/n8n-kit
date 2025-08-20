// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Microsoft/SharePoint/MicrosoftSharePoint.node.ts' node

export const name = "microsoftSharePoint" as const;
export const description = "Interact with Microsoft SharePoint API" as const;
export const version = 1 as const;
export const defaults = { name: "Microsoft SharePoint" } as const;
export const credentials = [
	{ name: "microsoftSharePointOAuth2Api", required: true },
] as const;

/**
 * Interact with Microsoft SharePoint API
 */
export interface MicrosoftSharePointNodeParameters {
	/**
	 * Default: "file"
	 */
	readonly resource?: "file" | "item" | "list";
}
