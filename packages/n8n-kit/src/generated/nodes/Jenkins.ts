// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/Jenkins/Jenkins.node.ts' node

export const description = "Consume Jenkins API" as const;
export const type = "n8n-nodes-base.jenkins" as const;
export const version = 1 as const;
export const credentials = [{"name":"jenkinsApi","required":true,"testedBy":"jenkinApiCredentialTest"}] as const;

/**
 * Consume Jenkins API
 */
export interface JenkinsNodeParameters {

    /**
     * Default: "job"
     */
    readonly resource?: "build" | "instance" | "job";

    /**
     * Possible operations
     * Default: "trigger"
     */
    readonly operation?: "copy" | "create" | "trigger" | "triggerParams" | "cancelQuietDown" | "quietDown" | "restart" | "safeRestart" | "safeExit" | "exit" | "getAll";

    readonly triggerParamsNotice?: string;

    /**
     * Name of the job. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.
     * Type options: {"loadOptionsMethod":"getJobs"}
     */
    readonly job?: string;

    /**
     * Parameters for Jenkins job
     * Default: {}
     * Type options: {"multipleValues":true}
     */
    readonly param?: { "params": any };

    /**
     * Name of the new Jenkins job
     */
    readonly newJob?: string;

    /**
     * XML of Jenkins config
     */
    readonly xml?: string;

    readonly createNotice?: string;

    /**
     * Freeform reason for quiet down mode
     */
    readonly reason?: string;

    readonly instanceNotice?: string;

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


}

