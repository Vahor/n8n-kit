// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Databricks/DatabricksTrigger.node.ts' node

export const description = "Starts the workflow when Databricks job runs or pipeline updates change state" as const;
export const type = "n8n-nodes-base.databricksTrigger" as const;
export const version = 1 as const;
export const credentials = [{"name":"databricksApi","required":true,"displayOptions":{"show":{"authentication":["accessToken"]}}},{"name":"databricksOAuth2Api","required":true,"displayOptions":{"show":{"authentication":["oAuth2"]}}}] as const;
export const inputs = {} as const;
export const outputs = {"main":"main"} as const;

export interface DatabricksTriggerNodeParameters {
    /** Default: "accessToken" */
    readonly authentication?: "accessToken" | "oAuth2";

    /** Default: "job" */
    readonly resource?: "job" | "pipeline";

    /**
     * The job whose runs start the workflow
     * Default: {"mode":"list","value":""}
     */
    readonly jobId?: {
	value: string,
	mode: "list" | "id" | "url",
};

    /** Default: ["runFailed","runSucceeded"] */
    readonly events?: ("runFailed" | "runStarted" | "runSucceeded")[] | ("updateCompleted" | "updateFailed" | "updateStarted")[];

    /**
     * The pipeline whose updates start the workflow
     * Default: {"mode":"list","value":""}
     */
    readonly pipelineId?: {
	value: string,
	mode: "list" | "id" | "url",
};

    /**
     * Whether to return a simplified version of the response instead of the raw data
     * Default: true
     */
    readonly simplify?: boolean;

    readonly pollTimes: { item: { mode: "everyMinute" | (string & {}) }[] };
}
