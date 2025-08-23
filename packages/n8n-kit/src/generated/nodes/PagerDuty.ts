// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/PagerDuty/PagerDuty.node.ts' node

export const description = "Consume PagerDuty API" as const;
export const type = "n8n-nodes-base.pagerDuty" as const;
export const version = 1 as const;
export const credentials = [{"name":"pagerDutyApi","required":true,"displayOptions":{"show":{"authentication":["apiToken"]}}},{"name":"pagerDutyOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const outputs = {"main":"main"} as const;

export interface PagerDutyNodeParameters {

    /**
     * Default: "apiToken"
     */
    readonly authentication?: "apiToken" | "oAuth2";

    /**
     * Default: "incident"
     */
    readonly resource?: "incident" | "incidentNote" | "logEntry" | "user";

    /**
     * Default: "create"
     */
    readonly operation?: "create" | "get" | "getAll" | "update" | "create" | "getAll" | "get" | "getAll" | "get";

    /**
     * A succinct description of the nature, symptoms, cause, or effect of the incident
     */
    readonly title?: string;

    /**
     * The incident will be created on this service. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getServices"}
     */
    readonly serviceId?: string;

    /**
     * The email address of a valid user associated with the account making the request
     */
    readonly email?: string;

    /**
     * Default: {}
     */
    readonly additionalFields?: { "escalationPolicyId"?: string, "details"?: string, "incidentKey"?: string, "priorityId"?: string, "urgency"?: "high" | "low" };

    /**
     * Default: {}
     * Type options: {"multipleValues":false}
     */
    readonly conferenceBridgeUi?: { "conferenceBridgeValues": any };

    /**
     * Unique identifier for the incident
     */
    readonly incidentId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":500}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly options?: { "dateRange"?: "all", "incidentKey"?: string, "include"?: ("acknowledgers" | "assignees" | "conferenceBridge" | "escalationPolicies" | "firstTriggerLogEntries" | "priorities" | "services" | "teams" | "users")[], "serviceIds"?: any[], "since"?: string, "sortBy"?: string, "statuses"?: ("acknowledged" | "resolved" | "triggered")[], "teamIds"?: string, "timeZone"?: string, "until"?: string, "urgencies"?: ("high" | "low")[], "userIds"?: string } | { "include"?: ("channels" | "incidents" | "services" | "teams")[], "isOverview"?: boolean, "since"?: string, "timeZone"?: string, "until"?: string };

    /**
     * Default: {}
     */
    readonly updateFields?: { "escalationLevel"?: number, "escalationPolicyId"?: string, "priorityId"?: string, "resolution"?: string, "status"?: "acknowledged" | "resolved", "title"?: string, "urgency"?: "high" | "low" };

    /**
     * The note content
     */
    readonly content?: string;

    /**
     * Unique identifier for the log entry
     */
    readonly logEntryId?: string;

    /**
     * Unique identifier for the user
     */
    readonly userId?: string;


}

