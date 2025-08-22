// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Jira/Jira.node.ts' node

export const name = "jira" as const;
export const description = "Consume Jira Software API" as const;
export const version = 1 as const;

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

    /**
     * Default: "create"
     */
    readonly operation?: "changelog" | "create" | "delete" | "get" | "getAll" | "notify" | "transitions" | "update" | "add" | "get" | "getAll" | "remove" | "add" | "get" | "getAll" | "remove" | "update" | "create" | "delete" | "get";

    /**
     * Default: {"mode":"list","value":""}
     */
    readonly project?: any;

    /**
     * Default: {"mode":"list","value":""}
     */
    readonly issueType?: any;

    /**
     */
    readonly summary?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "assignee"?: any, "description"?: string, "componentIds"?: string[], "customFieldsUi"?: { "customFieldsValues": any }, "labels"?: string[], "serverLabels"?: string, "parentIssueKey"?: string, "priority"?: any, "reporter"?: any, "updateHistory"?: boolean } | { "expand"?: string, "fields"?: string, "fieldsByKey"?: boolean, "properties"?: string, "updateHistory"?: boolean } | { "htmlBody"?: string, "subject"?: string, "textBody"?: string } | { "expand"?: string, "transitionId"?: string, "skipRemoteOnlyCondition"?: boolean } | { "password"?: string, "notification"?: boolean } | { "expand"?: ("groups" | "applicationRoles")[] };

    /**
     */
    readonly issueKey?: string | string | string | string | string | string | string | string | string | string | string | string | string;

    /**
     * Default: {}
     */
    readonly updateFields?: { "assignee"?: any, "description"?: string, "customFieldsUi"?: { "customFieldsValues": any }, "issueType"?: string, "labels"?: string[], "serverLabels"?: string, "parentIssueKey"?: string, "priority"?: any, "reporter"?: any, "summary"?: string, "statusId"?: any };

    /**
     */
    readonly deleteSubtasks?: boolean;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     */
    readonly simplifyOutput?: boolean;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean | boolean | boolean | boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number | number | number | number;

    /**
     * Default: {}
     */
    readonly options?: { "expand"?: ("changelog" | "editmeta" | "names" | "operations" | "renderedFields" | "schema" | "transitions" | "versionedRepresentations")[], "fields"?: string, "fieldsByKey"?: boolean, "jql"?: string } | { "expand"?: "renderedBody", "wikiMarkup"?: boolean } | { "expand"?: "renderedBody" } | { "expand"?: "renderedBody", "orderBy"?: "+created" | "-created" } | { "expand"?: "renderedBody", "wikiMarkup"?: boolean };

    /**
     */
    readonly jsonParameters?: boolean | boolean | boolean;

    /**
     * The recipients of the email notification for the issue
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly notificationRecipientsUi?: { "notificationRecipientsValues": any };

    /**
     * The recipients of the email notification for the issue
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly notificationRecipientsJson?: string;

    /**
     * Restricts the notifications to users with the specified permissions
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly notificationRecipientsRestrictionsUi?: { "notificationRecipientsRestrictionsValues": any };

    /**
     * Restricts the notifications to users with the specified permissions
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly notificationRecipientsRestrictionsJson?: string;

    /**
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * The ID of the attachment
     */
    readonly attachmentId?: string | string;

    /**
     */
    readonly download?: boolean | boolean;

    /**
     * Default: "data"
     */
    readonly binaryProperty?: string | string;

    /**
     * Comment's text
     */
    readonly comment?: string | string;

    /**
     * The Atlassian Document Format (ADF). Online builder can be found <a href="https://developer.atlassian.com/cloud/jira/platform/apis/document/playground/">here</a>.
     */
    readonly commentJson?: string | string;

    /**
     * The ID of the comment
     */
    readonly commentId?: string | string | string;

    /**
     */
    readonly username?: string;

    /**
     */
    readonly emailAddress?: string;

    /**
     */
    readonly displayName?: string;

    /**
     * Account ID of the user to delete
     */
    readonly accountId?: string | string;


}

