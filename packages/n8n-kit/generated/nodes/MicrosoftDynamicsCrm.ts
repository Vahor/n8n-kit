// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Microsoft/Dynamics/MicrosoftDynamicsCrm.node.ts' node

export const name = "microsoftDynamicsCrm" as const;
export const description = "Consume Microsoft Dynamics CRM API" as const;
export const version = 1 as const;
export const defaults = { name: "Microsoft Dynamics CRM" } as const;
export const credentials = [
	{ name: "microsoftDynamicsOAuth2Api", required: true },
] as const;

/**
 * Consume Microsoft Dynamics CRM API
 */
export interface MicrosoftDynamicsCrmNodeParameters {
	/**
	 * Default: "account"
	 */
	readonly resource?: "account";
}
