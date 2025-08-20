// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Zoom/Zoom.node.ts' node

export const name = "zoom" as const;
export const description = "Consume Zoom API" as const;
export const version = 1 as const;
export const defaults = { name: "Zoom" } as const;
export const credentials = [
	{
		name: "zoomApi",
		required: true,
		displayOptions: { show: { authentication: ["accessToken"] } },
	},
	{
		name: "zoomOAuth2Api",
		required: true,
		displayOptions: { show: { authentication: ["oAuth2"] } },
	},
] as const;

/**
 * Consume Zoom API
 */
export interface ZoomNodeParameters {
	/**
	 * Default: "accessToken"
	 */
	readonly authentication?: "accessToken" | "oAuth2";

	/**
	 * Default: "meeting"
	 */
	readonly resource?: "meeting";
}
