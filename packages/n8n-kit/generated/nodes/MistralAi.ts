// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/MistralAI/MistralAi.node.ts' node

export const name = "mistralAi" as const;
export const description = "Consume Mistral AI API" as const;
export const version = 1 as const;
export const defaults = { name: "Mistral AI" } as const;
export const credentials = [
	{ name: "mistralCloudApi", required: true },
] as const;

/**
 * Consume Mistral AI API
 */
export interface MistralAiNodeParameters {
	/**
	 * Default: "document"
	 */
	readonly resource?: "document";
}
