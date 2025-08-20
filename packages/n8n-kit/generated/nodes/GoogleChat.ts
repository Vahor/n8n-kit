// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Google/Chat/GoogleChat.node.ts' node

export const name = "googleChat" as const;
export const description = "Consume Google Chat API" as const;
export const version = 1 as const;
export const defaults = { name: "Google Chat" } as const;
export const credentials = [
	{
		name: "googleApi",
		required: true,
		testedBy: "testGoogleTokenAuth",
		displayOptions: { show: { authentication: ["serviceAccount"] } },
	},
	{
		name: "googleChatOAuth2Api",
		required: true,
		displayOptions: { show: { authentication: ["oAuth2"] } },
	},
] as const;

/**
 * Consume Google Chat API
 */
export interface GoogleChatNodeParameters {
	/**
	 * Default: "serviceAccount"
	 */
	readonly authentication?: "oAuth2" | "serviceAccount";

	/**
	 * Default: "message"
	 */
	readonly resource: "member" | "message" | "space";
}
