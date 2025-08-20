// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Gitlab/GitlabTrigger.node.ts' node

export const name = "gitlabTrigger" as const;
export const description =
	"Starts the workflow when GitLab events occur" as const;
export const version = 1 as const;
export const defaults = { name: "GitLab Trigger" } as const;
export const credentials = [
	{
		name: "gitlabApi",
		required: true,
		displayOptions: { show: { authentication: ["accessToken"] } },
	},
	{
		name: "gitlabOAuth2Api",
		required: true,
		displayOptions: { show: { authentication: ["oAuth2"] } },
	},
] as const;

/**
 * Starts the workflow when GitLab events occur
 */
export interface GitlabTriggerNodeParameters {
	/**
	 * Default: "accessToken"
	 */
	readonly authentication?: "accessToken" | "oAuth2";

	/**
	 * Owner of the repository
	 */
	readonly owner: string;

	/**
	 * The name of the repository
	 */
	readonly repository: string;

	/**
	 * The events to listen to
	 * Default: []
	 */
	readonly events: ("undefined" | "*")[];
}
