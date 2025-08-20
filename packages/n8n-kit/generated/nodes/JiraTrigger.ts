// GENERATED FILE, DO NOT EDIT
// Generated from 'vendor/n8n/packages/nodes-base/nodes/Jira/JiraTrigger.node.ts' node

export const name = "jiraTrigger" as const;
export const description = "Starts the workflow when Jira events occur" as const;
export const version = 1.1 as const;
export const defaults = {"name":"Jira Trigger"} as const;
export const credentials = [{"displayName":"Credentials to Connect to Jira","name":"jiraSoftwareCloudApi","required":true,"displayOptions":{"show":{"jiraVersion":["cloud"]}}},{"displayName":"Credentials to Connect to Jira","name":"jiraSoftwareServerApi","required":true,"displayOptions":{"show":{"jiraVersion":["server"]}}},{"displayName":"Credentials to Connect to Jira","name":"jiraSoftwareServerPatApi","required":true,"displayOptions":{"show":{"jiraVersion":["serverPat"]}}},{"name":"httpQueryAuth","displayName":"Credentials to Authenticate Webhook","displayOptions":{"show":{"authenticateWebhook":[true]}}},{"name":"httpQueryAuth","displayName":"Credentials to Authenticate Webhook","displayOptions":{"show":{"incomingAuthentication":["queryAuth"]}}}] as const

/**
 * Starts the workflow when Jira events occur
 */
export interface JiraTriggerNodeParameters {

    /**
     * Default: "cloud"
     */
    readonly jiraVersion?: "cloud" | "server" | "serverPat";

    /**
     * Whether authentication should be activated for the incoming webhooks (makes it more secure)
     */
    readonly authenticateWebhook?: boolean;

    /**
     * If authentication should be activated for the webhook (makes it more secure)
     * Default: "none"
     */
    readonly incomingAuthentication?: "queryAuth" | "none";

    /**
     * The events to listen to
     * Default: []
     */
    readonly events: ("*" | "board_configuration_changed" | "board_created" | "board_deleted" | "board_updated" | "comment_created" | "comment_deleted" | "comment_updated" | "jira:issue_created" | "jira:issue_deleted" | "issuelink_created" | "issuelink_deleted" | "jira:issue_updated" | "option_attachments_changed" | "option_issuelinks_changed" | "option_subtasks_changed" | "option_timetracking_changed" | "option_unassigned_issues_changed" | "option_voting_changed" | "option_watching_changed" | "project_created" | "project_deleted" | "project_updated" | "sprint_closed" | "sprint_created" | "sprint_deleted" | "sprint_started" | "sprint_updated" | "user_created" | "user_deleted" | "user_updated" | "jira:version_created" | "jira:version_deleted" | "jira:version_moved" | "jira:version_released" | "jira:version_unreleased" | "jira:version_updated" | "worklog_created" | "worklog_deleted" | "worklog_updated")[];

    /**
     * Default: {}
     */
    readonly additionalFields?: { "excludeBody"?: boolean, "filter"?: string, "includeFields"?: ("attachment.id" | "board.id" | "comment.id" | "issue.id" | "mergeVersion.id" | "modifiedUser.accountId" | "modifiedUser.key" | "modifiedUser.name" | "project.id" | "project.key" | "property.key" | "sprint.id" | "version.id" | "worklog.id")[] };


}

