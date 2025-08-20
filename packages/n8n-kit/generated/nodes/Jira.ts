// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Jira/Jira.node.ts' node

export const name = "jira" as const;
export const description = "Consume Jira Software API" as const;
export const version = 1 as const;
export const defaults = { name: "Jira Software" } as const;
export const credentials = [
	{
		name: "jiraSoftwareCloudApi",
		required: true,
		displayOptions: { show: { jiraVersion: ["cloud"] } },
	},
	{
		name: "jiraSoftwareServerApi",
		required: true,
		displayOptions: { show: { jiraVersion: ["server"] } },
	},
	{
		name: "jiraSoftwareServerPatApi",
		required: true,
		displayOptions: { show: { jiraVersion: ["serverPat"] } },
	},
] as const;

/**
 * Consume Jira Software API
 */
export interface JiraNodeParameters {
	/**
	 * Default: "cloud"
	 */
	readonly jiraVersion?: "cloud" | "server" | "serverPat";

	/**
	 * Default: "issue"
	 */
	readonly resource?: "issue" | "issueAttachment" | "issueComment" | "user";
}
