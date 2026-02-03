// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Currents/Currents.node.ts' node

export const description = "Interact with the Currents API for test orchestration and analytics" as const;
export const type = "n8n-nodes-base.currents" as const;
export const version = 1 as const;
export const credentials = [{"name":"currentsApi","required":true}] as const;
export const inputs = {"main":"main"} as const;
export const outputs = {"main":"main"} as const;

export interface CurrentsNodeParameters {
    /** Default: "run" */
    readonly resource?: "action" | "instance" | "project" | "run" | "signature" | "specFile" | "test" | "testResult";

    /** Default: "getAll" */
    readonly operation?: "create" | "delete" | "disable" | "enable" | "get" | "getAll" | "update" | "get" | "get" | "getAll" | "getInsights" | "cancel" | "cancelGithub" | "delete" | "find" | "get" | "getAll" | "reset" | "generate" | "getAll";

    /** The ID of the action */
    readonly actionId?: string;

    /**
     * The Currents project
     * Default: {"mode":"list","value":""}
     */
    readonly projectId?: {
	value: string,
	mode: "list" | "id",
};

    /** Default: {} */
    readonly filters?: { search?: string, status?: ("active" | "disabled")[] } | { branch?: string, ciBuildId?: string, tag?: string } | { author?: string, branch?: string, completionState?: ("CANCELED" | "COMPLETE" | "IN_PROGRESS" | "TIMEOUT")[], dateEnd?: string, dateStart?: string, search?: string, status?: ("FAILED" | "FAILING" | "PASSED" | "RUNNING")[], tag?: string, tagOperator?: "AND" | "OR" } | { authors?: string, branches?: string, groups?: string, specNameFilter?: string, tags?: string } | { authors?: string, branches?: string, groups?: string, minExecutions?: number, spec?: string, tags?: string, testState?: ("failed" | "passed" | "pending" | "skipped")[], title?: string } | { branch?: string, gitAuthor?: string, group?: string, status?: ("failed" | "passed" | "pending" | "skipped")[], tag?: string };

    /** The name of the action (1-255 characters) */
    readonly name?: string;

    /** Default: "quarantine" */
    readonly actionType?: "quarantine" | "skip" | "tag";

    /** Comma-separated list of tags to apply */
    readonly actionTags?: string;

    /**
     * How to match tests for this action
     * Default: "titleContains"
     */
    readonly matcherType?: "specContains" | "specEquals" | "signature" | "titleContains" | "titleEquals";

    /** The value to match against (test title, spec file path, or signature) */
    readonly matcherValue?: string;

    /** Default: {} */
    readonly createOptions?: { description?: string, expiresAfter?: string };

    /** Default: {} */
    readonly updateFields?: { name?: string, description?: string, expiresAfter?: string };

    /** The ID of the spec file execution instance */
    readonly instanceId?: string;

    /**
     * Max number of results to return
     * Default: 10
     * Type options: {"minValue":1,"maxValue":50}
     */
    readonly limit?: number;

    /** Start date for metrics (ISO 8601 format) */
    readonly dateStart?: string;

    /** End date for metrics (ISO 8601 format) */
    readonly dateEnd?: string;

    /** Default: {} */
    readonly options?: { authors?: string, branches?: string, groups?: string, resolution?: "1h" | "1d" | "1w", tags?: string } | { startingAfter?: string, endingBefore?: string } | { includeFailedInDuration?: boolean, order?: "avgDuration" | "failedExecutions" | "failureRate" | "flakeRate" | "flakyExecutions" | "fullyReported" | "overallExecutions" | "suiteSize" | "timeoutExecutions" | "timeoutRate", dir?: "asc" | "desc", page?: number } | { order?: "duration" | "duration_x_samples" | "executions" | "failure_rate_delta" | "failures" | "flakiness" | "flakiness_x_samples" | "flakiness_rate_delta" | "passes" | "title", dir?: "asc" | "desc", page?: number };

    /** The ID of the run */
    readonly runId?: string;

    /** Comma-separated list of machine identifiers to reset (1-63 items) */
    readonly machineIds?: string;

    /** Default: {} */
    readonly resetOptions?: { isBatchedOr8n?: boolean };

    /** The GitHub Actions workflow run ID */
    readonly githubRunId?: string;

    /**
     * The GitHub Actions workflow attempt number
     * Default: 1
     */
    readonly githubRunAttempt?: number;

    /** Default: {} */
    readonly cancelGithubOptions?: { projectId?: string, ciBuildId?: string };

    /** The complete path to the spec file */
    readonly specFilePath?: string;

    /** The test title. For nested describe blocks, use " > " as separator (e.g., "Login > should login with valid credentials"). */
    readonly testTitle?: string;

    /** The unique test signature. Use the Signature resource to generate this from project ID, spec file path, and test title. */
    readonly signature?: string;

}
