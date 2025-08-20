// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Storyblok/Storyblok.node.ts' node

export const name = "storyblok" as const;
export const description = "Consume Storyblok API" as const;
export const version = 1 as const;
export const defaults = { name: "Storyblok" } as const;
export const credentials = [
	{
		name: "storyblokContentApi",
		required: true,
		displayOptions: { show: { source: ["contentApi"] } },
	},
	{
		name: "storyblokManagementApi",
		required: true,
		displayOptions: { show: { source: ["managementApi"] } },
	},
] as const;

/**
 * Consume Storyblok API
 */
export interface StoryblokNodeParameters {
	/**
	 * Pick where your data comes from, Content or Management API
	 * Default: "contentApi"
	 */
	readonly source?: "contentApi" | "managementApi";

	/**
	 * Default: "story"
	 */
	readonly resource?: "story";
}
