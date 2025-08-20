// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Google/YouTube/YouTube.node.ts' node

export const name = "youTube" as const;
export const description = "Consume YouTube API" as const;
export const version = 1 as const;
export const defaults = { name: "YouTube" } as const;
export const credentials = [
	{ name: "youTubeOAuth2Api", required: true },
] as const;

/**
 * Consume YouTube API
 */
export interface YouTubeNodeParameters {
	/**
	 * Default: "channel"
	 */
	readonly resource?:
		| "channel"
		| "playlist"
		| "playlistItem"
		| "video"
		| "videoCategory";
}
