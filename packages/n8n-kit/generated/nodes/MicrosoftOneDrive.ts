// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Microsoft/OneDrive/MicrosoftOneDrive.node.ts' node

export const name = "microsoftOneDrive" as const;
export const description = "Consume Microsoft OneDrive API" as const;
export const version = 1 as const;
export const defaults = { name: "Microsoft OneDrive" } as const;
export const credentials = [
	{ name: "microsoftOneDriveOAuth2Api", required: true },
] as const;

/**
 * Consume Microsoft OneDrive API
 */
export interface MicrosoftOneDriveNodeParameters {
	/**
	 * Default: "file"
	 */
	readonly resource?: "file" | "folder";
}
