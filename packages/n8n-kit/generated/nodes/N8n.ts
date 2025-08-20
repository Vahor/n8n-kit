// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/N8n/N8n.node.ts' node

export const name = "n8n" as const;
export const description = "Handle events and perform actions on your n8n instance" as const;
export const version = 1 as const;
export const defaults = {"name":"n8n"} as const;
export const credentials = [{"name":"n8nApi","required":true}] as const

/**
 * Handle events and perform actions on your n8n instance
 */
export interface N8nNodeParameters {

    /**
     * Default: "workflow"
     */
    readonly resource?: "audit" | "credential" | "execution" | "workflow";

    /**
     * Default: "get"
     */
    readonly operation?: "generate" | "create" | "delete" | "getSchema" | "get" | "getAll" | "activate" | "deactivate" | "update";

    /**
     * Default: {}
     */
    readonly additionalOptions?: { "categories"?: ("credentials" | "database" | "filesystem" | "instance" | "nodes")[], "daysAbandonedWorkflow"?: number };

    /**
     * Name of the new credential
     */
    readonly name?: string;

    /**
     * The available types depend on nodes installed on the n8n instance. Some built-in types include e.g. 'githubApi', 'notionApi', and 'slackApi'.
     */
    readonly credentialTypeName?: string;

    /**
     * A valid JSON object with properties required for this Credential Type. To see the expected format, you can use 'Get Schema' operation.
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly data?: string;

    /**
     */
    readonly credentialId?: string;

    /**
     */
    readonly executionId?: string;

    /**
     * Whether to return all results or only up to a given limit
     */
    readonly returnAll?: boolean;

    /**
     * Max number of results to return
     * Default: 100
     * Type options: {"minValue":1,"maxValue":250}
     */
    readonly limit?: number;

    /**
     * Default: {}
     */
    readonly filters?: { "workflowId"?: any, "status"?: "error" | "success" | "waiting", "activeWorkflows"?: boolean, "tags"?: string, "name"?: string, "projectId"?: string, "excludePinnedData"?: boolean };

    /**
     * Default: {}
     */
    readonly options?: { "activeWorkflows"?: boolean };

    /**
     * Workflow to filter the executions by
     * Default: {"mode":"list","value":""}
     */
    readonly workflowId?: any;

    /**
     * A valid JSON object with required fields: 'name', 'nodes', 'connections' and 'settings'. More information can be found in the <a href="https://docs.n8n.io/api/api-reference/#tag/Workflow/paths/~1workflows/post">documentation</a>.
     * Default: "{ \"name\": \"My workflow\", \"nodes\": [], \"connections\": {}, \"settings\": {} }"
     * Type options: {"alwaysOpenEditWindow":true}
     */
    readonly workflowObject?: string;


}

