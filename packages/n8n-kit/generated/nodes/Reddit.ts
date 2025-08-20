// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Reddit/Reddit.node.ts' node

export const name = "reddit" as const;
export const description = "Consume the Reddit API" as const;
export const version = 1 as const;
export const defaults = { name: "Reddit" } as const;
export const credentials = [
	{
		name: "redditOAuth2Api",
		required: true,
		displayOptions: { show: { resource: ["postComment", "post", "profile"] } },
	},
] as const;

/**
 * Consume the Reddit API
 */
export interface RedditNodeParameters {
	/**
	 * Default: "post"
	 */
	readonly resource?: "post" | "postComment" | "profile" | "subreddit" | "user";
}
