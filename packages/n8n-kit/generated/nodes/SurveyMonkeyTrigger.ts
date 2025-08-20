// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/SurveyMonkey/SurveyMonkeyTrigger.node.ts' node

export const name = "surveyMonkeyTrigger" as const;
export const description = "Starts the workflow when Survey Monkey events occur" as const;
export const version = 1 as const;
export const defaults = {"name":"SurveyMonkey Trigger"} as const;
export const credentials = [{"name":"surveyMonkeyApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}}},{"name":"surveyMonkeyOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const

/**
 * Starts the workflow when Survey Monkey events occur
 */
export interface SurveyMonkeyTriggerNodeParameters {

    /**
     * Default: "accessToken"
     */
    readonly authentication?: "accessToken" | "oAuth2";

    /**
     */
    readonly objectType: "collector" | "survey";

    /**
     */
    readonly event?: "collector_created" | "collector_deleted" | "collector_updated" | "response_completed" | "response_created" | "response_deleted" | "response_disqualified" | "response_overquota" | "response_updated" | "survey_created" | "survey_deleted" | "survey_updated";

    /**
     * Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Default: []
     * Type options: {"loadOptionsMethod":"getSurveys"}
     */
    readonly surveyIds?: ()[];

    /**
     * Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Default: []
     * Type options: {"loadOptionsMethod":"getSurveys"}
     */
    readonly surveyId?: string;

    /**
     * Choose from the list, or specify IDs using an <a href="https://docs.n8n.io/code/expressions/">expression</a>
     * Default: []
     * Type options: {"loadOptionsMethod":"getCollectors","loadOptionsDependsOn":["surveyId"]}
     */
    readonly collectorIds?: ()[];

    /**
     * By default the webhook-data only contain the IDs. If this option gets activated, it will resolve the data automatically.
     * Default: true
     */
    readonly resolveData?: boolean;

    /**
     * Whether to return only the answers of the form and not any of the other data
     * Default: true
     */
    readonly onlyAnswers?: boolean;


}

