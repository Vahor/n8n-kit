// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Grist/Grist.node.ts' node

export const name = "grist" as const;
export const description = "Consume the Grist API" as const;
export const version = 1 as const;
export const defaults = { name: "Grist" } as const;
export const credentials = [
	{ name: "gristApi", required: true, testedBy: "gristApiTest" },
] as const;

/**
 * Consume the Grist API
 */
export type GristNodeParameters = {};
