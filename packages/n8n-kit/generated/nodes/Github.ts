// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Github/Github.node.ts' node

export const name = "github" as const;
export const description = "Consume GitHub API" as const;
export const version = 1.1 as const;
export const defaults = { name: "GitHub" } as const;
export const credentials = [
	{
		name: "githubApi",
		required: true,
		displayOptions: { show: { authentication: ["accessToken"] } },
	},
	{
		name: "githubOAuth2Api",
		required: true,
		displayOptions: { show: { authentication: ["oAuth2"] } },
	},
] as const;

/**
 * Consume GitHub API
 */
export interface GithubNodeParameters {
	/**
	 * Default: "accessToken"
	 */
	readonly authentication?: "accessToken" | "oAuth2";

	/**
	 * Default: "issue"
	 */
	readonly resource?:
		| "file"
		| "issue"
		| "organization"
		| "release"
		| "repository"
		| "review"
		| "user"
		| "workflow";

	/**
	 * Default: "getRepositories"
	 */
	readonly operation?:
		| "getRepositories"
		| "create"
		| "createComment"
		| "edit"
		| "get"
		| "lock"
		| "delete"
		| "list"
		| "getIssues"
		| "getLicense"
		| "getProfile"
		| "getPullRequests"
		| "listPopularPaths"
		| "listReferrers"
		| "invite"
		| "getAll"
		| "update"
		| "disable"
		| "dispatch"
		| "dispatchAndWait"
		| "enable"
		| "getUsage";

	/**
	 */
	readonly webhookNotice?: string;

	/**
	 * Default: {"mode":"list","value":""}
	 */
	readonly owner: any;

	/**
	 * Default: {"mode":"list","value":""}
	 */
	readonly repository: any;

	/**
	 * The workflow to dispatch
	 * Default: {"mode":"list","value":""}
	 */
	readonly workflowId: any;

	/**
	 * The git reference for the workflow dispatch (branch or tag name)
	 * Default: "main"
	 */
	readonly ref: string;

	/**
	 * JSON object with input parameters for the workflow
	 * Default: "{}"
	 */
	readonly inputs?: any;

	/**
	 * The file path of the file. Has to contain the full path.
	 */
	readonly filePath: string;

	/**
	 * Whether the data to upload should be taken from binary field
	 */
	readonly binaryData: boolean;

	/**
	 * The text content of the file
	 */
	readonly fileContent: string;

	/**
	 * Default: "data"
	 */
	readonly binaryPropertyName: string;

	/**
	 */
	readonly commitMessage: string;

	/**
	 * Additional fields to add
	 * Default: {}
	 */
	readonly additionalParameters?: {
		author: any;
		branch: any;
		committer: any;
		reference: any;
	};

	/**
	 * Whether to set the data of the file as binary property instead of returning the raw API response
	 * Default: true
	 */
	readonly asBinaryProperty?: boolean;

	/**
	 * The title of the issue
	 */
	readonly title: string;

	/**
	 * The body of the issue
	 * Type options: {"rows":5}
	 */
	readonly body?: string;

	/**
	 * Default: {"label":""}
	 * Type options: {"multipleValues":true,"multipleValueButtonText":"Add Label"}
	 */
	readonly labels?: { label: string };

	/**
	 * Default: {"assignee":""}
	 * Type options: {"multipleValues":true,"multipleValueButtonText":"Add Assignee"}
	 */
	readonly assignees?: { assignee: string };

	/**
	 * The number of the issue on which to create the comment on
	 */
	readonly issueNumber: number;

	/**
	 * Default: {}
	 * Type options: {"multipleValueButtonText":"Add Field"}
	 */
	readonly editFields?: {
		assignees: { assignee: string };
		body: string;
		labels: { label: string };
		state: "closed" | "open";
		state_reason: "completed" | "not_planned" | "reopened";
		title: string;
	};

	/**
	 * The reason for locking the issue
	 * Default: "resolved"
	 */
	readonly lockReason?: "off-topic" | "too heated" | "resolved" | "spam";

	/**
	 * The tag of the release
	 */
	readonly releaseTag: string;

	/**
	 * Default: {}
	 * Type options: {"multipleValueButtonText":"Add Field"}
	 */
	readonly additionalFields?: {
		name: string;
		body: string;
		draft: boolean;
		prerelease: boolean;
		target_commitish: string;
		tag_name: string;
		commitId: string;
	};

	/**
	 */
	readonly release_id: string;

	/**
	 * Whether to return all results or only up to a given limit
	 */
	readonly returnAll?: boolean;

	/**
	 * Max number of results to return
	 * Default: 50
	 * Type options: {"minValue":1,"maxValue":100}
	 */
	readonly limit?: number;

	/**
	 * Default: {}
	 * Type options: {"multipleValueButtonText":"Add Filter"}
	 */
	readonly getRepositoryIssuesFilters?: {
		assignee: string;
		creator: string;
		mentioned: string;
		labels: string;
		since: any;
		state: "all" | "closed" | "open";
		sort: "created" | "updated" | "comments";
		direction: "asc" | "desc";
	};

	/**
	 * Default: {}
	 * Type options: {"multipleValueButtonText":"Add Filter"}
	 */
	readonly getRepositoryPullRequestsFilters?: {
		state: "all" | "closed" | "open";
		sort: "created" | "updated" | "popularity" | "long-running";
		direction: "asc" | "desc";
	};

	/**
	 * The number of the pull request
	 */
	readonly pullRequestNumber: number;

	/**
	 * ID of the review
	 */
	readonly reviewId: string;

	/**
	 * The review action you want to perform
	 * Default: "approve"
	 */
	readonly event?: "approve" | "requestChanges" | "comment" | "pending";

	/**
	 * The GitHub organization that the user is being invited to
	 */
	readonly organization: string;

	/**
	 * The email address of the invited user
	 */
	readonly email: string;
}
