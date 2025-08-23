// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Elastic/ElasticSecurity/ElasticSecurity.node.ts' node

export const description = "Consume the Elastic Security API" as const;
export const type = "n8n-nodes-base.elasticSecurity" as const;
export const version = 1 as const;
export const credentials = [{"name":"elasticSecurityApi","required":true}] as const;

/**
 * Consume the Elastic Security API
 */
export interface ElasticSecurityNodeParameters {

    /**
     * Default: "case"
     */
    readonly resource?: "case" | "caseComment" | "caseTag" | "connector";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "delete" | "get" | "getAll" | "getStatus" | "update" | "add" | "get" | "getAll" | "remove" | "update" | "add" | "remove" | "create";

    readonly title?: string;

    /**
     * Connectors allow you to send Elastic Security cases into other systems (only ServiceNow, Jira, or IBM Resilient). Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getConnectors"}
     */
    readonly connectorId?: string;

    /**
     * Default: ".jira"
     */
    readonly connectorType?: ".resilient" | ".jira" | ".servicenow";

    /**
     * Type of the Jira issue to create for this case
     */
    readonly issueType?: string;

    /**
     * Priority of the Jira issue to create for this case
     */
    readonly priority?: string;

    /**
     * Urgency of the ServiceNow ITSM issue to create for this case
     * Default: 1
     */
    readonly urgency?: "1" | "2" | "3";

    /**
     * Severity of the ServiceNow ITSM issue to create for this case
     * Default: 1
     */
    readonly severity?: "1" | "2" | "3";

    /**
     * Impact of the ServiceNow ITSM issue to create for this case
     * Default: 1
     */
    readonly impact?: "1" | "2" | "3";

    /**
     * Category of the ServiceNow ITSM issue to create for this case
     */
    readonly category?: string;

    /**
     * Comma-separated list of numerical types of the IBM Resilient issue to create for this case
     */
    readonly issueTypes?: string;

    /**
     * Severity code of the IBM Resilient issue to create for this case
     * Default: 1
     * Type options: {"minValue":0}
     */
    readonly severityCode?: number;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "description"?: string, "owner"?: string, "syncAlerts"?: boolean } | { "owner"?: string };

    readonly caseId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 50
     * Type options: {"minValue":1}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly filters?: { "status"?: "open" | "in-progress" | "closed", "tags"?: any[] };

    /**
     * Default: {}
     */
    readonly sortOptions?: { "sortOptionsProperties": any };

    /**
     * Default: {}
     */
    readonly updateFields?: { "description"?: string, "status"?: "closed" | "open" | "in-progress", "syncAlerts"?: boolean, "title"?: string, "version"?: string };

    readonly comment?: string;

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simple?: boolean;

    /**
     * ID of the case comment to retrieve
     */
    readonly commentId?: string;

    /**
     * Tag to attach to the case. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getTags"}
     */
    readonly tag?: string;

    /**
     * Connectors allow you to send Elastic Security cases into other systems (only ServiceNow, Jira, or IBM Resilient)
     */
    readonly name?: string;

    /**
     * URL of the third-party instance
     */
    readonly apiUrl?: string;

    /**
     * Jira-registered email
     */
    readonly email?: string;

    /**
     * Jira API token
     * Type options: {"password":true}
     */
    readonly apiToken?: string;

    /**
     * Jira Project Key
     */
    readonly projectKey?: string;

    /**
     * ServiceNow ITSM username
     */
    readonly username?: string;

    /**
     * ServiceNow ITSM password
     * Type options: {"password":true}
     */
    readonly password?: string;

    /**
     * IBM Resilient API key ID
     * Type options: {"password":true}
     */
    readonly apiKeyId?: string;

    /**
     * IBM Resilient API key secret
     * Type options: {"password":true}
     */
    readonly apiKeySecret?: string;

    /**
     * IBM Resilient organization ID
     */
    readonly orgId?: string;


}

