// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n-nodes-base/dist/nodes/Jira/Jira.node.js' node

export const name = "jira" as const;
export const description = "Consume Jira Software API" as const;
export const version = 1 as const;
export const defaults = {"name":"Jira Software"} as const;
export const credentials = [{"name":"jiraSoftwareCloudApi","required":true,"displayOptions":{"show":{"jiraVersion":["cloud"]}}},{"name":"jiraSoftwareServerApi","required":true,"displayOptions":{"show":{"jiraVersion":["server"]}}}] as const

/**
 * Consume Jira Software API
 */
export interface JiraNodeParameters {

    /**
     * Default: "cloud"
     */
    readonly jiraVersion?: "cloud" | "server";

    /**
     * Default: "issue"
     */
    readonly resource?: "issue" | "issueAttachment" | "issueComment" | "user";

    /**
     * Default: "create"
     */
    readonly operation?: "changelog" | "create" | "delete" | "get" | "getAll" | "notify" | "transitions" | "update" | "add" | "remove";

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
    readonly additionalFields?: { "assignee"?: any, "description"?: string, "componentIds"?: string[], "customFieldsUi"?: { "customFieldsValues": any }, "labels"?: string[], "serverLabels"?: string, "parentIssueKey"?: string, "priority"?: any, "reporter"?: any, "updateHistory"?: boolean, "expand"?: string, "fields"?: string, "fieldsByKey"?: boolean, "properties"?: string, "htmlBody"?: string, "subject"?: string, "textBody"?: string, "transitionId"?: string, "skipRemoteOnlyCondition"?: boolean, "password"?: string, "notification"?: boolean };

    /**
     */
    readonly issueKey?: string;

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
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1,"maxValue":100}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly options?: { "expand"?: ("changelog" | "editmeta" | "names" | "operations" | "renderedFields" | "schema" | "transitions" | "versionedRepresentations")[], "fields"?: string, "fieldsByKey"?: boolean, "jql"?: string };

    /**
     */
    readonly jsonParameters?: boolean;

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
     * Object property name which holds binary data
     * Default: "data"
     */
    readonly binaryPropertyName?: string;

    /**
     * The ID of the attachment
     */
    readonly attachmentId?: string;

    /**
     */
    readonly download?: boolean;

    /**
     * Object property name which holds binary data
     * Default: "data"
     */
    readonly binaryProperty?: string;

    /**
     * Comment's text
     */
    readonly comment?: string;

    /**
     * The Atlassian Document Format (ADF). Online builder can be found <a href="https://developer.atlassian.com/cloud/jira/platform/apis/document/playground/">here</a>.
     */
    readonly commentJson?: string;

    /**
     * The ID of the comment
     */
    readonly commentId?: string;

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
    readonly accountId?: string;


}

