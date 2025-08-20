// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Microsoft/Outlook/MicrosoftOutlookTrigger.node.ts' node

export const name = "microsoftOutlookTrigger" as const;
export const description =
	"Fetches emails from Microsoft Outlook and starts the workflow on specified polling intervals." as const;
export const version = 1 as const;
export const defaults = { name: "Microsoft Outlook Trigger" } as const;
export const credentials = [
	{ name: "microsoftOutlookOAuth2Api", required: true },
] as const;

/**
 * Fetches emails from Microsoft Outlook and starts the workflow on specified polling intervals.
 */
export interface MicrosoftOutlookTriggerNodeParameters {
	/**
	 * Default: "messageReceived"
	 */
	readonly event?: "messageReceived";
}
