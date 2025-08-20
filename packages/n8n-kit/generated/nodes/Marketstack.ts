// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Marketstack/Marketstack.node.ts' node

export const name = "marketstack" as const;
export const description = "Consume Marketstack API" as const;
export const version = 1 as const;
export const defaults = { name: "Marketstack" } as const;
export const credentials = [
	{ name: "marketstackApi", required: true },
] as const;

/**
 * Consume Marketstack API
 */
export interface MarketstackNodeParameters {
	/**
	 * Default: "endOfDayData"
	 */
	readonly resource: "endOfDayData" | "exchange" | "ticker";
}
