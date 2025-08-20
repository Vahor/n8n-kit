// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Google/GSuiteAdmin/GSuiteAdmin.node.ts' node

export const name = "gSuiteAdmin" as const;
export const description = "Consume Google Workspace Admin API" as const;
export const version = 1 as const;
export const defaults = { name: "Google Workspace Admin" } as const;
export const credentials = [
	{ name: "gSuiteAdminOAuth2Api", required: true },
] as const;

/**
 * Consume Google Workspace Admin API
 */
export interface GSuiteAdminNodeParameters {
	/**
	 * Default: "user"
	 */
	readonly resource?: "device" | "group" | "user";
}
